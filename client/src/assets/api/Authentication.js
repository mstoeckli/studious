import { authRequest } from './Fetch';

/** @public
 *  @param   {object} oData
 *  @param   {string} oData.email
 *  @param   {string} oData.password
 *  @returns {Promise<array>} */
export const signIn = (oData) => authRequest({
    url: "http://localhost:3010/authenticate/signin",
    data: oData,
    method: "POST"
});

/** @public
 *  @param   {object} oData
 *  @param   {string} oData.email
 *  @param   {string} oData.password
 *  @returns {Promise<array>} */
export const signUp = (oData) => authRequest({
    url: "http://localhost:3010/authenticate/signup",
    data: oData,
    method: "POST"
});

/** @public
 *  @param   {object} oData
 *  @param   {string} oData.id
 *  @returns {Promise<array>} */
export const getUserById = (oData) => authRequest({
    url: "http://localhost:3010/authenticate/userById",
    data: oData,
    method: "POST"
});

/** @public
 *  @returns {Promise<array>} */
export const isValid = () => authRequest({
    url: "http://localhost:3010/authenticate/validity",
    headers: {
        Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)accessToken\s*\=\s*([^;]*).*$)|^.*$/, "$1")}`
    }
});

/** @public
 *  @param   {object} oData
 *  @param   {string} oData.key
 *  @param   {string} oData.value
 *  @returns {Promise<array>} */
export const isValidInput = (oData) => authRequest({
    url: "http://localhost:3010/authenticate/inputValidity",
    data: oData,
    method: "POST"
});