import React from 'react';

import { StyledDatePicker } from '../../styles/base/DatePicker.styles';

import { getDaysOfMonth, getCurrentDate, getFirstDay, getLastDay, getPreviousDay, getRemainingDaysOfWeek } from '../../helpers/base/Calendar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';
import * as FaSolidIcons from '@fortawesome/pro-solid-svg-icons';

/** @public
 *  @constructor
 *  @returns {JSX.Element} Datepicker */
export const DatePicker = () => {

    const _addDays = (iMonth = getCurrentDate().getMonth(), iYear = getCurrentDate().getFullYear()) => {
        /** @desc 0 = Sunday; 1 = Monday; ... 6 = Saturday */


        const aPrevDays = [];
        const aDays = [];
        const aNextDays = [];

        for (let i = getDaysOfMonth(iYear)[iMonth - 1]; i > getDaysOfMonth(iYear)[iMonth - 1] - getRemainingDaysOfWeek(getFirstDay(iMonth, iYear)); i--) {
            aPrevDays.unshift(<span className="prev">{i}</span>);
        }

        for (let i = getDaysOfMonth(iYear)[iMonth]; i > 0; i--) {
            aDays.unshift(<span>{i}</span>);
        }

        // for (let i = 1; i < getRemainingDaysOfWeek(getFirstDay(iMonth, iYear)); i++) {
        //     aNextDays.push(<span>{i}</span>);
        // }



        const b = getDaysOfMonth(iYear)[iMonth];



        const c = getDaysOfMonth(iYear)[iMonth] + getFirstDay(iMonth, iYear);

        // for (let i = 0; i <=)


        // for (let i = 0; i <= getDaysOfMonth(iYear)[iMonth] + getFirstDay(iMonth, iYear) - 1; i++) {
        //     debugger;
        //
        //     debugger
        // }

        return [...aPrevDays, ...aDays, ...aNextDays];
    }

    return (
        <StyledDatePicker>
            <div className="calendar">
                <header>
                    <div className="calendar-nav">
                        <FontAwesomeIcon icon={FaSolidIcons["faAngleLeft"]} />
                    </div>
                    <div className="calendar-buttons">
                        <button>
                            <span>September</span>
                        </button>
                        <button>
                            <span>2022</span>
                        </button>
                        <button>
                            <span>Heute</span>
                        </button>
                    </div>
                    <div className="calendar-nav">
                        <FontAwesomeIcon icon={FaSolidIcons["faAngleRight"]} />
                    </div>
                </header>
                <article>
                    <div className="calendar-week">
                        <span>MO</span>
                        <span>DI</span>
                        <span>MI</span>
                        <span>DO</span>
                        <span>FR</span>
                        <span>SA</span>
                        <span>SO</span>
                    </div>
                    <div className="calendar-days">
                        {_addDays()}
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