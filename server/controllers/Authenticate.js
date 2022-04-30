const passport = require('passport');
const jwt = require('jsonwebtoken');

const { getCodes } = require('../config/Environment.js');

const { Users, Schools } = require('../models/Mongoose.js');

const i18n = require('../services/I18n.js');

/** @public */
exports.signIn = (req, res, next) => {
    /** @desc Authenticate through passport local and use callback to call next function
     *  @param {object} oErr
     *  @param {object} oUser
     *  @param {string} oUser._id
     *  @param {string} oUser.email
     *  @param {string} oUser.password
     *  @param {string} oUser.username
     *  @param {string} sInfoMessage -> Local strategy i18n message */
    passport.authenticate("local", { session: false }, (oErr, oUser, sInfoMessage) => {
        console.log(oErr, oUser, sInfoMessage);
        /** @desc Passport failure */
        if (oErr) return next(oErr);
        else {
            /** @desc User found in schema "users" */
            if (oUser && !sInfoMessage) {
                /** @desc Check if user is registered in school */
                Schools.findOne({ key: req.body.key }).populate({
                    path: "users",
                    match: { _id: oUser._id }
                })
                .then((oSchool) => {
                    if (oSchool && oSchool?.users && Object.keys(oSchool.users).length > 0) {
                        const sTokenId = jwt.sign({
                            iss : 'studious',
                            aud : 'http://localhost:3000',
                            sub : oUser._id,
                            iat : Date.now(),
                            exp : Math.floor(Date.now() / 1000) + 60 * 60
                        }, getCodes().jwt);

                        /** @desc Set token id as a browser cookie */
                        res.cookie("accessToken", sTokenId);

                        /** @desc Successfully signed in */
                        res.status(200).json({
                            success: true,
                            userId: oUser._id,
                            username: oUser.username,
                            email: oUser.email
                        });
                    } else res.status(200).json({
                        success : false,
                        message : i18n.__('userInSchoolNotFound')
                    });
                });
            /** @desc Error while signing in with username/password */
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
    .then((oUser) => {
        res.status(200).json({
            success : true,
            userId : oUser._id,
            username: oUser.username,
            email : oUser.email
        });
    })
    .catch((oErr) => res.status(400).json({
        success: false,
        message: oErr.message
    }));
}

/** @public */
exports.userById = async (req, res) => {
    Users.findById(req.body.id)
    .then((oUser) => res.status(200).json({
        success : true,
        userId : oUser._id,
        username: oUser.username,
        email: oUser.email
    }))
    .catch((oErr) => res.status(400).json({
        success: false,
        message: oErr.message
    }));
}

/** @public */
exports.inputValidity = async (req, res) => {
    Users.findOne({ [req.body.key]: req.body.value } )
        .then((oUser) => {
            res.status(200).json({
                success : true,
                userId : oUser._id
            });
        })
        .catch((oErr) => res.status(400).json({
            success: false,
            message: oErr.message
        }));
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