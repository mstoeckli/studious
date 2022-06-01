import React, { useState, useRef } from 'react';

import { StyledDatePicker } from '../../styles/base/DatePicker.styles';

import { getCalendarDays, getCurrentDate, getDatesBetween, getMonthDescription, getMonths, getYears } from '../../helpers/base/Calendar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';
import * as FaSolidIcons from '@fortawesome/pro-solid-svg-icons';

/** @public
 *  @constructor
 *  @returns {JSX.Element} Datepicker */
export const DatePicker = () => {
    const oInitialState = {
        month: getCurrentDate().getMonth(),
        year: getCurrentDate().getFullYear(),
        startDate: null,
        endDate: null,
        datesBetween: []
    };

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update date information
     *  @type {{month:number, year:number}, setDate:function} */
    const [ date, setDate ] = useState(oInitialState);

    const monthsRefObj = useRef(null);
    const yearsRefObj = useRef(null);
    const calendarDaysRefObj = useRef(null);

    /** @private */
    const _onClickYear = () => yearsRefObj.current.classList.add("show");

    /** @private */
    const _onClickMonth = () => monthsRefObj.current.classList.add("show");

    /** @private */
    const _onClickToday = () => setDate(() => (oInitialState))

    /** @private */
    const _onClickPrev = () => {
        setDate((oDate) => ({
            ...oDate,
            month: oDate.month - 1 < 0 ? 11 : oDate.month - 1,
            year: oDate.month - 1 < 0 ? oDate.year - 1 : oDate.year
        }));
    };

    /** @private */
    const _onClickNext = () => {
        setDate((oDate) => ({
            ...oDate,
            month: oDate.month + 1 > 11 ? 0 : oDate.month + 1,
            year: oDate.month + 1 > 11 ? oDate.year + 1 : oDate.year
        }));
    };

    /** @private
     *  @param {Event} oEvt */
    const _onDateSelected = (oEvt) => {
        /** @desc Determine the internal date of span element */
        const dInternalDate = new Date(oEvt.currentTarget.getAttribute("data-internaldate"));

        /** @desc Update date state */
        if (date.startDate && date.endDate) setDate((oDate) => ({
            ...oDate,
            startDate: dInternalDate,
            endDate: null,
            datesBetween: []
        }));
        else setDate((oDate) => ({
            ...oDate,
            startDate: !date.startDate && !date.endDate ? dInternalDate : date.startDate,
            endDate: date.startDate && !date.endDate ? dInternalDate : date.endDate,
            datesBetween: date.startDate && date.endDate ? [] : date.datesBetween
        }));
    };

    const _onMouseOver = (oEvt) => {

        if (date.startDate && !date.endDate) {

            const dEndDate = new Date(oEvt.currentTarget.getAttribute("data-internaldate"));

            setDate((oDate) => ({
                ...oDate,
                // endDate: dEndDate,
                datesBetween: getDatesBetween(date.startDate, dEndDate)
            }));
        }

    }

    /** @private
     *  @returns {JSX.Element[]} */
    const _addMonths = () => {
        const aMonths = [];
        for (let iMonth of getMonths()) {
            aMonths.push(<span
                onClick={() => {
                    monthsRefObj.current.classList.remove("show");
                    setDate((oDate) => ({
                        ...oDate,
                        month: iMonth,
                    }));
                }}>{getMonthDescription(iMonth)}
            </span>);
        } return aMonths;
    }

    /** @private
     *  @returns {JSX.Element[]} */
    const _addYears = () => {
        const aYears = [];
        for (let iYear of getYears()) {
            aYears.push(<span
                onClick={() => {
                    yearsRefObj.current.classList.remove("show");
                    setDate((oDate) => ({
                        ...oDate,
                        year: iYear,
                    }));
                }}>{iYear}
            </span>);
        } return aYears;
    }

    return (
        <StyledDatePicker>
            <div className="calendar">
                <header>
                    <div
                        className="calendar-nav"
                        onClick={_onClickPrev}>
                        <FontAwesomeIcon icon={FaSolidIcons["faAngleLeft"]}/>
                    </div>
                    <div className="calendar-buttons">
                        <button
                            onClick={_onClickMonth}>
                            <span>{getMonthDescription(date.month)}</span>
                        </button>
                        <button
                            onClick={_onClickYear}>
                            <span>{date.year}</span>
                        </button>
                        <button
                            onClick={_onClickToday}>
                            <span>Heute</span>
                        </button>
                    </div>
                    <div
                        className="calendar-nav"
                        onClick={_onClickNext}>
                        <FontAwesomeIcon icon={FaSolidIcons["faAngleRight"]} />
                    </div>
                </header>
                <article>
                    <div className="calendar-select">
                        <div className="calendar-week">
                            <span>MO</span>
                            <span>DI</span>
                            <span>MI</span>
                            <span>DO</span>
                            <span>FR</span>
                            <span>SA</span>
                            <span>SO</span>
                        </div>
                        <div
                            ref={calendarDaysRefObj}
                            className="calendar-days">
                            {getCalendarDays({
                                month: date.month,
                                year: date.year,
                                startDate: date.startDate,
                                endDate: date.endDate,
                                datesBetween: date.datesBetween,
                                fnDateSelected: _onDateSelected,
                                fnMouseOver: _onMouseOver
                            })}
                        </div>
                    </div>
                    <div
                        ref={monthsRefObj}
                        className="calendar-months">
                        {_addMonths()}
                    </div>
                    <div
                        ref={yearsRefObj}
                        className="calendar-years">
                        {_addYears()}
                    </div>
                </article>
                <footer>
                    <button>
                        <FontAwesomeIcon icon={FaDuotoneIcons["faCalendarXmark"]} />
                        <span>Abbrechen</span>
                    </button>
                    <button>
                        <FontAwesomeIcon icon={FaDuotoneIcons["faCalendarCheck"]} />
                        <span>Übernehmen</span>
                    </button>
                </footer>
            </div>
        </StyledDatePicker>
    )
}