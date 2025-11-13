# Movie Management Application

A modern movie management web application built with React and TypeScript. This application allows users to manage their movie collection with features for adding, editing, deleting, searching, filtering, and sorting movies.

## Features

### 1. Movie List Page
- Display all movies in a responsive grid layout
- Show movie details: title, genre, rating, and poster image
- **Search functionality**: Search movies by title in real-time
- **Filter functionality**: Filter movies by genre
- **Sort functionality**: Sort by title (A-Z) or rating (High to Low)
- **Reset filters**: One-click reset button to clear all filters

### 2. Add Movie
- Add new movies with the following fields:
  - Title (Required)
  - Genre (Optional)
  - Rating (Optional, 1-5 stars)
  - Poster Image URL (Optional)
- Form validation for required fields
- Image preview functionality
- Redirect to movie list after successful addition

### 3. Edit Movie
- Click on a movie card to navigate to edit page
- Modify all movie details (title, genre, rating, poster image)
- Form validation
- Redirect to movie list after saving changes
- Pre-populated form with existing movie data

### 4. Delete Movie
- Delete button on each movie card
- Confirmation modal before deletion
- Shows movie title in confirmation message
- Prevents accidental deletion

## Technologies Used

- **React 18**: UI framework
- **TypeScript**: Type safety
- **React Router v6**: Client-side routing
- **Vite**: Build tool and development server
- **CSS3**: Styling with responsive design

## Project Structure

```
src/
├── components/
│   ├── MovieCard.tsx          # Movie card component
│   ├── ConfirmationModal.tsx   # Delete confirmation modal
│   └── MovieForm.tsx           # Add/Edit movie form
├── pages/
│   ├── MovieList.tsx           # Main movie list page
│   ├── AddMoviePage.tsx        # Add movie page
│   └── EditMoviePage.tsx       # Edit movie page
├── context/
│   ├── MovieContext.tsx        # React Context for state management
│   └── useMovies.ts            # Custom hook for accessing movie context
├── types/
│   └── index.ts                # TypeScript interfaces
├── App.tsx                     # Main app component
├── main.tsx                    # Application entry point
├── index.css                   # Global styles
└── vite.config.ts              # Vite configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Usage

### Adding a Movie
1. Click the "+ Add New Movie" button on the main page
2. Fill in the movie details (title is required)
3. Click "Add Movie" to save

### Editing a Movie
1. Click the "Edit" button on any movie card
2. Modify the movie details
3. Click "Update Movie" to save changes

### Deleting a Movie
1. Click the "Delete" button on any movie card
2. Confirm deletion in the modal dialog
3. Movie will be removed from the list

### Searching & Filtering
- Use the search box to find movies by title
- Select a genre from the filter dropdown to view movies in that genre
- Use the sort dropdown to sort by title or rating
- Click "Reset Filters" to clear all search and filter criteria

## Features Highlights

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Real-time search functionality
- ✅ Genre-based filtering
- ✅ Multiple sort options
- ✅ Confirmation dialog for delete operations
- ✅ Form validation with error messages
- ✅ Image preview before saving
- ✅ Responsive design for mobile and desktop
- ✅ Type-safe with TypeScript
- ✅ Context API for state management

## Sample Data

The application comes with 3 sample movies:
- The Shawshank Redemption (Drama, 5 stars)
- The Godfather (Crime, 5 stars)
- Inception (Sci-Fi, 4 stars)

Feel free to add more movies, edit existing ones, or delete them as needed.

## Future Enhancements

- Local storage persistence
- Movie ratings from external APIs
- Image upload functionality
- User authentication
- Movie reviews and comments
- Watch list feature
- Export/Import functionality
