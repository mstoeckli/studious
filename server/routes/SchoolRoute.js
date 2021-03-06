const express = require('express');

const { create, find, keyValidity } = require('../controllers/School');

const oRouter = express.Router();

/** @desc Call controller functions */
oRouter.post("/create", create);
oRouter.post("/keyValidity", keyValidity);
oRouter.get("/find", find);

module.exports = oRouter;