const isAdmin = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            const err = new Error('No tienes suficientes permisos');
            err.statusCode = 401;
            throw err;
        }

        // Pasamos el control a la siguiente función.
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = isAdmin;
