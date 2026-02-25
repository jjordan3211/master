# 🚀 Guía Rápida de Despliegue en GitHub Pages

## Opción 1: Despliegue Automático (Recomendado)

Esta opción configura GitHub Actions para que cada vez que hagas `git push`, se compile y despliegue automáticamente.

### Pasos:

1. **Sube el código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
   git push -u origin main
   ```

2. **Configura GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Click en **Settings** → **Pages** (en el menú lateral)
   - En "Source" selecciona **GitHub Actions**
   - ¡Listo! El workflow ya está incluido en `.github/workflows/deploy.yml`

3. **Tu sitio estará en:**
   ```
   https://TU_USUARIO.github.io/NOMBRE_REPO/
   ```

---

## Opción 2: Despliegue Manual (Más simple)

Sube directamente los archivos ya compilados.

### Pasos:

1. **Compila el proyecto:**
   ```bash
   npm run build
   ```

2. **Crea una rama separada para el despliegue:**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   ```

3. **Copia los archivos compilados:**
   ```bash
   # Desde la rama main
   git checkout main -- dist/
   mv dist/* .
   rm -rf dist
   ```

4. **Sube la rama gh-pages:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

5. **Configura GitHub Pages:**
   - Ve a **Settings** → **Pages**
   - En "Source" selecciona **Deploy from a branch**
   - Selecciona la rama **gh-pages** y carpeta **/ (root)**
   - Click **Save**

---

## 🔧 Configuración importante para GitHub Pages

### Si usas un dominio personalizado:

1. Crea un archivo `CNAME` en la carpeta `public/` con tu dominio:
   ```
   www.tudominio.com
   ```

2. En GitHub Pages settings, agrega tu dominio personalizado.

### Configurar base URL (si es necesario):

Si tu repositorio no se llama `TU_USUARIO.github.io`, edita `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/NOMBRE_REPO/',
  // ... resto de la configuración
})
```

Luego vuelve a compilar:
```bash
npm run build
```

---

## ✅ Checklist antes de desplegar

- [ ] Todas las imágenes están en `public/images/`
- [ ] Los enlaces de WhatsApp e Instagram son correctos
- [ ] El número de teléfono es: +58 422 451 7053
- [ ] El usuario de Instagram es: @masterimport.ve
- [ ] Has probado el sitio localmente con `npm run preview`

---

## 📞 ¿Necesitas ayuda?

- **WhatsApp**: +58 422 451 7053
- **Instagram**: [@masterimport.ve](https://instagram.com/masterimport.ve)
