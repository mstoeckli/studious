const passport = require('passport');
const jwt = require('jsonwebtoken');

const { getCodes } = require('../config/Environment.js');

const { Users } = require('../models/Mongoose.js');

/** @public */
exports.signIn = (req, res, next) => {
    /** @desc Authenticate through passport local and use callback to call next function
     *  @param {object} oErr
     *  @param {{email:string, password:string, projects:{}}} oUser
     *  @param {string} sInfoMessage -> Local strategy i18n message */
    passport.authenticate("local", { session: false }, (oErr, oUser, sInfoMessage) => {
        /** @desc Passport failure */
        if (oErr) return next(oErr);

        else {
            /** @desc Signing in successfully completed */
            if (oUser && !sInfoMessage) {
                const sTokenId = jwt.sign({
                    iss : 'apperra',
                    aud : 'http://localhost:3000',
                    sub : oUser._id,
                    iat : Date.now(),
                    exp : Math.floor(Date.now() / 1000) + 30
                }, getCodes().jwt);

                /** @desc Set token id as a browser cookie */
                res.cookie("accessToken", sTokenId);

                /** @desc Successfully signed in */
                res.status(200).json({
                    success: true,
                    userId: oUser._id,
                    email: oUser.email
                });

                /** @desc Error while signing in with email/password */
            } else res.status(200).json({
                success : false,
                message : sInfoMessage
            });
        }
    })(req, res, next);
}

/** @public */
exports.signUp = async (req, res) => {
    Users.create(req.body)
    /** @param {object} oUser
     *  @param {string} oUser._id
     *  @param {string} oUser.email */
    .then((oUser) => {
        console.log("signup", oUser);
        res.status(200).json({
            success : true,
            userId : oUser._id,
            email : oUser.email
        });
    })
    .catch((oErr) => res.status(400).json({
        success: false,
        message: oErr.message
    }))
}

/** @public */
exports.signOut = async (req, res) => {
    console.log("signout");
}

/** @public */
exports.isValid = async (req, res) => {
    /** @desc Already successfully signed in  */
    res.status(200).json({
        success: true,
        userId: req.decoded.sub,
    });
}

module.exports = exports;