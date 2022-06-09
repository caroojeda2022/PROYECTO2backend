const getConnection = require('../db/getConnection');

const noteExist = async (req, res, next) => {
    let connection;

    try {
        connection = await getConnection();

        const { newNote } = req.params;

        const [Note] = await connection.query(
            `SELECT id FROM note WHERE id = ?`,
            [newNote]
        );

        if (note.length < 1) {
            const err = new Error('La nota no existe');
            err.statusCode = 404;
            throw err;
        }

        next();
    } catch (err) {
        next(err);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = noteExist;
