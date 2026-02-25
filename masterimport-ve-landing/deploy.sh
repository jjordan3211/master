#!/bin/bash

# 🚀 Script de despliegue para GitHub Pages
# Uso: ./deploy.sh

echo "🚀 Iniciando despliegue a GitHub Pages..."

# Verificar si estamos en un repositorio git
if [ ! -d .git ]; then
    echo "❌ Error: No se encontró un repositorio git."
    echo "💡 Primero inicializa git: git init"
    exit 1
fi

# Compilar el proyecto
echo "📦 Compilando proyecto..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error: Falló la compilación"
    exit 1
fi

echo "✅ Compilación exitosa"

# Crear rama gh-pages si no existe
echo "🌿 Preparando rama gh-pages..."
git branch -D gh-pages 2>/dev/null || true
git checkout --orphan gh-pages

# Eliminar todo excepto la carpeta dist
echo "🧹 Limpiando archivos..."
git rm -rf .

# Copiar archivos de dist a raíz
echo "📋 Copiando archivos compilados..."
cp -r dist/* .
rm -rf dist

# Agregar archivos al commit
echo "💾 Creando commit..."
git add .
git commit -m "🚀 Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

# Subir a GitHub
echo "⬆️ Subiendo a GitHub..."
git push origin gh-pages --force

# Volver a la rama main
echo "🔙 Volviendo a la rama main..."
git checkout main

echo ""
echo "✅ ¡Despliegue completado!"
echo ""
echo "📌 Pasos finales:"
echo "   1. Ve a tu repositorio en GitHub"
echo "   2. Click en Settings → Pages"
echo "   3. En 'Source' selecciona 'Deploy from a branch'"
echo "   4. Selecciona la rama 'gh-pages' y carpeta '/'"
echo "   5. Click en Save"
echo ""
echo "🌐 Tu sitio estará disponible en:"
echo "   https://TU_USUARIO.github.io/NOMBRE_REPO/"
echo ""
