/** @public
 *  @param   {number} iYear
 *  @returns {number} */
export const getDaysLeapMonth = (iYear) => isLeapYear(iYear) ? 29 : 28;

/** @public
 *  @param   {number} iYear
 *  @returns {number[]} */
export const getDaysOfMonth = (iYear) => ([31, getDaysLeapMonth(iYear), 31, 30, 31, 30, 31, 31, 30, 31, 30]);

/** @public
 *  @returns {Date} */
export const getCurrentDate = () => new Date();

/** @public
 *  @param   {number} iMonth
 *  @param   {number} iYear
 *  @returns {number} */
export const getFirstDay = (iMonth = getCurrentDate().getMonth(), iYear = getCurrentDate().getFullYear()) => new Date(iYear, iMonth, 1).getDay();

/** @public
 *  @param   {number} iMonth
 *  @param   {number} iYear
 *  @returns {number} */
export const getLastDay = (iMonth = getCurrentDate().getMonth(), iYear = getCurrentDate().getFullYear()) => new Date(iYear, iMonth + 1, 0).getDay();

export const getPreviousDay = (iYear, iMonth, iDay) => {
    const dDate = new Date(iYear, iMonth, iDay);
    const dPreviousDate = new Date().setDate(dDate.getDate() - 1);
    return dPreviousDate.getDay();
}

export const getRemainingDaysOfWeek = (iDay) => 6 - iDay;

/** @public
 *  @param   {number} iYear
 *  @returns {boolean} */
export const isLeapYear = (iYear) => (iYear % 4 === 0 && iYear % 100 !== 0 && iYear % 400 !== 0) || (iYear % 100 === 0 && iYear % 400 === 0);
