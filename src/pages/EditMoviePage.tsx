import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieForm } from '../components/MovieForm';

export const EditMoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return <MovieForm movieId={id} />;
};
