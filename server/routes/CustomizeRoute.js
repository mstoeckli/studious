const express = require('express');

const { create, find } = require('../controllers/Customize');

const oRouter = express.Router();

/** @desc Call controller functions */
oRouter.post("/create", create);
oRouter.get("/find", find);

module.exports = oRouter;