const jwt = require('jsonwebtoken');

const selectUserByNameQuery = require('../../db/userQueries/selectUserByNameQuery');

const loginUser = async (req, res, next) => {
    try {
        const { name } = req.body;

        if (!name) {
            const err = new Error('Faltan campos');
            err.statusCode = 400;
            throw err;
        }

        // Obtenemos al usuario con el nombre que viene en el body.
        const user = await selectUserByNameQuery(name);

        const payload = {
            id: user.id,
            role: user.role,
        };

        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '30d',
        });

        res.send({
            status: 'ok',
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUser;
