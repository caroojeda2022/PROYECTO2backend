const insertcategoryNoteQuery = require('../../db/noteQueries/categoryNoteQuery');

/* FALTA COLOCAR LAS CATEGORIAS PUBLICO O PRIVADO A MODIFICAR */

const categoryNote = async (req, res, next) => {
    try {
        const { name } = req.body;

        if (!name) {
            const err = new Error('Faltan campos');
            err.statusCode = 400;
            throw err;
        }

        await categoryNoteQuery(note);

        res.send({
            status: 'ok',
            message: 'Nota agregada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = categoryNote;
