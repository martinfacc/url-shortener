# URL Shortener

Este es un sistema simple de acortador de URLs basado en Node.js y Express.

## Características

- Acorta URLs largas a códigos cortos.
- Almacena las URLs en una base de datos.
- Redirige a la URL original cuando se accede al código corto.
- Utiliza `dotenv` para la configuración del puerto y la base URL.

## Requisitos

- Node.js 16+
- npm o yarn

## Instalación

1. Clona este repositorio:

   ```sh
   git clone https://github.com/martinfacc/url-shortener.git
   cd url-shortener
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:

   ```env
   PORT=3000
   BASE_URL=http://localhost:3000/
   ```

4. Inicia el servidor:
   ```sh
   npm start
   ```

## Uso

### Acortar una URL

Realiza una solicitud `POST` a `http://localhost:3000/shorten` con el siguiente JSON:

```json
{
  "url": "https://ejemplo.com"
}
```

Respuesta esperada:

```json
{
  "shortUrl": "http://localhost:3000/abcd1234"
}
```

### Redirigir a la URL original

Accede a `http://localhost:3000/abcd1234` y serás redirigido a `https://ejemplo.com`.
