# CRUD - App - sin frameworks

En esta aplicacion vamos a realizar:

- Operaciones CRUD

  - Create

  - Read

  - Update

  - Delete

- Sin frameworks o librerías externas

- Modals

- Mappers

- Clases

- Utilizar conversiones

- Código limpio

- Comprender las funcionalidades básicas de un Restful API de un backend

- Montar un backend de pruebas

- Generar y utilizar un store central para nuestro estado de la aplicación

- Documentación de funciones

Esta aplicacion fue desarrollada durante la cursada del curso de 'JavaScript Moderno: Guía para dominar el lenguaje' dictado por el profesor Fernando Herrera

## Pasos para ejecutar proyecto en local host:

1. Clonar repositorio
2. Ejecutar `npm install` para reconstruir los módulos de node
3. Ejecutar `npm i json-server --save-dev` para instalar un json server que vamos a utilizar para nuestro backend
4. En nuestro `package.json` en la parte de script debemos agregar : "server": "json-server server/db.json --port 3001"
5. Correr el devServer `npm run dev`
6. Correr el server en otra terminal `npm run server`
7. Abrir el proyecto en: `http://localhost:5173`
8. EndPoint para probar server en POSTMAN: `http://localhost:3001/users`

