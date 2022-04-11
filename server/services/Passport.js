const passport = require('passport');

const { localStrategy } = require('../strategies/Local.js');
const { jwtStrategy } = require('../strategies/Jwt.js');

/** @desc Initialize passport for authentication */
exports.initialize = () => passport.initialize();
exports.strategies = () => {
    passport.use(jwtStrategy());
    passport.use(localStrategy());
}

module.exports = exports;