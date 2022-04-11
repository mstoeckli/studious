import axios from 'axios';

/** @public
 *  @param   {object} oProperties
 *  @param   {string} oProperties.url
 *  @param   {string=} oProperties.method
 *  @param   {object=} oProperties.params
 *  @param   {object=} oProperties.data
 *  @param   {object=} oProperties.headers
 *  @returns {Promise<{data: *, success: boolean} | {success: boolean, message: *}>} */
export const authRequest = (oProperties) => {
    /** @desc Initialize default object for axios request */
    const _oProperties = {
        url: String(),
        method: "GET",
        params: {},
        data: {},
        headers: {},
        withCredentials: true
    }

    /** @desc Update auth request properties */
    for (const sPropertyId of Object.keys(oProperties)) {
        if (oProperties.hasOwnProperty(sPropertyId)) {
            /** @desc Update default value */
            _oProperties[sPropertyId] = oProperties[sPropertyId];
        }
    }

    /** @desc Execute axios call and return promise */
    return axios(_oProperties)
    .then((oResponse) => ({
        success: true,
        data: oResponse.data
    }))
    .catch((oErr) => ({
        success: false,
        message: oErr.message
    }));
}