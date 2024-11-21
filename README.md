#Estructurado del repositorio que encontré en gitgub
API básica de prueba para probar todo lo referido a Docker, incluyendo los archivos Dockerfile, .dockerignore, y docker-compose.yml. Tecnologías: Node.js, Express, JavaScript, MySQL, Redis, Traefik.

## Conceptos vistos de Docker

- **Dockerfile**: Cómo configurarlo y nociones básicas.
- **.dockerignore**: Archivo para ignorar ciertos archivos al ejecutar Docker.
- **docker-compose.yml**: Configuraciones de servicios (contenedores) y demás información para dockerizar nuestra app. Estructura básica de un docker-compose y cómo leer los valores de las variables de entorno.

## Para correr en local (development)

1. Crear el archivo `.env`.
2. Añadir variables de entorno como el ejemplo:

```env
APP_HOST=miapp.local
MYSQL_ROOT_PASSWORD=supersecreto
MYSQL_DATABASE=mi_base_de_datos
