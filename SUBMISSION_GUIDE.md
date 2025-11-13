# SUBMISSION GUIDE

## What You Need to Submit

According to the requirements, you need to submit:
1. **Folder:** `QE170159_PRN232` (your Student ID)
2. **Contents:**
   - Complete source code (without node_modules, bin, debug folders)
   - Report file: `QE170159_Exam.docx`

---

## Step 1: Prepare Your Report Document

You have two options:

### Option A: Convert Markdown to Word (Easiest)
1. Open `QE170159_REPORT.md` in your text editor
2. Copy all the content
3. Go to https://pandoc.org/try/
4. Paste content in left panel
5. Select output format: **docx** (right panel)
6. Download as Word document
7. Save as `QE170159_Exam.docx`

### Option B: Create Word Document Manually
1. Open Microsoft Word
2. Create new document
3. Copy content from `QE170159_REPORT.md`
4. Format as needed
5. Add screenshots from the application
6. Save as `QE170159_Exam.docx`

### Required Content for Report:
- ✅ GitHub repository link
- ✅ Deployed website links (after deployment)
- ✅ Feature descriptions
- ✅ Screenshots (at least one showing working feature)
- ✅ Steps to run the app locally

---

## Step 2: Clean Up Project

Run this command to remove node_modules and build artifacts:

```bash
# Windows - run this in PowerShell or Command Prompt
cleanup.bat
```

Or manually:
```bash
# Remove frontend dependencies
rmdir /s /q node_modules
rmdir /s /q dist

# Remove backend dependencies
rmdir /s /q server\node_modules
rmdir /s /q server\dist
```

---

## Step 3: Create Final Submission Folder

Your submission folder should have this structure:

```
QE170159_PRN232/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── .github/
│   └── copilot-instructions.md
├── public/ (if any)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
├── README.md
├── SETUP.md
├── DEPLOYMENT_GUIDE.md
├── QE170159_REPORT.md
├── QE170159_Exam.docx         ← Your Report Document
└── [DO NOT INCLUDE]
    ├── node_modules/          ← DELETE
    ├── server/node_modules/   ← DELETE
    ├── dist/                  ← DELETE
    ├── .env                   ← DELETE (keep .env.example only)
    └── server/.env            ← DELETE (keep .env.example only)
```

---

## Step 4: Package for Submission

### Option A: Create ZIP File (Recommended)

1. Select the entire `QE170159_PRN232` folder
2. Right-click → "Send to" → "Compressed (zipped) folder"
3. This creates `QE170159_PRN232.zip`

### Option B: Create RAR File

1. Right-click `QE170159_PRN232` folder
2. Click "Add to archive"
3. Name it `QE170159_PRN232.rar`

### Expected File Size
- With node_modules: ~500MB ❌ (too large)
- Without node_modules: ~2-5MB ✅ (perfect)

---

## Step 5: Final Verification Checklist

Before submission, verify:

- [ ] Folder name is exactly `QE170159_PRN232`
- [ ] `QE170159_Exam.docx` file is included
- [ ] Source code files are included:
  - [ ] `src/` folder with all components
  - [ ] `server/` folder with backend code
  - [ ] `package.json` (frontend)
  - [ ] `server/package.json` (backend)
  - [ ] `README.md`
  - [ ] `vite.config.ts`
  - [ ] `.gitignore`
- [ ] `node_modules/` folders are DELETED
- [ ] `dist/` folders are DELETED
- [ ] `.env` files are DELETED (but `.env.example` kept)
- [ ] Total folder size < 10MB
- [ ] GitHub repository link is public and accessible
- [ ] Report includes:
  - [ ] GitHub link
  - [ ] Deployed URLs (frontend and backend)
  - [ ] Feature descriptions
  - [ ] Screenshots
  - [ ] Local setup instructions

---

## Step 6: Submit

1. **Email/Upload Location:** [As per your institution's requirements]
2. **File Name:** `QE170159_PRN232.zip` or `QE170159_PRN232.rar`
3. **Include in submission:**
   - The compressed folder
   - Any additional notes if needed

---

## Important Notes

### About .env Files
- **Local:** Keep `server/.env` with your MongoDB connection for local testing
- **Submission:** DELETE `server/.env` before creating submission zip
- **Reason:** Don't share credentials publicly
- **Alternative:** Keep `.env.example` with placeholder values

### About GitHub
- Your GitHub repo: https://github.com/qe170159/QE170159_PRN232
- This should remain **PUBLIC** during submission
- Include the link in your report

### About Deployment
- After deploying to Render and Vercel, update your report with:
  - Frontend URL (Vercel)
  - Backend URL (Render)
  - Screenshots of the working application

---

## Verification Script

Use this to verify your submission folder:

```powershell
# PowerShell script to check submission folder

$folder = "QE170159_PRN232"

Write-Host "Checking submission folder..." -ForegroundColor Green
Write-Host ""

# Check folder exists
if (-Not (Test-Path $folder)) {
    Write-Host "ERROR: Folder not found!" -ForegroundColor Red
    exit 1
}

# Check key files exist
$requiredFiles = @(
    "package.json",
    "README.md",
    "src/App.tsx",
    "server/server.js",
    "QE170159_Exam.docx"
)

foreach ($file in $requiredFiles) {
    $path = Join-Path $folder $file
    if (Test-Path $path) {
        Write-Host "✓ $file" -ForegroundColor Green
    } else {
        Write-Host "✗ $file - MISSING!" -ForegroundColor Red
    }
}

# Check node_modules don't exist
if (Test-Path "$folder\node_modules") {
    Write-Host "✗ node_modules still exists - DELETE IT!" -ForegroundColor Red
} else {
    Write-Host "✓ node_modules deleted" -ForegroundColor Green
}

if (Test-Path "$folder\server\node_modules") {
    Write-Host "✗ server/node_modules still exists - DELETE IT!" -ForegroundColor Red
} else {
    Write-Host "✓ server/node_modules deleted" -ForegroundColor Green
}

# Check folder size
$size = (Get-ChildItem -Path $folder -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host ""
Write-Host "Folder size: $([Math]::Round($size, 2))MB" -ForegroundColor Cyan
if ($size -lt 10) {
    Write-Host "✓ Size is acceptable" -ForegroundColor Green
} else {
    Write-Host "✗ Size too large! Delete node_modules" -ForegroundColor Red
}

Write-Host ""
Write-Host "Verification complete!" -ForegroundColor Green
```

Save this as `verify-submission.ps1` and run:
```powershell
.\verify-submission.ps1
```

---

## Summary

**What's Done:**
- ✅ Frontend application built and tested
- ✅ Backend API created with MongoDB
- ✅ GitHub repository set up and pushed
- ✅ Documentation created (README, SETUP, DEPLOYMENT_GUIDE)
- ✅ Report template provided (QE170159_REPORT.md)

**What You Need to Do:**
1. Convert `QE170159_REPORT.md` to `QE170159_Exam.docx`
2. Add screenshots from your application to the report
3. Deploy backend to Render
4. Deploy frontend to Vercel
5. Update report with deployed URLs
6. Delete node_modules and dist folders
7. Create final submission zip/rar file
8. Submit according to your institution's requirements

---

**Questions?**
- Check `SETUP.md` for local setup help
- Check `DEPLOYMENT_GUIDE.md` for deployment help
- Visit GitHub repo: https://github.com/qe170159/QE170159_PRN232

**Good luck with your submission!** 🎉
