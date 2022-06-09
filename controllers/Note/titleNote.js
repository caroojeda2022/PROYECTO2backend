const selectitleNoteQuery = require('../../db/titleNoteQueries/selecttitleNoteQuery');

const listNote = async (req, res, next) => {
    try {
        const note = await selecttitleNoteQuery();

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

module.exports = titleNote;
