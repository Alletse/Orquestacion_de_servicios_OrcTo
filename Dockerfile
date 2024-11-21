# Usar una imagen base de Node.js LTS
FROM node:14

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto del código fuente de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 8080

# Comando para correr la aplicación
CMD ["node", "index.js"]
