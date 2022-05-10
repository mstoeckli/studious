const express = require('express');

const { create, find, keyValidity } = require('../controllers/School');

const oRouter = express.Router();

/** @desc Call controller function for signing in and signing up */
oRouter.post("/create", create);
oRouter.post("/keyValidity", keyValidity);
oRouter.get("/find", find);

module.exports = oRouter;