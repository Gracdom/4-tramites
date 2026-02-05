@echo off
echo ========================================
echo   SUBIENDO CAMBIOS AL REPOSITORIO
echo ========================================
echo.

cd /d "H:\GRACDOM\Github\4-tramites"

echo [1/4] Eliminando archivos de bloqueo...
if exist ".git\index.lock" del /f /q ".git\index.lock" 2>nul
if exist ".git\config.lock" del /f /q ".git\config.lock" 2>nul
echo Archivos de bloqueo eliminados (si existian)
echo.

echo [2/4] Agregando archivos modificados...
"C:\Program Files\Git\bin\git.exe" add src/app/gestiones/ayuda-alquiler/page.tsx
"C:\Program Files\Git\bin\git.exe" add src/app/gestiones/ingreso-minimo-vital/page.tsx
"C:\Program Files\Git\bin\git.exe" add tailwind.config.ts
if %errorlevel% equ 0 (
    echo Archivos agregados correctamente
) else (
    echo ERROR al agregar archivos
    pause
    exit /b 1
)
echo.

echo [3/4] Creando commit...
"C:\Program Files\Git\bin\git.exe" commit -m "Mejora diseño: banner premium ayuda-alquiler y rediseño completo página ingreso-minimo-vital" -m "- Banner principal mejorado con efectos visuales y animaciones" -m "- Rediseño completo página IMV siguiendo diseño de referencia" -m "- Agregadas animaciones personalizadas en Tailwind config" -m "- Limpieza de imports no utilizados"
if %errorlevel% equ 0 (
    echo Commit creado correctamente
) else (
    echo ERROR al crear commit
    pause
    exit /b 1
)
echo.

echo [4/4] Subiendo cambios al repositorio remoto...
"C:\Program Files\Git\bin\git.exe" push
if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   CAMBIOS SUBIDOS EXITOSAMENTE
    echo ========================================
) else (
    echo ERROR al subir cambios
    pause
    exit /b 1
)

echo.
pause
