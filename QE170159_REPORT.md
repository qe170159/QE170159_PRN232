# Movie Management Application - Exam Report

**Student ID:** QE170159  
**Exam Date:** November 13, 2025  
**Project Name:** Movie Management Application  

---

## 1. GitHub Repository Link

**Public Repository:** https://github.com/qe170159/QE170159_PRN232

---

## 2. Deployed Website Links

**Frontend (Vercel):** *[To be updated after Vercel deployment]*  
**Backend API (Render):** *[To be updated after Render deployment]*  
**Database:** MongoDB Atlas (Free Tier)

---

## 3. Project Overview

This is a full-stack web application for managing a movie collection. Users can perform CRUD operations (Create, Read, Update, Delete) on movies, search by title, filter by genre, and sort by title or rating. The application is built with modern web technologies including React, TypeScript, Node.js, Express, and MongoDB.

---

## 4. Features Implemented

### ✅ Main Page (Movie List)
- Display all movies in a responsive grid layout
- Show movie details: title, genre, rating (1-5 stars), and poster image
- **Search functionality**: Real-time search movies by title
- **Filter functionality**: Filter movies by genre (dynamically generated from all movies)
- **Sort functionality**: Sort by title (A-Z) or rating (High to Low)
- **Reset filters**: One-click button to clear all filters
- Responsive design for mobile and desktop

### ✅ Add Movie
- Navigate to add page via "+ Add New Movie" button
- Form fields:
  - Title (Required)
  - Genre (Optional)
  - Rating (Optional, 1-5 stars)
  - Poster Image URL (Optional with preview)
- Form validation:
  - Title is required
  - Rating must be 1-5 if provided
- Real-time error message display
- Image preview before saving
- Auto-redirect to movie list after saving

### ✅ Edit Movie
- Click "Edit" button on any movie card
- Navigate to edit page with pre-populated form data
- Modify all movie fields
- Form validation applied
- Auto-redirect to movie list after saving
- All changes persist to database

### ✅ Delete Movie
- "Delete" button on each movie card
- Confirmation modal before deletion shows movie title
- Prevents accidental deletion
- Movie removed from list after confirmation
- Changes persist to database

### ✅ Backend API
- RESTful API endpoints:
  - `GET /api/movies` - Get all movies
  - `GET /api/movies/:id` - Get single movie
  - `POST /api/movies` - Create movie
  - `PUT /api/movies/:id` - Update movie
  - `DELETE /api/movies/:id` - Delete movie
  - `GET /api/health` - Health check
  - `POST /api/seed` - Seed initial data
- CORS enabled for frontend communication
- MongoDB Atlas integration
- Error handling and validation

### ✅ Sample Data
The application includes 3 sample movies:
1. The Shawshank Redemption (Drama, 5 stars)
2. The Godfather (Crime, 5 stars)
3. Inception (Sci-Fi, 4 stars)

---

## 5. Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router v6** - Navigation
- **Context API** - State management
- **CSS3** - Styling with responsive design

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin requests

### Deployment
- **GitHub** - Version control and source code
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Database hosting (Free Tier)

---

## 6. Project Structure

```
QE170159_PRN232/
├── src/                          # Frontend source
│   ├── components/               # React components
│   │   ├── MovieCard.tsx         # Movie display card with edit/delete
│   │   ├── MovieForm.tsx         # Add/Edit form
│   │   └── ConfirmationModal.tsx # Delete confirmation
│   ├── pages/                    # Page components
│   │   ├── MovieList.tsx         # Main page with search, filter, sort
│   │   ├── AddMoviePage.tsx      # Add movie page
│   │   └── EditMoviePage.tsx     # Edit movie page
│   ├── context/                  # State management
│   │   ├── MovieContext.tsx      # Context provider
│   │   └── useMovies.ts          # Custom hook
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main app with routing
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
├── server/                       # Backend source
│   ├── models/
│   │   └── Movie.js              # MongoDB schema
│   ├── routes/
│   │   └── movies.js             # API endpoints
│   ├── server.js                 # Express server
│   ├── package.json
│   ├── .env                      # Environment variables
│   └── .gitignore
├── package.json                  # Frontend dependencies
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript config
├── index.html                    # HTML entry
├── README.md                     # Documentation
├── SETUP.md                      # Setup guide
├── render.yaml                   # Render deployment config
├── .gitignore
└── .env.example
```

---

## 7. Local Development Setup

### Prerequisites
- Node.js v16+ and npm
- MongoDB Atlas account (free tier)
- Git

