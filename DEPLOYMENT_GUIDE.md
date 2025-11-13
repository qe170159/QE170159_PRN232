# QUICK DEPLOYMENT GUIDE

## Prerequisites
- GitHub repository pushed: ✅ https://github.com/qe170159/QE170159_PRN232
- MongoDB connection configured: ✅ 
- Local application tested: ✅

---

## Step 1: Deploy Backend to Render (5-10 minutes)

### A. Go to Render
1. Open https://render.com
2. Sign up or log in with GitHub

### B. Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Search for and select **QE170159_PRN232** repository
3. Fill in the form:
   - **Name:** `movie-api` (or your preferred name)
   - **Root Directory:** `server`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

### C. Add Environment Variables
Click **"Advanced"** and add:
- **Key:** `MONGODB_URI`
  - **Value:** `mongodb+srv://vudtqe170159_db_user:vuvuivevabuonba@cluster0.gdgkdpd.mongodb.net/?appName=Cluster0`
- **Key:** `NODE_ENV`
  - **Value:** `production`
- **Key:** `PORT`
  - **Value:** `5000`

### D. Deploy
1. Click **"Create Web Service"**
2. Wait for deployment to complete (5-10 minutes)
3. Once complete, copy your Render URL
   - Example: `https://movie-api-xxxx.onrender.com`
4. **Note this URL** - you'll need it for frontend deployment

---

## Step 2: Deploy Frontend to Vercel (2-5 minutes)

### A. Go to Vercel
1. Open https://vercel.com
2. Sign up or log in with GitHub

### B. Create Project
1. Click **"Add New..."** → **"Project"**
2. Select **QE170159_PRN232** repository

### C. Configure
1. **Framework Preset:** Vite (should auto-detect)
2. **Root Directory:** `./` (default)
3. **Build Command:** `npm run build` (default)
4. **Output Directory:** `dist` (default)

### D. Add Environment Variables
1. Scroll down to **"Environment Variables"**
2. Add:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://movie-api-xxxx.onrender.com/api`
     - Replace with your actual Render URL from Step 1

### E. Deploy
1. Click **"Deploy"**
2. Wait for deployment to complete (2-5 minutes)
3. Once complete, you get a Vercel URL
   - Example: `https://qe170159-prn232.vercel.app`

---

## Step 3: Test the Deployed Application

### A. Test Frontend
1. Visit your Vercel URL
2. You should see the Movie Management app
3. Try adding a movie - it should save to MongoDB

### B. Test Backend API
1. Visit `https://movie-api-xxxx.onrender.com/api/health`
2. You should see: `{"status":"OK","message":"Server is running"}`

### C. Seed Initial Data
1. Visit `https://movie-api-xxxx.onrender.com/api/seed`
2. You should see the initial movies loaded

---

## Step 4: Update Your Report

Once both are deployed, update these in your report:

```markdown
**Frontend (Vercel):** https://qe170159-prn232.vercel.app
**Backend API (Render):** https://movie-api-xxxx.onrender.com/api
**Database:** MongoDB Atlas (Free Tier)
```

---

## Troubleshooting

### Render Deployment Issues

**Error: MongoDB connection error**
- Solution: Check that your IP is whitelisted in MongoDB Atlas
  - Go to https://cloud.mongodb.com → Security → Network Access
  - Make sure 0.0.0.0/0 is in the whitelist

**Error: Build failed**
- Solution: Check that `server/package.json` exists and has correct scripts
- Verify `server/server.js` is correct

### Vercel Deployment Issues

**Error: Cannot find VITE_API_URL**
- Solution: Make sure you added the environment variable correctly
- Variable name must be exactly `VITE_API_URL`

**Error: API requests failing**
- Solution: Check that the `VITE_API_URL` points to correct Render URL
- Should be: `https://movie-api-xxxx.onrender.com/api`

### MongoDB Atlas Issues

**Error: authentication failed**
- Solution: Check username and password in connection string
- Go to MongoDB Atlas → Database Access → Edit → Show Password

**Error: Could not connect to any servers**
- Solution: Whitelist Render IP
  - Go to MongoDB Atlas → Security → Network Access
  - Add Render IP (or use 0.0.0.0/0 for all)

---

## Final Checklist

- [ ] Backend deployed to Render with working API
- [ ] Frontend deployed to Vercel
- [ ] MongoDB connection working
- [ ] Environment variables set correctly
- [ ] API health check working
- [ ] Can add/edit/delete movies on deployed site
- [ ] Report document created and filled
- [ ] GitHub repository up to date

---

## Useful Links

- GitHub Repo: https://github.com/qe170159/QE170159_PRN232
- MongoDB Atlas: https://cloud.mongodb.com/v2
- Render Dashboard: https://dashboard.render.com
- Vercel Dashboard: https://vercel.com/dashboard

---

**Once both are deployed, you're ready to submit!** 🎉
