import React from 'react';
import { Movie } from '../types';
import '../index.css';

interface MovieCardProps {
  movie: Movie;
  onEdit: (movie: Movie) => void;
  onDelete: (id: string) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onEdit, onDelete }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.posterImage || 'https://via.placeholder.com/250x300?text=No+Image'}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
        {movie.genre && <div className="movie-genre">Genre: {movie.genre}</div>}
        {movie.rating && (
          <div className="movie-rating">
            Rating: <span>{'⭐'.repeat(movie.rating)}</span>
          </div>
        )}
        <div className="movie-actions">
          <button
            className="btn btn-primary btn-small"
            onClick={() => onEdit(movie)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-small"
            onClick={() => onDelete(movie.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
