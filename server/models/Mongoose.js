const mongoose = require('mongoose');

const { getDatabase } = require('../config/Environment');

mongoose.Promise = global.Promise;

/** @desc Start initial connection to database */
mongoose.connect(getDatabase().studious.toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 15000
}, (oErr) => {
    if (oErr) throw oErr;
});

module.exports.Users = require("./Users");
module.exports.Customize = require("./Customize");
module.exports.Schools = require("./Schools");

