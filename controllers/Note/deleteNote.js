const deleteNoteQuery = require('../../db/tablesQueries/deleteNoteQuery');

const deleteNote = async (req, res) => {
    try {
        const { Note } = req.params;

        await deleteNoteQuery(Note);

        res.send({
            status: 'ok',
            message: 'Nota eliminada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteNote;
