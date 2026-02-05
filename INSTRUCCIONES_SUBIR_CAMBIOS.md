# Instrucciones para Subir los Cambios

## Problema Detectado
Hay archivos de bloqueo de git que están impidiendo las operaciones automáticas. Esto suele ocurrir cuando:
- GitHub Desktop u otra herramienta git está abierta
- VS Code/Cursor tiene operaciones de git pendientes
- Un proceso git anterior se quedó bloqueado

## Solución Rápida (Recomendada)

### Opción 1: Usar GitHub Desktop
1. Abre **GitHub Desktop**
2. Cierra cualquier ventana de commit abierta
3. Verás los archivos modificados:
   - `src/app/gestiones/ayuda-alquiler/page.tsx`
   - `src/app/gestiones/ingreso-minimo-vital/page.tsx`
   - `tailwind.config.ts`
4. Escribe el mensaje de commit:
   ```
   Mejora diseño: banner premium ayuda-alquiler y rediseño completo página ingreso-minimo-vital
   ```
5. Haz clic en **"Commit to main"**
6. Haz clic en **"Push origin"**

### Opción 2: Ejecutar Script Batch (Como Administrador)
1. Cierra **todas** las aplicaciones que puedan estar usando git (GitHub Desktop, VS Code, Cursor, etc.)
2. Haz clic derecho en `subir-cambios.bat`
3. Selecciona **"Ejecutar como administrador"**
4. El script hará todo automáticamente

### Opción 3: Comandos Manuales en Terminal
1. Abre **PowerShell como Administrador**
2. Ejecuta estos comandos uno por uno:

```powershell
# Ir al directorio del proyecto
cd H:\GRACDOM\Github\4-tramites

# Eliminar archivos de bloqueo
Remove-Item ".git\index.lock" -Force -ErrorAction SilentlyContinue
Remove-Item ".git\config.lock" -Force -ErrorAction SilentlyContinue

# Agregar archivos
git add src/app/gestiones/ayuda-alquiler/page.tsx
git add src/app/gestiones/ingreso-minimo-vital/page.tsx
git add tailwind.config.ts

# Crear commit
git commit -m "Mejora diseño: banner premium ayuda-alquiler y rediseño completo página ingreso-minimo-vital" -m "- Banner principal mejorado con efectos visuales y animaciones" -m "- Rediseño completo página IMV siguiendo diseño de referencia" -m "- Agregadas animaciones personalizadas en Tailwind config" -m "- Limpieza de imports no utilizados"

# Subir cambios
git push
```

## Archivos Modificados
- ✅ `src/app/gestiones/ayuda-alquiler/page.tsx` - Banner principal mejorado
- ✅ `src/app/gestiones/ingreso-minimo-vital/page.tsx` - Rediseño completo
- ✅ `tailwind.config.ts` - Animaciones personalizadas

## Si Nada Funciona
1. Reinicia tu computadora
2. Abre GitHub Desktop
3. Haz commit y push desde ahí