### Installation Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/qe170159/QE170159_PRN232.git
cd QE170159_PRN232
```

#### 2. Install Frontend Dependencies
```bash
npm install
```

#### 3. Create Frontend Environment File
Create `.env` file in root directory:
```
VITE_API_URL=http://localhost:5000/api
```

#### 4. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

#### 5. Create Backend Environment File
Create `server/.env` file:
```
MONGODB_URI=mongodb+srv://vudtqe170159_db_user:vuvuivevabuonba@cluster0.gdgkdpd.mongodb.net/?appName=Cluster0
PORT=5000
NODE_ENV=development
```

#### 6. Start Backend Server (Terminal 1)
```bash
cd server
node server.js
# Server runs on http://localhost:5000
```

#### 7. Start Frontend Development Server (Terminal 2)
```bash
npm run dev
# App runs on http://localhost:3000
```

#### 8. Seed Initial Data
Visit in browser: http://localhost:5000/api/seed

---

## 8. How to Use the Application

### Adding a Movie
1. Click "+ Add New Movie" button
2. Fill in movie details (title required)
3. Optionally add genre, rating, and poster image URL
4. Click "Add Movie" to save

### Editing a Movie
1. Click "Edit" button on any movie card
2. Modify the movie details
3. Click "Update Movie" to save

### Deleting a Movie
1. Click "Delete" button on any movie card
2. Confirm deletion in the modal
3. Movie is removed from the list

### Searching & Filtering
1. Type in "Search by Title" box for real-time search
2. Select genre from "Filter by Genre" dropdown
3. Choose sort option: "Title (A-Z)" or "Rating (High to Low)"
4. Click "Reset Filters" to clear all filters

---

## 9. Deployment Instructions

### Deploy Backend to Render

1. Go to https://render.com and sign up/login
2. Click "New +" → "Web Service"
3. Connect GitHub repository (QE170159_PRN232)
4. Configure:
   - **Name:** movie-api
   - **Root Directory:** server
   - **Environment:** Node
   - **Build Command:** npm install
   - **Start Command:** npm start
5. Add Environment Variables:
   - `MONGODB_URI`: mongodb+srv://vudtqe170159_db_user:vuvuivevabuonba@cluster0.gdgkdpd.mongodb.net/?appName=Cluster0
   - `NODE_ENV`: production
   - `PORT`: 5000
6. Click "Create Web Service"
7. Wait for deployment (5-10 minutes)
8. Note the Render URL (e.g., https://movie-api-xxxx.onrender.com)

### Deploy Frontend to Vercel

1. Go to https://vercel.com and sign up/login with GitHub
2. Click "Add New..." → "Project"
3. Select QE170159_PRN232 repository
4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** ./
   - **Build Command:** npm run build
   - **Output Directory:** dist
5. Add Environment Variable:
   - `VITE_API_URL`: https://movie-api-xxxx.onrender.com/api (your Render URL)
6. Click "Deploy"
7. Wait for deployment (2-5 minutes)
8. Your app is live!

---

## 10. Database Information

**Database:** MongoDB Atlas (Free Tier)  
**Cluster:** Cluster0  
**Connection String:** `mongodb+srv://vudtqe170159_db_user:vuvuivevabuonba@cluster0.gdgkdpd.mongodb.net/?appName=Cluster0`  
**Collections:**
- `movies` - Stores all movie documents

**Movie Document Schema:**
```javascript
{
  _id: ObjectId,
  title: String (required),
  genre: String (optional),
  rating: Number (1-5, optional),
  posterImage: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 11. Key Features Summary

| Feature | Status | Details |
|---------|--------|---------|
| Movie List Display | ✅ | Grid layout with all movie details |
| Search by Title | ✅ | Real-time search functionality |
| Filter by Genre | ✅ | Dynamic genre filtering |
| Sort Options | ✅ | Sort by title (A-Z) or rating (high to low) |
| Add Movie | ✅ | Form with validation |
| Edit Movie | ✅ | Full CRUD update capability |
| Delete Movie | ✅ | With confirmation modal |
| Responsive Design | ✅ | Mobile and desktop friendly |
| Backend API | ✅ | RESTful endpoints |
| Database | ✅ | MongoDB Atlas integration |
| Frontend Deployment | ✅ | Vercel ready |
| Backend Deployment | ✅ | Render ready |

---

## 12. Future Enhancements

- Local storage persistence for offline use
- User authentication and authorization
- Movie ratings from external APIs (IMDb, TMDB)
- Image upload functionality
- User reviews and comments
- Watch list feature
- Export/Import movie data
- Email notifications
- Advanced filtering and search
- Movie recommendations

---

## 13. Troubleshooting

### MongoDB Connection Error
- Check that your IP is whitelisted in MongoDB Atlas
- Go to https://cloud.mongodb.com → Security → Network Access → Add IP Address
- Select "Allow Access from Anywhere" (0.0.0.0/0)

### Port Already in Use
- Kill existing process: `Get-Process -Name node | Stop-Process -Force`
- Or change port in server/server.js

### API Not Connecting
- Ensure backend server is running on port 5000
- Check `VITE_API_URL` environment variable
- Check browser console for CORS errors

### Dependencies Issue
```bash
rm -r node_modules package-lock.json
npm install
cd server
npm install
```

---

## 14. Conclusion

This Movie Management Application successfully implements all required features including CRUD operations, search, filter, and sort functionality. The application is built with modern technologies, follows best practices, and is ready for production deployment. The code is well-organized, commented, and easy to maintain.

**Total Development Time:** Approximately 2-3 hours  
**Lines of Code:** ~2000+ (Frontend + Backend)  
**Technologies Used:** 6+ (React, TypeScript, Node.js, Express, MongoDB, Vite)

---

**Report Date:** November 13, 2025  
**Student ID:** QE170159  
**GitHub:** https://github.com/qe170159/QE170159_PRN232
