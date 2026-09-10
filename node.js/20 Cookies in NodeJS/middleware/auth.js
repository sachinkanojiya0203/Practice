const { getUSer } = require('../service/auth')

async function restrictTologgedinUSerOnly(req, res, next) {
    const UserUid = req.headers['Authorization'];

    if (!UserUid) return res.redirect('/login');
    const token = UserUid.split("Bearer ")[1]; //
    const user = getUSer(token);

    if (!user) return res.redirect('/login');
    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    console.log(req.headers)
    const UserUid = req.headers['authorization'];
    const token = UserUid.split("Bearer ")[1]; //


    const user = getUSer(token);

    // const user = getUSer(UserUid);

    req.user = user;
    next();
}

module.exports = {
    restrictTologgedinUSerOnly,
    checkAuth,
}