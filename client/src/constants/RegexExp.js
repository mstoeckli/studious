/** @public
 *  @constructor
 *  @param {string} sName */
export const RegexExp = (sName) => ({
  "email": "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$",
  "password": "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$",
  "username": "^(?=[a-zA-Z0-9_]{6,20}$)(?!.*[!@#$%^&*]{2})[^!@#$%^&*].*[^!@#$%^&*]$",
  "schoolName": "^(?=[a-zA-Z0-9 ]{4,40}$)(?!.*[!@#$%^&*]{2})[^!@#$%^&*].*[^!@#$%^&*]$",
  "schoolKey": "^\\d{4}$"
})[sName]