/* require('dotenv').config(); */ 

const express = require('express');
const morgan = require('morgan');
/* por el morgan.. const bodyParser = require('body-parser'); */

const { PORT } = process.env; /* no se usa*/ 

/* Creación de la app express*/
const app = express();

app.use(morgan('dev'));

app.use(express.json());

/**
 * #################
 * ## Middlewares ##
 * #################
 */

const authUser = require('./middlewares/authUser');
const isAdmin = require('./middlewares/isAdmin');
const noteExist = require('./middlewares/noteExist');

/**
 * ########################
 * ## Endpoints Usuarios ##
 * ########################
 */

const { newUser, loginUser, deleteUser } = require('./controllers/users');

// Nuevo usuario.
app.post('/user', authUser, isAdmin, newUser);

// Login de usuario.
app.post('/login', loginUser);

// Dar el usuario.
app.getUser('/user/:getUser', authUser, isAdmin, getUser);

// Dar el usuario registrado
app.getOwnUser('/user/:getOwnUser', authUser, isAdmin, getOwnUser);

/**
 * #######################
 * ## Endpoints Notas ##
 * #######################
 */

const { newNote, titleNote, modifyNote, categoryNote, deleteNote } = require('./controllers/Note');

// Nueva nota.
app.post('/Note', authUser, isAdmin, newNote);

// Titulo de Nota.
app.get('/note', titleNote);

// Modificar la Nota.
app.get('/note', modifyNote);

// Categoria de la Nota. (pública/privada)
app.get('/note', categoryNote);

// Eliminar la nota.
app.delete('/note/:titleNote', authUser, isAdmin, deleteNote);

/**
 * #####################
 * ## Endpoints Usuarios ##
 * #####################
 */

const {
    newUser,
    loginUser,
    getUser,
    getOwnUser,
} = require('./controllers/User');

// Nuevo Usuario.
app.post('/user', authUser, isAdmin, newUser);

// Login de Usuario.
app.put('/users, authUser, isAdmin, loginUser); 

// Mostrar el usuario
app.put('/user, authUser, isAdmin, getUser);

// Dar el usuario registrado
app.put('/user, authUser, isAdmin, getOwnUser);

// Finalizar una solicitud de usuario
app.put (
    '/user/:authUser/request/end',
    newUser,
    loginUser,
    getUser,
    getOwnUser,
);

// Finalizar una solicitud de usuario
app.put('/user, authUser, authUser);

// Finalizar la solicitud de usuario registrado
app.put('/user, authUser, authUser);

/**
 * ######################
 * ## Middleware Error ##
 * ######################
 */

app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.statusCode || 500).send ({
        status: 'error',
        message: err.message,
    })
})

/**
 * ##########################
 * ## Middleware Not Found ##
 * ##########################
 */

app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found!',
    });
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})
