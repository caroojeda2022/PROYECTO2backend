const newUser = require('./newUser');
const loginUser = require('./loginUser');
const deleteUser = require('./deleteUser');

module.exports = {
    loginUser,
    newUser,
    getUser,
    getOwnUser,
};
