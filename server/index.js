const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv');

const i18n = require('./services/I18n.js');
const passport = require('./services/Passport.js');

const { getPort } = require('./config/Environment.js');

const authenticateRoute = require('./routes/AuthenticateRoute.js');
const schoolRoute = require('./routes/SchoolRoute');

/** @desc Initialize API */
const api = express();

config();

/** @desc Framework for creating the routing of the application */
api.use(express.json());
api.use(express.urlencoded({ extended : true }));

/** @desc Enables to send post requests */
api.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
api.use(bodyParser.json({ limit: "30mb", extended: true }));


/** @desc Cross-Origin Resource Sharing is a system, consisting of transmitting HTTP headers */
api.use(cors({
    origin: process.env.CLIENT_URL_TEST,
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
}));

/** @desc Initialize localization */
api.use(i18n.init);

/** @desc Initialize passport authentication strategies */
api.use(passport.initialize());
passport.strategies();

api.get("/", (req, res) => res.send("API available!"));
api.use("/authenticate", authenticateRoute);
api.use("/school", schoolRoute);

/** @desc Start express server */
api.listen(getPort(), () => console.log(`Server started successfully on port ${getPort()}`));