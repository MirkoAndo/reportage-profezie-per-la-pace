@echo off
cd /d "%~dp0"

echo [1/2] Installazione delle dipendenze con pnpm install...
call pnpm install
if %ERRORLEVEL% neq 0 (
    echo.
    echo Si e' verificato un errore durante pnpm install.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/2] Avvio del server di sviluppo con pnpm dev...
call pnpm dev
pause

