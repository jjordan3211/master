# 📖 Instrucciones para Subir a GitHub

## 🎯 Opción Recomendada: GitHub Actions (Automático)

Con esta opción, cada vez que actualices tu código y hagas `git push`, GitHub compilará y publicará tu página automáticamente.

### Paso 1: Crear cuenta y repositorio en GitHub

1. Ve a [github.com](https://github.com) y crea una cuenta (si no tienes)
2. Haz clic en el botón verde **"New"** o **"+"** → **"New repository"**
3. En **"Repository name"** escribe: `masterimport-ve`
4. Deja todo como está y haz clic en **"Create repository"**

### Paso 2: Subir tu código

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# 1. Inicializar git
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el primer commit
git commit -m "Primera versión de la landing page"

# 4. Conectar con GitHub (reemplaza TU_USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU_USUARIO/masterimport-ve.git

# 5. Subir el código
git push -u origin main
```

### Paso 3: Activar GitHub Pages

1. En tu repositorio de GitHub, haz clic en la pestaña **"Settings"** (arriba)
2. En el menú lateral izquierdo, busca y haz clic en **"Pages"**
3. En la sección **"Source"**, selecciona: **"GitHub Actions"**
4. ¡Listo! GitHub detectará automáticamente el archivo de configuración

### Paso 4: Esperar y ver tu página

- Ve a la pestaña **"Actions"** en tu repositorio
- Verás un workflow ejecutándose (toma 2-3 minutos)
- Cuando termine (aparezca ✅ verde), tu página estará en:
  ```
  https://TU_USUARIO.github.io/masterimport-ve/
  ```

---

## 🚀 Opción Alternativa: Despliegue Manual

Si prefieres algo más simple sin GitHub Actions:

### Usando el script incluido:

```bash
# 1. Primero sube tu código a GitHub (pasos 1 y 2 de arriba)

# 2. Ejecuta el script de despliegue
./deploy.sh

# 3. Configura GitHub Pages:
#    - Ve a Settings → Pages
#    - En "Source" selecciona "Deploy from a branch"
#    - Selecciona la rama "gh-pages" y carpeta "/"
#    - Click en Save
```

---

## ⚙️ Configuración Importante

### Si tu repositorio NO se llama `TU_USUARIO.github.io`:

Edita el archivo `vite.config.ts` y descomenta la línea de base:

```typescript
export default defineConfig({
  base: '/masterimport-ve/',  // ← Descomenta y pon el nombre de tu repo
  // ... resto del código
})
```

Luego vuelve a compilar:
```bash
npm run build
```

---

## 📝 Resumen de comandos útiles

```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Guardar cambios
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push

# Ver en local
npm run dev

# Compilar para producción
npm run build
```

---

## ❓ Solución de problemas

### Error: "fatal: not a git repository"
```bash
git init
```

### Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push
```

### La página no carga las imágenes
Verifica que la carpeta `public/images/` exista y tenga todas las imágenes.

---

## 📞 ¿Necesitas ayuda?

- **WhatsApp**: +58 422 451 7053
- **Instagram**: [@masterimport.ve](https://instagram.com/masterimport.ve)

¡Éxito con tu landing page! 🎉
