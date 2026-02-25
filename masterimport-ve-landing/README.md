# 🚀 Master Import.ve - Landing Page

Landing page profesional para la academia de importaciones **Master Import.ve**, especializada en enseñar a emprendedores venezolanos a importar desde USA 🇺🇸 y China 🇨🇳.

![Master Import.ve](public/images/Gemini_Generated_Image_b9hsj3b9hsj3b9hs.png)

## 🌐 Demo en vivo

👉 [Ver página desplegada](https://fqb5iybgztkbq.ok.kimi.link)

## ✨ Características

- ⚡ **Tecnología moderna**: React + TypeScript + Vite + Tailwind CSS
- 📱 **100% Responsivo**: Optimizado para móvil, tablet y desktop
- 🎨 **Diseño profesional**: Paleta de colores corporativa (Azul Marino + Naranja)
- 🚀 **Rendimiento optimizado**: Build optimizado con Vite
- 🔗 **Integraciones**: Botón flotante de WhatsApp, enlaces a redes sociales

## 📁 Estructura del Proyecto

```
my-app/
├── public/
│   └── images/          # Imágenes del sitio
├── src/
│   ├── sections/        # Componentes de cada sección
│   │   ├── Hero.tsx
│   │   ├── ModuloChina.tsx
│   │   ├── ModuloUSA.tsx
│   │   ├── LogisticaPro.tsx
│   │   ├── FinanzasPagos.tsx
│   │   ├── Inscripcion.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── WhatsAppButton.tsx
│   ├── App.tsx
│   └── main.tsx
├── dist/                # Build de producción
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Cómo desplegar en GitHub Pages

### Paso 1: Crear repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en **"New repository"**
3. Nombre: `masterimport-ve` (o el que prefieras)
4. Deja público y haz clic en **"Create repository"**

### Paso 2: Subir el código

```bash
# En tu computadora, navega a la carpeta del proyecto
cd my-app

# Inicializar git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit - Landing Page Master Import.ve"

# Conectar con tu repositorio de GitHub
git remote add origin https://github.com/TU_USUARIO/masterimport-ve.git

# Subir el código
git push -u origin main
```

### Paso 3: Configurar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings** (Configuración)
2. En el menú lateral izquierdo, haz clic en **Pages**
3. En "Source" selecciona **Deploy from a branch**
4. En "Branch" selecciona **main** y carpeta **/ (root)**
5. Haz clic en **Save**

### Paso 4: Activar GitHub Actions (Opcional - Para build automático)

Si quieres que GitHub compile automáticamente tu proyecto, crea este archivo:

**`.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Alternativa: Subir solo la carpeta `dist/` (Más simple)

Si prefieres no configurar GitHub Actions, puedes subir directamente los archivos compilados:

```bash
# Crear una nueva rama llamada gh-pages
git checkout -b gh-pages

# Eliminar todo excepto la carpeta dist
git rm -rf .
git checkout main -- dist/

# Mover el contenido de dist a la raíz
mv dist/* .
rmdir dist

# Commit y push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

Luego en GitHub Pages settings, selecciona la rama **gh-pages**.

## 🛠️ Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa del build
npm run preview
```

## 📞 Contacto

- **WhatsApp**: +58 422 451 7053
- **Instagram**: [@masterimport.ve](https://instagram.com/masterimport.ve)

---

<p align="center">Hecho con ❤️ para emprendedores venezolanos</p>
