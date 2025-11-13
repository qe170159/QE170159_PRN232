import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import { MovieList } from './pages/MovieList';
import { AddMoviePage } from './pages/AddMoviePage';
import { EditMoviePage } from './pages/EditMoviePage';
import './index.css';

function App() {
  return (
    <Router>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/add" element={<AddMoviePage />} />
          <Route path="/edit/:id" element={<EditMoviePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MovieProvider>
    </Router>
  );
}

export default App;
