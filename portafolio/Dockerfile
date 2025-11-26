# Imagen base ligera de nginx para servir archivos estáticos
FROM nginx:alpine

# Elimina el index por defecto (opcional) y copia los archivos del sitio
# Asegúrate de que index.html, styles.css y script.js estén en la raíz del contexto de build
COPY ./ /usr/share/nginx/html/

# Expone el puerto que usa nginx
EXPOSE 80

# Mantiene nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]