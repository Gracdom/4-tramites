# Script para subir cambios - Ejecutar como Administrador
# Clic derecho > Ejecutar con PowerShell > Sí (cuando pida permisos)

Write-Host "========================================" -ForegroundColor Green
Write-Host "  SUBIENDO CAMBIOS AL REPOSITORIO" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Cambiar al directorio del proyecto
Set-Location "H:\GRACDOM\Github\4-tramites"

# Ruta de git
$gitPath = "C:\Program Files\Git\bin\git.exe"

# Paso 1: Eliminar archivos de bloqueo
Write-Host "[1/5] Eliminando archivos de bloqueo..." -ForegroundColor Cyan
$lockFiles = @(".git\index.lock", ".git\config.lock")
foreach ($file in $lockFiles) {
    if (Test-Path $file) {
        try {
            # Intentar tomar posesión del archivo
            $acl = Get-Acl $file
            $permission = "Administrators","FullControl","Allow"
            $accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule $permission
            $acl.SetAccessRule($accessRule)
            Set-Acl $file $acl
            
            # Eliminar el archivo
            Remove-Item $file -Force -ErrorAction Stop
            Write-Host "  ✓ Eliminado: $file" -ForegroundColor Green
        } catch {
            Write-Host "  ✗ No se pudo eliminar: $file" -ForegroundColor Red
            Write-Host "    Por favor, elimínalo manualmente desde el explorador" -ForegroundColor Yellow
            Write-Host "    Ruta: $(Resolve-Path $file)" -ForegroundColor Gray
        }
    }
}
Write-Host ""

# Esperar un momento
Start-Sleep -Seconds 1

# Paso 2: Verificar estado
Write-Host "[2/5] Verificando estado del repositorio..." -ForegroundColor Cyan
& $gitPath status --short
Write-Host ""

# Paso 3: Agregar archivos
Write-Host "[3/5] Agregando archivos modificados..." -ForegroundColor Cyan
$files = @(
    "src/app/gestiones/ayuda-alquiler/page.tsx",
    "src/app/gestiones/ingreso-minimo-vital/page.tsx",
    "tailwind.config.ts"
)

$allAdded = $true
foreach ($file in $files) {
    if (Test-Path $file) {
        & $gitPath add $file 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  ✓ Agregado: $file" -ForegroundColor Green
        } else {
            Write-Host "  ✗ Error al agregar: $file" -ForegroundColor Red
            $allAdded = $false
        }
    } else {
        Write-Host "  ✗ No encontrado: $file" -ForegroundColor Red
        $allAdded = $false
    }
}

if (-not $allAdded) {
    Write-Host ""
    Write-Host "ERROR: No se pudieron agregar todos los archivos" -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit 1
}
Write-Host ""

# Paso 4: Crear commit
Write-Host "[4/5] Creando commit..." -ForegroundColor Cyan
$commitMessage = @(
    "Mejora diseño: banner premium ayuda-alquiler y rediseño completo página ingreso-minimo-vital",
    "",
    "- Banner principal mejorado con efectos visuales y animaciones",
    "- Rediseño completo página IMV siguiendo diseño de referencia",
    "- Agregadas animaciones personalizadas en Tailwind config",
    "- Limpieza de imports no utilizados"
) -join "`n"

& $gitPath commit -m $commitMessage 2>&1 | Out-String | Write-Host

if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✓ Commit creado correctamente" -ForegroundColor Green
} else {
    Write-Host "  ✗ Error al crear commit" -ForegroundColor Red
    Read-Host "Presiona Enter para salir"
    exit 1
}
Write-Host ""

# Paso 5: Hacer push
Write-Host "[5/5] Subiendo cambios al repositorio remoto..." -ForegroundColor Cyan
& $gitPath push 2>&1 | Write-Host

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✓ CAMBIOS SUBIDOS EXITOSAMENTE" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Archivos subidos:" -ForegroundColor Cyan
    foreach ($file in $files) {
        Write-Host "  - $file" -ForegroundColor Gray
    }
} else {
    Write-Host ""
    Write-Host "ERROR: No se pudieron subir los cambios" -ForegroundColor Red
    Write-Host "Verifica tu conexión a internet y los permisos del repositorio" -ForegroundColor Yellow
}

Write-Host ""
Read-Host "Presiona Enter para salir"
