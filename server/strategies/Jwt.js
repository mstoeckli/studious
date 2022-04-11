const { ExtractJwt, Strategy } = require('passport-jwt');

const { getCodes } = require('../config/Environment.js');

const { Users } = require('../models/Mongoose.js');

/** @public
 *  @returns { JwtStrategy } */
exports.jwtStrategy = () => {
    return new Strategy({
        secretOrKey: getCodes().jwt,
        jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
    }, (jwt_payload, done) => {
        Users.findById(jwt_payload.sub, (oErr, oUser) => {
            if (oErr) done(oErr, false);
            if (oUser) done(null, oUser);
            else done(null, false);
        });
    })
}

module.exports = exports;