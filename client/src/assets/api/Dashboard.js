import { authRequest } from './Fetch';

/** @public
 *  @returns {Promise<array>} */
export const get = () => authRequest({
    url: "http://localhost:3010/dashboard",
    headers: {
        Authorization: `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)tokenId\s*\=\s*([^;]*).*$)|^.*$/, "$1")}`
    }
});