import { authRequest } from './Fetch';

/** @public
 *  @param   {object} oData
 *  @returns {Promise<array>} */
export const create = (oData) => authRequest({
    url: "http://localhost:3010/school/create",
    data: oData,
    method: "POST"
});

export const find = () => authRequest({
    url: "http://localhost:3010/school/find"
});

/** @public
 *  @param   {object} oData
 *  @param   {string} oData.key
 *  @returns {Promise<array>} */
export const isValidKey = (oData) => authRequest({
    url: "http://localhost:3010/school/keyValidity",
    data: oData,
    method: "POST"
});