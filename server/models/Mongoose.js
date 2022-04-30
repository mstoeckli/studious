const mongoose = require('mongoose');

const { getDatabase } = require('../config/Environment');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

/** @desc Start initial connection to database */
mongoose.connect(getDatabase().studious.toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (oErr) => { console.log("connect") })

/** @desc Handle errors after initial connection was established */
mongoose.connection.on("error", (oErr) => {
    console.log(oErr)
});

module.exports.Users = require("./Users");
module.exports.Schools = require("./Schools");

