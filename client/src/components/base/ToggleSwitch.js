import React, { useState, useEffect } from "react";

import { StyledToggleSwitch } from '../../styles/base/ToggleSwitch.styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaSolidIcons from "@fortawesome/pro-solid-svg-icons";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.title
 *  @param   {string} oProperties.htmlFor
 *  @param   {string=} oProperties.iconChecked
 *  @param   {string=} oProperties.iconUnchecked
 *  @param   {boolean=} oProperties.checked
 *  @param   {function} oProperties.onChange
 *  @returns {JSX.Element} ToggleSwitch */
export const ToggleSwitch = (oProperties) => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update checked state
     *  @type {[checked:boolean, setChecked:function]} */
    const [ checked, setChecked ] = useState(oProperties.checked);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        /** @desc Used for resetting filter reducer to set the initial state for property checked */
        if (oProperties.checked !== checked) {
            setChecked(oProperties.checked);
        }
    }, [oProperties.checked]);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        if (oProperties.hasOwnProperty("onChange")) {
            oProperties.onChange(checked);
        }
    }, [checked]);

    return (
        <StyledToggleSwitch>
            <input
                id={oProperties.htmlFor}
                type="checkbox"
                checked={checked}
                onChange={() => setChecked((checked) => !checked)}/>
            <label htmlFor={oProperties.htmlFor}>
                <span>
                    <FontAwesomeIcon
                        className="unchecked"
                        icon={FaSolidIcons[`${oProperties.iconUnchecked ? oProperties.iconUnchecked : "faTimes"}`]} />
                    <FontAwesomeIcon
                        className="checked"
                        icon={FaSolidIcons[`${oProperties.iconChecked ? oProperties.iconChecked : "faCheck"}`]} />
                </span>
            </label>
            <span>{oProperties.title}</span>
        </StyledToggleSwitch>
    )
}