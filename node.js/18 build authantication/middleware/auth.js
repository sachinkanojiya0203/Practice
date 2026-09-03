const { getUSer } = require('../service/auth')

async function restrictTologgedinUSerOnly(req, res, next) {
    const UserUid = req.cookies?.uid;

    if (!UserUid) return res.redirect('/login');
    const user = getUSer(UserUid);

    if (!user) return res.redirect('/login');
    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
    const UserUid = req.cookies.uid;

    const user = getUSer(UserUid);

    req.user = user;
    next();
}

module.exports = {
    restrictTologgedinUSerOnly,
    checkAuth,
}