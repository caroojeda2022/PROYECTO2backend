# 2do. Proyecto Hack a Boss

API que permite publicar notas privadas de texto y categorizarlas: crear una API que permita publicar notas privadas de texto 
modificando su carácter privado o público y categorias internas.

Instalar
Crear una base de datos vacía en una instancia de MySQL local.
Guardar el archivo .env.example como .env y cubrir los datos necesarios.
Ejecutar npm run initDB para crear las tablas necesarias en la base de datos anteriormente creada.
Ejecutar npm run dev o npm start para lanzar el servidor.


Entidades en la base de datos
[User] - "Anónimo":
login
email
password

[idUser] - Registro de usuarios:
email
password

[Note] - Información de las Notas de texto:
id
Título,
Texto
URL de la nota
createdNote
modifiedNote: título,texto y categoría.
Imagen: poder asociar una imagen(única) a cada nota.

Endpoints
Usuarios anonimos:
POST [/user] - Login de usuario (devuelve token)
POST [/user] - email de usuario (devuelve token)
POST [/user] - password de usuario (devuelve token)

Usuarios registrado:
POST [/idUser] - Registro de usuario.
GET [/idUser] - Devuelve información del usuario.
GET [/idUser] - Devuelve información del usuario del token (necesita cabecera con token)
GET [/idUser] Se diferencia entre "Nota pública" y "Nota privada" según decisión del usuario, por defecto las notas son privadas. Cambia el atributo request a true.
GET [/idUser] Por defecto todas las notas son privadas,solo pueden ser verificadas por su creador, Cambia el atributo request a true.

Notas:
POST [/Note] - Crear una nota (título,texto y categoría única (fijas)
GET [/Note] - Ver listado de notas, (solo títulos)
GET [/Note] - Ver nota (solo título)
GET [/Note] - Modificar sus notas: título, texto y categoría.
PUT [/Note] - Marcar una nota privada como pública. Cambia el atributo request a true.
DELETE [/Note] - Eliminar una nota.
POST [/Note] - Permite crear, editar y borrar categorías (titulo, texto y categoría única (fijas) con token)

Si una nota es pública puede ser leída por cualquier usuario registrado y logueado en la api.
Las notas públicas solo se pueden acceder si conoce la URL.
____

Instalar
Crear una base de datos vacía en una instancia de MySQL local.
Guardar el archivo .env.example como .env y cubrir los datos necesarios.
Ejecutar npm run initDB para crear las tablas necesarias en la base de datos anteriormente creada.
Ejecutar npm run dev o npm start para lanzar el servidor.
Entidades en la base de datos
[User] - Puede ser de tipo "Anónimo" o Usuario registrado 
(funciona como tipo administrador? porque sabemos que el único que puede cambiar estatus de las notas de privadas a públicas)

login
email
password
[Note] - Información de las Notas de texto:

id
Título,
Texto
URL de la nota
createdNote
modifyNote: título,texto y categoría.
Imagen: poder asociar una imagen(única) a cada nota.

Endpoints
Usuarios:

POST [/user] - Login de usuario (devuelve token) (loginUser)
POST [/user] - Email de usuario (devuelve token) (getUser)
POST [/user] - Password de usuario (devuelve token) (getOwnUser)
POST [/User] - Registro de usuario. (newUser)
Notas:

POST [/Note] - Crear una nota (título,texto y categoría única (fijas) (newNote.js)
GET [/Note] - Ver nota (solo título) (titleNote.js)
GET [/Note] - Modificar sus notas: título, texto y categoría. (modifyNote.js)
POST [/Note] - Marcar nota privada a pública, solo usuario resgistrado (categoryNote.js) Cambia el atributo request a true.
DELETE [/Note] - Eliminar una nota. (deleteNote.js)
Características:

Si una nota es pública puede ser leída por cualquier usuario registrado y logueado en la api.
Las notas públicas solo se pueden acceder si conoce la URL.
