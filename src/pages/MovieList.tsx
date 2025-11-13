import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie, SortBy } from '../types';
import { useMovies } from '../context/useMovies';
import { MovieCard } from '../components/MovieCard';
import { ConfirmationModal } from '../components/ConfirmationModal';
import '../index.css';

export const MovieList: React.FC = () => {
  const navigate = useNavigate();
  const { movies, deleteMovie } = useMovies();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('title');
  const [deleteConfirm, setDeleteConfirm] = useState<{ open: boolean; movieId: string; movieTitle: string }>({
    open: false,
    movieId: '',
    movieTitle: ''
  });

  const genres = useMemo(() => {
    const genreSet = new Set<string>();
    movies.forEach(movie => {
      if (movie.genre) {
        genreSet.add(movie.genre);
      }
    });
    return Array.from(genreSet).sort();
  }, [movies]);

  const filteredAndSortedMovies = useMemo(() => {
    let result = movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = !filterGenre || movie.genre === filterGenre;
      return matchesSearch && matchesGenre;
    });

    result.sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'rating') {
        const ratingA = a.rating || 0;
        const ratingB = b.rating || 0;
        return ratingB - ratingA;
      }
      return 0;
    });

    return result;
  }, [movies, searchTerm, filterGenre, sortBy]);

  const handleEditMovie = (movie: Movie) => {
    navigate(`/edit/${movie.id}`);
  };

  const handleDeleteClick = (movieId: string, movieTitle: string) => {
    setDeleteConfirm({
      open: true,
      movieId,
      movieTitle
    });
  };

  const handleConfirmDelete = () => {
    deleteMovie(deleteConfirm.movieId);
    setDeleteConfirm({ open: false, movieId: '', movieTitle: '' });
  };

  const handleCancelDelete = () => {
    setDeleteConfirm({ open: false, movieId: '', movieTitle: '' });
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>🎬 Movie Management</h1>
        </div>
      </header>

      <div className="container">
        <div style={{ marginBottom: '20px' }}>
          <button
            className="btn btn-success"
            onClick={() => navigate('/add')}
          >
            + Add New Movie
          </button>
        </div>

        <div className="search-filter-container">
          <div className="search-filter-row">
            <div className="form-group">
              <label htmlFor="search">Search by Title</label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search movies..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="genre">Filter by Genre</label>
              <select
                id="genre"
                value={filterGenre}
                onChange={(e) => setFilterGenre(e.target.value)}
              >
                <option value="">All Genres</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="sort">Sort By</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
              >
                <option value="title">Title (A-Z)</option>
                <option value="rating">Rating (High to Low)</option>
              </select>
            </div>

            <div className="form-group">
              <label>&nbsp;</label>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSearchTerm('');
                  setFilterGenre('');
                  setSortBy('title');
                }}
                style={{ width: '100%' }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {filteredAndSortedMovies.length > 0 ? (
          <div>
            <p style={{ marginBottom: '15px', color: '#666' }}>
              Showing {filteredAndSortedMovies.length} of {movies.length} movies
            </p>
            <div className="movie-grid">
              {filteredAndSortedMovies.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onEdit={handleEditMovie}
                  onDelete={handleDeleteClick}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🎞️</div>
            <p>No movies found. Try adjusting your filters or add a new movie!</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate('/add')}
            >
              Add First Movie
            </button>
          </div>
        )}
      </div>

      <ConfirmationModal
        isOpen={deleteConfirm.open}
        title="Delete Movie"
        message={`Are you sure you want to delete "${deleteConfirm.movieTitle}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};
