const jwt = require('jsonwebtoken');
const secret = 'sachin@7885$'


function setUSer(user) {

    return jwt.sign({
        _id:user._id,
        email:user.email,
        role:user.role,
    },secret);
}

function getUSer(token) {
    if(!token)return null;

    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return null;
    }
}


module.exports = {
    setUSer,
    getUSer,
}