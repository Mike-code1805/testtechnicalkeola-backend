# Testtechnicalkeola-backend Backend TS

Este es el backend para la aplicación Testtechnicalkeola-backend, desarrollado en TypeScript con Express, MongoDB, y Mongoose. Implementa autenticación JWT, notificaciones push con Firebase, y funcionalidad de correos electrónicos.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Variables de Entorno](#variables-de-entorno)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Documentación](#documentación)
- [Autor](#autor)

## Requisitos Previos

- **Node.js** (v14 o superior)
- **MongoDB** (Base de datos NoSQL)
- Cuenta de Firebase (para notificaciones push)
- Servidor SMTP (para el envío de correos electrónicos)

## Instalación

1. Clona este repositorio y navega a la carpeta del proyecto:

   ```bash
   git clone https://github.com/tu-usuario/testtechnicalkeola-backend.git
   cd testtechnicalkeola-backend
    ```

# Conexión a MongoDB
DB_URL=mongodb://localhost:27017/tu_base_de_datos

# Configuración de JWT
JWT_SECRET=tu_secreto_jwt

# Configuración de Firebase
FIREBASE_PROJECT_ID=tu_project_id_firebase
FIREBASE_CLIENT_EMAIL=tu_email_cliente_firebase
FIREBASE_PRIVATE_KEY=tu_llave_privada_firebase

# Configuración SMTP para el envío de correos
SMTP_HOST=tu_smtp_host
SMTP_PORT=587
SMTP_USER=tu_usuario_smtp
SMTP_PASS=tu_contraseña_smtp

# Puerto del servidor
PORT=3000


Este `README.md` ofrece una guía clara para instalar, configurar y ejecutar tu proyecto, además de una visión general de su estructura y funcionalidades.
