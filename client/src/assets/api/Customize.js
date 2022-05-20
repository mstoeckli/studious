import { authRequest } from './Fetch';

/** @public
 *  @param   {object} oData
 *  @returns {Promise<array>} */
export const create = (oData) => authRequest({
    url: "http://localhost:3010/customize/create",
    data: oData,
    method: "POST"
});

export const find = () => authRequest({
    url: "http://localhost:3010/customize/find"
});