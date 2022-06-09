const insertNoteQuery = require('../../db/noteQueries/insertNoteQuery');

// crear una nueva nota 
const newNote = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            const err = new Error('La nota no puede estar vacía');
            err.statusCode = 400;
            throw err;
        }

        await insertNoteQuery(note);

        res.send({
            status: 'ok',
            message: 'Nota agregada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newNote;
