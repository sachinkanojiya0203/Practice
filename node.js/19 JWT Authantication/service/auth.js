const jwt = require('jsonwebtoken');
const secret = 'sachin@7885$'


function setUSer(User) {

    return jwt.sign({
        _id:User._id,
        email:User.email,
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