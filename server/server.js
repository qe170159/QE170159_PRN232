import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import moviesRouter from './routes/movies.js';
import { Movie } from './models/Movie.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://qe170159-prn232.vercel.app', 'https://vercel.app']
    : '*'
}));
app.use(express.json());

// Connect to MongoDB with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/movies', {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    setTimeout(connectDB, 5000); // Retry after 5 seconds
  }
};

connectDB();

// Routes
app.use('/api/movies', moviesRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Seed initial data if database is empty
app.post('/api/seed', async (req, res) => {
  try {
    const count = await Movie.countDocuments();
    if (count > 0) {
      return res.json({ message: 'Database already has movies' });
    }

    const initialMovies = [
      {
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        rating: 5,
        posterImage: 'https://via.placeholder.com/150x225?text=Shawshank'
      },
      {
        title: 'The Godfather',
        genre: 'Crime',
        rating: 5,
        posterImage: 'https://via.placeholder.com/150x225?text=Godfather'
      },
      {
        title: 'Inception',
        genre: 'Sci-Fi',
        rating: 4,
        posterImage: 'https://via.placeholder.com/150x225?text=Inception'
      }
    ];

    await Movie.insertMany(initialMovies);
    res.json({ message: 'Database seeded with initial movies', count: initialMovies.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🎬 Server running at http://localhost:${PORT}`);
});
