const { config } = require('dotenv');

config();

exports.devCodes = {
    serverUrl: process.env.SERVER_URL_TEST,
    clientUrl: process.env.CLIENT_URL_TEST,
    stripePrivateKey: process.env.STRIPE_PRIVATE_KEY_TEST,
    jwt: process.env.JWT_PRIVATE_KEY_TEST
}

exports.devDatabase = {
    studious: "mongodb+srv://mongooseadmin:XoLx6PX2KrUDP5k0@studious.sbbro.mongodb.net/studious?retryWrites=true&w=majority"

}

module.exports = exports;