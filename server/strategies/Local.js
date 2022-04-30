const passport = require('passport');
const { Strategy } = require('passport-local');

const { Users } = require('../models/Mongoose.js');

const i18n = require('../services/I18n.js');

/** @desc Called after function "done" in strategy is called */
passport.serializeUser((oUser, done) => done(null, oUser._id));
passport.deserializeUser((id, done) => {
   Users.findById(id)
   .then((oUser) => done(null, oUser))
   .catch((oErr) => done(oErr))
});

/** @public
 *  @returns {Strategy} */
exports.localStrategy = () => {
    return new Strategy({}, async (username, password, done) => {
        Users.findOne({ username }, (oErr, oUser) => {
            /** @desc Function "done" is calling callback passport.authenticate in file "Authenticate.js" */
            /** @desc Connection error while reading user data */
            if (oErr) done(oErr, false, i18n.__('mongooseFailure'));

            /** @desc Check if user by email was found or not */
            if (oUser) {
                /** @desc Call comparing function from users model */
                oUser.comparePassword(password, (oErr, isMatch) => {
                    if (oErr) return done(oErr, false);
                    if (isMatch) done(null, oUser);
                    else done(null, false, i18n.__('invalidPassword'));
                });
            } else done(null, false, i18n.__('emailNotFound'));
        });
    });
};