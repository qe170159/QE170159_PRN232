@echo off
REM Clean node_modules before submission

echo Cleaning up for submission...

if exist "node_modules" (
    echo Deleting frontend node_modules...
    rmdir /s /q node_modules
)

if exist "server\node_modules" (
    echo Deleting backend node_modules...
    rmdir /s /q server\node_modules
)

if exist "dist" (
    echo Deleting dist folder...
    rmdir /s /q dist
)

if exist "server\.env" (
    echo Note: .env files are kept for reference but should not be shared
)

echo Cleanup complete!
echo.
echo Ready for submission. Folder size should be < 10MB
