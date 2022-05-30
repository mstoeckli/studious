/** @public
 *  @param {string} sSelector -> "#tags li"
 *  @param {string} sValue */
export const unorderedListFilterBySelector = (sSelector, sValue) => {
    [...document.querySelectorAll(sSelector)].forEach(oListItem => {
        const sValueInt = (oListItem.textContent || oListItem.innerText).toUpperCase();
        oListItem.style.display = sValue.toUpperCase().split(" ").some(v => sValueInt.indexOf(v) > -1)
            ? ""
            : "none";
    });
}

/** @public
 *  @param   {string} sTitle
 *  @param   {string} sDescription
 *  @param   {string} sCheckValue
 *  @returns {boolean} */
export const containsIdentifier = (sTitle, sDescription, sCheckValue) => sTitle.toLowerCase().includes(sCheckValue.toLowerCase()) || sDescription.toLowerCase().includes(sCheckValue.toLowerCase());

/** @public
 *  @param   {number} iValue
 *  @param   {string} sCheckValue
 *  @returns {boolean} */
export const containsNumber = (iValue, sCheckValue) => (iValue + String()).includes(sCheckValue);

/** @public
 *  @param   {string} sValue
 *  @param   {string} sCheckValue
 *  @returns {boolean} */
export const containsValue = (sValue, sCheckValue) => sValue.toLowerCase().includes(sCheckValue.toLowerCase());