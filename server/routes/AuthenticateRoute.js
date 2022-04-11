const express = require('express');

const { signIn, signUp, signOut, isValid } = require('../controllers/Authenticate.js');

const { isSignedIn } = require('../middleware/Authenticate');

const oRouter = express.Router();

/** @desc Call controller function for signing in and signing up */
oRouter.post("/signin", signIn);
oRouter.post("/signUp", signUp);
oRouter.post("/signout", signOut);
oRouter.get("/validity", require("passport").authenticate('jwt', { session : false }), isSignedIn, isValid);

module.exports = oRouter;