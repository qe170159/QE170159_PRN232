import express from 'express';
import { Movie } from '../models/Movie.js';

const router = express.Router();

// GET all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single movie
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE movie
router.post('/', async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    genre: req.body.genre,
    rating: req.body.rating,
    posterImage: req.body.posterImage
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE movie
router.put('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    if (req.body.title) movie.title = req.body.title;
    if (req.body.genre !== undefined) movie.genre = req.body.genre;
    if (req.body.rating !== undefined) movie.rating = req.body.rating;
    if (req.body.posterImage !== undefined) movie.posterImage = req.body.posterImage;
    movie.updatedAt = Date.now();

    const updatedMovie = await movie.save();
    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE movie
router.delete('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
