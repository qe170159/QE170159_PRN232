import React, { createContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { Movie } from '../types';

interface MovieContextType {
  movies: Movie[];
  addMovie: (movie: Omit<Movie, 'id'>) => Promise<void>;
  updateMovie: (id: string, movie: Omit<Movie, 'id'>) => Promise<void>;
  deleteMovie: (id: string) => Promise<void>;
  getMovieById: (id: string) => Movie | undefined;
  loading: boolean;
}

export const MovieContext = createContext<MovieContextType | undefined>(undefined);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const MovieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch movies on mount
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/movies`);
      if (response.ok) {
        const data = await response.json();
        setMovies(data.map((m: any) => ({ ...m, id: m._id })));
      } else {
        console.error('Failed to fetch movies');
        // Fall back to local storage or sample data
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      // Fall back to sample data if API is not available
      setMovies([
        {
          id: '1',
          title: 'The Shawshank Redemption',
          genre: 'Drama',
          rating: 5,
          posterImage: 'https://via.placeholder.com/150x225?text=Shawshank'
        },
        {
          id: '2',
          title: 'The Godfather',
          genre: 'Crime',
          rating: 5,
          posterImage: 'https://via.placeholder.com/150x225?text=Godfather'
        },
        {
          id: '3',
          title: 'Inception',
          genre: 'Sci-Fi',
          rating: 4,
          posterImage: 'https://via.placeholder.com/150x225?text=Inception'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const addMovie = useCallback(async (movie: Omit<Movie, 'id'>) => {
    try {
      const response = await fetch(`${API_URL}/movies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
      });
      if (response.ok) {
        const newMovie = await response.json();
        setMovies(prev => [...prev, { ...newMovie, id: newMovie._id }]);
      }
    } catch (error) {
      console.error('Error adding movie:', error);
      // Fallback to local state update
      const localMovie: Movie = { ...movie, id: Date.now().toString() };
      setMovies(prev => [...prev, localMovie]);
    }
  }, []);

  const updateMovie = useCallback(async (id: string, movie: Omit<Movie, 'id'>) => {
    try {
      const response = await fetch(`${API_URL}/movies/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
      });
      if (response.ok) {
        setMovies(prev =>
          prev.map(m => (m.id === id ? { ...movie, id } : m))
        );
      }
    } catch (error) {
      console.error('Error updating movie:', error);
      // Fallback to local state update
      setMovies(prev =>
        prev.map(m => (m.id === id ? { ...movie, id } : m))
      );
    }
  }, []);

  const deleteMovie = useCallback(async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/movies/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setMovies(prev => prev.filter(m => m.id !== id));
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
      // Fallback to local state update
      setMovies(prev => prev.filter(m => m.id !== id));
    }
  }, []);

  const getMovieById = useCallback((id: string) => {
    return movies.find(m => m.id === id);
  }, [movies]);

  return (
    <MovieContext.Provider value={{ movies, addMovie, updateMovie, deleteMovie, getMovieById, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
