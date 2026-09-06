const jwt = require('jsonwebtoken');
const secret = 'sachin@7885$'


function setUSer(User) {
    return jwt.sign(payload, secret);
}

function getUSer(token) {
    return jwt.verify(token,secret);
}


module.exports = {
    setUSer,
    getUSer,
}