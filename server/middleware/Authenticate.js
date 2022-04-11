const jwt = require('jsonwebtoken');

const { getCodes } = require('../config/Environment.js');

/** @public */
exports.isSignedIn = (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            let accessToken = req.headers.authorization.split(' ')[1];
            jwt.verify(accessToken, getCodes().jwt, (oErr, decoded) => {
                if (decoded) {
                    req.decoded = decoded;
                    next();
                } else res.status(401).json({
                    success : false,
                    message : oErr.message
                });
            });
        } else res.status(401).json({
            success : false,
            message : res.__('signin')
        });
    } catch (err) { res.status(401).json({
        success : false,
        message : res.__('signin')
    })}
}

module.exports = exports;