const { config } = require('dotenv');

config();

exports.devCodes = {
    serverUrl: process.env.SERVER_URL_TEST,
    clientUrl: process.env.CLIENT_URL_TEST,
    stripePrivateKey: process.env.STRIPE_PRIVATE_KEY_TEST,
    jwt: process.env.JWT_PRIVATE_KEY_TEST
}

exports.devDatabase = {
    studious: "mongodb+srv://mstoeckli:RfAO8wO1mUkuUEFy@apperra.bnqck.mongodb.net/Apperra?retryWrites=true&w=majority"
}

module.exports = exports;