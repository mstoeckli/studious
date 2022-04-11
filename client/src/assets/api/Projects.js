import { authRequest } from './Fetch';

/** @public
 *  @param   {object} oParams
 *  @param   {object} oParams.filter
 *  @param   {object} oParams.sort
 *  @returns {Promise<array>} */
export const get = (oParams) => authRequest({
    url: "http://localhost:3010/projects",
    params: oParams
});