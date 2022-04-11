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