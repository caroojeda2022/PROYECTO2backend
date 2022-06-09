const jwt = require('jsonwebtoken');

const authUser = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            const err = new Error('Falta la cabecera de autorización');
            err.statusCode = 401;
            throw err;
        }

        let token;

        try {
            token = jwt.verify(authorization, process.env.SECRET);
        } catch {
            const err = new Error('Token inválido');
            err.statusCode = 401;
            throw err;
        }

        // Creamos la propiedad user y almacenamos el "id" y el "role".
        req.user = token;

        // Pasamos el control a la siguiente función.
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authUser;
