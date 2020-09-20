const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');

// TODO

module.exports = {
    createToken(data) {
        return jwt.sign({ _id: data._id }, secret, { expiresIn: '1h' });
    },
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);
                return;
            })
        })
    }
};