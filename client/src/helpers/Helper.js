/** @public
 *  @param   {function} fnCallback
 *  @param   {number} iTimeout
 *  @returns {(function(...[*]=): void)|*} */
export const debounce = (fnCallback, iTimeout = 500) => {
    let iTimer;
    return (...args) => {
        clearTimeout(iTimer);
        iTimer = setTimeout(() => {
            fnCallback(args);
        }, iTimeout);
    };
}

/** @public
 *  @param   {number} iDelay
 *  @returns {Promise<unknown>} */
export const delay = (iDelay = 1000) => new Promise( res => setTimeout(res, iDelay));

/** @public
 *  @param   {HTMLElement} oParentElem
 *  @param   {*} oInstanceOf
 *  @returns {HTMLElement} */
export const getParentByInstance = (oParentElem, oInstanceOf) => {
    if (oParentElem instanceof oInstanceOf) return oParentElem;
    else return getParentByInstance(oParentElem.parentElement, oInstanceOf);
}