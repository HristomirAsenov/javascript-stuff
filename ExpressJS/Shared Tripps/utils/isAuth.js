const jwt = require('./jwt');
const User = require('../handlers/users/User');
const { cookie } = require('../config/config');

module.exports = (justContinue = false) => {

    return function (req, res, next) {
        const token = req.cookies[cookie] || '';
        jwt.verifyToken(token)
            .then((result) => {
                User.findById(result._id).then((user) => {
                    req.user = user;
                    next();
                })
            })
            .catch((err) => {
                if (justContinue) {
                    next();
                    return;
                }
                res.redirect('/user/login');
            })
    }
    
};