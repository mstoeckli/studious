import React from "react";

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
 *  @returns {number} */
export const getYear = () => getCurrentDate().getFullYear();

/** @public
 *  @param   {number} iYear
 *  @returns {*[]} */
export const getYears = (iYear = getYear()) => {
    const aYears = [];

    /** @desc Insert previous years */
    for (let i = 0; i <= 7; i++) {
        aYears.unshift(iYear - i);
    }

    /** @desc Insert following years */
    for (let i = 1; i <= 4; i++) {
        aYears.push(iYear + i);
    } return aYears
}

/** @public
 *  @returns {number} */
export const getMonth = () => getCurrentDate().getMonth();

/** @public
 *  @returns {number[]} */
export const getMonths = () => ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

/** @public
 *  @returns {string} */
export const getMonthDescription = (iMonth = getCurrentDate().getMonth()) => (["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"])[iMonth];

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

/** @public
 *  @param   {Date} dStartDate
 *  @param   {Date} dEndDate
 *  @returns {Date[]} */
export const getDatesBetween = (dStartDate, dEndDate) => {
    const aDatesBetween = [];
    const dDate = new Date(dStartDate.getTime());

    /** @desc Exclude start date */
    dDate.setDate(dDate.getDate() + 1);

    /** @desc Exclude end date */
    while (dDate < dEndDate) {
        aDatesBetween.push(new Date(dDate));
        dDate.setDate(dDate.getDate() + 1);
    } return aDatesBetween;
}


/** @public
 *  @param   {number} iYear
 *  @param   {number} iMonth
 *  @param   {number} iDay
 *  @returns {number} */
export const getPreviousDay = (iYear, iMonth, iDay) => {
    const dDate = new Date(iYear, iMonth, iDay);
    const dPreviousDate = new Date().setDate(dDate.getDate() - 1);
    return dPreviousDate.getDay();
}

/** @public
 *  @param   {object} oProperties
 *  @param   {number} oProperties.year
 *  @param   {number} oProperties.month
 *  @param   {Date} oProperties.startDate
 *  @param   {Date} oProperties.endDate
 *  @param   {array} oProperties.betweenDates
 *  @param   {function} oProperties.fnDateSelected
 *  @param   {function} oProperties.fnMouseOver
 *  @returns {number[]} */
export const getCalendarDays = ({ year = getCurrentDate().getFullYear(), month = getCurrentDate().getMonth(), startDate = null, endDate = null, datesBetween = [], fnDateSelected = () => {}, fnMouseOver = () => {}}) => {
    /** @desc 0 = Sunday; 1 = Monday; ... 6 = Saturday */
    const aPrevDays = [];
    const aDays = [];
    const aNextDays = [];

    const iFirstDay = getFirstDay(month, year);
    const iLastDay = getLastDay(month, year);
    const iDaysOfMonth = getDaysOfMonth(year)[month - 1] + 1;

    /** @desc Insert days of previous month */
    for (let i = iFirstDay === 0 ? iDaysOfMonth - 6 : (iDaysOfMonth - iFirstDay) + 1; i <= getDaysOfMonth(year)[month - 1]; i++) {
        aPrevDays.push(<span
            data-internaldate={new Date(year, month - 1, i)}
            className="prev"
            // className={compareDates(startDate, new Date(year, month - 1, i)) || compareDates(endDate, new Date(year, month, i)) ? "active" : "prev"}
            onClick={fnDateSelected}>{i}</span>);
    }

    /** @desc Insert days of current month */
    for (let i = getDaysOfMonth(year)[month]; i > 0; i--) {

        let sClassName = getCurrentDate().getDate() === i && getYear() === year && getMonth() === month ? "current": String();
        if (compareDates(startDate, new Date(year, month, i)) || compareDates(endDate, new Date(year, month, i))) {
            sClassName = "active";
        } else {
            for (const dDate of datesBetween) {
                if (compareDates(dDate, new Date(year, month, i))) {
                    sClassName = "hover";
                }
            }
        }

        aDays.unshift(<span
            data-internaldate={new Date(year, month, i)}
            className={sClassName}
            onClick={fnDateSelected}
            onMouseOver={fnMouseOver}>{i}</span>);
    }

    /** @desc Insert days of following month */
    if (iLastDay !== 0) {
        for (let i = 1; i <= 7 - iLastDay; i++) {
            aNextDays.push(<span className="next">{i}</span>);
        }
    } return [...aPrevDays, ...aDays, ...aNextDays];
};

/** @public
 *  @param   {number} iYear
 *  @returns {boolean} */
export const isLeapYear = (iYear) => (iYear % 4 === 0 && iYear % 100 !== 0 && iYear % 400 !== 0) || (iYear % 100 === 0 && iYear % 400 === 0);

/** @public
 *  @param   {Date} dDate1
 *  @param   {Date} dDate2
 *  @returns {boolean} */
export const compareDates = (dDate1, dDate2) => {
    if (dDate1 instanceof Date && dDate2 instanceof Date) return dDate1.toDateString().valueOf() === dDate2.toDateString().valueOf()
    else return false;
};