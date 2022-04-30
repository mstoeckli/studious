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