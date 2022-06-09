const selectmodifyNoteQuery = require('../../db/modifyNoteQueries/selectNoteQuery');

const modifyNote = async (req, res) => {
    try {
        const modifyNote = await selectNoteQuery();

        res.send({
            status: 'ok',
            data: {
                note,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = modifyNote;
