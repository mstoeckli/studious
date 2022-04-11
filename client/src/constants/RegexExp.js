/** @public
 *  @constructor
 *  @param {string} sName */
export const RegexExp = (sName) => ({
  "email": "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",
  "password": "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$",
  "username": "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[_])[a-zA-Z0-9!_]{4,20}$"
})[sName];