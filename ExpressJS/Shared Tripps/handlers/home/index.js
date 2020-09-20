const Tripps = require('../tripps');

module.exports = {
    get: {
        home(req, res, next) {
            console.log(req.user);
            res.render('home/home.hbs', {
                isLoggedIn: req.user !== undefined,
                userEmail: req.user ? req.user.email : ''
            });
        }
    },
    post: {

    }
};