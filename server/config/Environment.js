const { prodCodes, prodDatabase } = require('./Production');
const { devCodes, devDatabase } = require('./Development');

/** @public
 *  @returns {{apperra: string}|{apperra: string}} */
exports.getDatabase = () => process.env.NODE_ENV ? prodDatabase : devDatabase;

/** @public
 *  @returns {{}} */
exports.getCodes = () => process.env.NODE_ENV ? prodCodes : devCodes;

/** @public
 *  @returns {string|number} */
exports.getPort = () => process.env.PORT || 3010;

module.exports = exports;