@echo off
setlocal

cd /d "%~dp0.."

echo Building Scenografica production site...
call npm.cmd run build
if errorlevel 1 (
  echo.
  echo Build failed. Keeping this window open so you can read the error.
  pause
  exit /b 1
)

echo.
echo Starting production server at http://localhost:3000
echo Keep this window open while previewing the site.
call npm.cmd run start
