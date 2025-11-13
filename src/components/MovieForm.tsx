import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types';
import { useMovies } from '../context/useMovies';
import '../index.css';

interface MovieFormProps {
  movieId?: string;
}

export const MovieForm: React.FC<MovieFormProps> = ({ movieId }) => {
  const navigate = useNavigate();
  const { addMovie, updateMovie, getMovieById } = useMovies();
  const [formData, setFormData] = useState({
    title: '',
    genre: '',
    rating: 0,
    posterImage: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (movieId) {
      const movie = getMovieById(movieId);
      if (movie) {
        setFormData({
          title: movie.title || '',
          genre: movie.genre || '',
          rating: movie.rating || 0,
          posterImage: movie.posterImage || ''
        });
      }
    }
  }, [movieId, getMovieById]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (formData.rating && (formData.rating < 1 || formData.rating > 5)) {
      newErrors.rating = 'Rating must be between 1 and 5';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? (value ? parseInt(value) : 0) : value
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const movieData = {
      title: formData.title,
      genre: formData.genre || undefined,
      rating: formData.rating || undefined,
      posterImage: formData.posterImage || undefined
    };

    if (movieId) {
      updateMovie(movieId, movieData);
    } else {
      addMovie(movieData);
    }

    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{movieId ? 'Edit Movie' : 'Add New Movie'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="required">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter movie title"
            />
            {errors.title && <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '5px' }}>{errors.title}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              placeholder="e.g., Drama, Action, Comedy"
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating (1-5)</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            >
              <option value="0">Select Rating</option>
              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐⭐</option>
              <option value="3">3 ⭐⭐⭐</option>
              <option value="4">4 ⭐⭐⭐⭐</option>
              <option value="5">5 ⭐⭐⭐⭐⭐</option>
            </select>
            {errors.rating && <div style={{ color: 'red', fontSize: '0.85rem', marginTop: '5px' }}>{errors.rating}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="posterImage">Poster Image URL</label>
            <textarea
              id="posterImage"
              name="posterImage"
              value={formData.posterImage}
              onChange={handleChange}
              placeholder="Enter image URL"
              rows={3}
            />
          </div>

          {formData.posterImage && (
            <div className="form-group">
              <label>Image Preview:</label>
              <img
                src={formData.posterImage}
                alt="Preview"
                style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '4px', marginTop: '10px' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              {movieId ? 'Update Movie' : 'Add Movie'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
