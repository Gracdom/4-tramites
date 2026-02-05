@echo off
echo ========================================
echo   ELIMINANDO BLOQUEOS Y SUBIENDO CAMBIOS
echo ========================================
echo.
echo IMPORTANTE: Ejecuta este archivo como ADMINISTRADOR
echo.
pause

cd /d "H:\GRACDOM\Github\4-tramites"

echo [Paso 1] Tomando posesion de archivos de bloqueo...
takeown /f ".git\index.lock" >nul 2>&1
takeown /f ".git\config.lock" >nul 2>&1
icacls ".git\index.lock" /grant Administradores:F >nul 2>&1
icacls ".git\config.lock" /grant Administradores:F >nul 2>&1

echo [Paso 2] Eliminando archivos de bloqueo...
if exist ".git\index.lock" (
    del /f /q ".git\index.lock" 2>nul
    if exist ".git\index.lock" (
        echo ERROR: No se pudo eliminar index.lock
        echo Por favor, eliminalo manualmente desde el explorador de archivos
        pause
        exit /b 1
    ) else (
        echo index.lock eliminado correctamente
    )
)

if exist ".git\config.lock" (
    del /f /q ".git\config.lock" 2>nul
    if exist ".git\config.lock" (
        echo ERROR: No se pudo eliminar config.lock
        echo Por favor, eliminalo manualmente desde el explorador de archivos
        pause
        exit /b 1
    ) else (
        echo config.lock eliminado correctamente
    )
)

echo.
echo [Paso 3] Agregando archivos modificados...
"C:\Program Files\Git\bin\git.exe" add src/app/gestiones/ayuda-alquiler/page.tsx
if %errorlevel% neq 0 (
    echo ERROR al agregar ayuda-alquiler/page.tsx
    pause
    exit /b 1
)

"C:\Program Files\Git\bin\git.exe" add src/app/gestiones/ingreso-minimo-vital/page.tsx
if %errorlevel% neq 0 (
    echo ERROR al agregar ingreso-minimo-vital/page.tsx
    pause
    exit /b 1
)

"C:\Program Files\Git\bin\git.exe" add tailwind.config.ts
if %errorlevel% neq 0 (
    echo ERROR al agregar tailwind.config.ts
    pause
    exit /b 1
)

echo Archivos agregados correctamente
echo.

echo [Paso 4] Creando commit...
"C:\Program Files\Git\bin\git.exe" commit -m "Mejora diseño: banner premium ayuda-alquiler y rediseño completo página ingreso-minimo-vital" -m "- Banner principal mejorado con efectos visuales y animaciones" -m "- Rediseño completo página IMV siguiendo diseño de referencia" -m "- Agregadas animaciones personalizadas en Tailwind config" -m "- Limpieza de imports no utilizados"

if %errorlevel% neq 0 (
    echo ERROR al crear commit
    pause
    exit /b 1
)

echo Commit creado correctamente
echo.

echo [Paso 5] Subiendo cambios al repositorio remoto...
"C:\Program Files\Git\bin\git.exe" push

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   CAMBIOS SUBIDOS EXITOSAMENTE
    echo ========================================
    echo.
    echo Archivos subidos:
    echo   - src/app/gestiones/ayuda-alquiler/page.tsx
    echo   - src/app/gestiones/ingreso-minimo-vital/page.tsx
    echo   - tailwind.config.ts
) else (
    echo ERROR al subir cambios
    echo Verifica tu conexion a internet y los permisos del repositorio
)

echo.
pause
