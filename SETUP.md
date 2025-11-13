# Movie Management Application - Setup Guide

## Quick Start

### Prerequisites
- Node.js (v16+) and npm
- MongoDB Atlas account (free tier available)
- Git and GitHub account

### Local Setup

#### 1. Install Frontend Dependencies
```bash
npm install
```

#### 2. Create .env file in root directory
```
VITE_API_URL=http://localhost:5000/api
```

#### 3. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

#### 4. Create .env file in server directory
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/movies?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

**To get MongoDB connection string:**
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (free tier available)
3. Create a cluster
4. Get connection string and replace username/password

#### 5. Run Both Services

**Terminal 1 - Backend (from root directory):**
```bash
cd server
npm run dev
```
Server runs on: http://localhost:5000

**Terminal 2 - Frontend (from root directory):**
```bash
npm run dev
```
App runs on: http://localhost:3000

#### 6. Seed Initial Data
Visit: http://localhost:5000/api/seed

---

## Deployment Instructions

### Deploy Backend to Render

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit with backend"
   git push origin main
   ```

2. **Create Render service:**
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select "server" as root directory
   - Environment: Node
   - Build: `npm install`
   - Start: `npm start`
   - Add environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `NODE_ENV`: production

3. **Get your API URL** (e.g., https://movie-api-xxxx.onrender.com)

### Deploy Frontend to Vercel

1. **Go to https://vercel.com**
2. **Import project from GitHub**
3. **Set environment variable:**
   - `VITE_API_URL`: Your Render API URL (https://movie-api-xxxx.onrender.com/api)
4. **Deploy**

Your app is now live!

---

## Project Structure

```
QE170159_PRN232/
├── src/                    # Frontend React code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── context/           # State management
│   ├── types/             # TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server/                # Backend Node.js/Express
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── server.js
│   ├── package.json
│   └── .env (not in repo)
├── package.json           # Frontend dependencies
├── vite.config.ts         # Vite config
├── tsconfig.json
├── .gitignore
└── README.md
```

## Features

✅ Add, Edit, Delete Movies  
✅ Search by Title  
✅ Filter by Genre  
✅ Sort by Title or Rating  
✅ Persistent MongoDB Database  
✅ RESTful API  
✅ Responsive Design  

## Troubleshooting

**MongoDB connection fails:**
- Check connection string in .env
- Whitelist your IP in MongoDB Atlas
- Ensure database name in URI matches

**API not connecting:**
- Ensure backend is running on port 5000
- Check VITE_API_URL environment variable
- Check browser console for CORS errors

**Port already in use:**
- Change port in server.js or vite.config.ts
- Or kill process: `lsof -ti:5000 | xargs kill -9`
