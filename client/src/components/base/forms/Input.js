import React, { useState, useEffect, useRef } from "react";

import { StyledInput } from '../../../styles/base/forms/Input.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons'

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.label
 *  @param   {string} oProperties.message
 *  @param   {string} oProperties.icon
 *  @param   {function} oProperties.fnChange
 *  @param   {object} oProperties.inputProps
 *  @returns {JSX.Element} FormInput */
export const FormInput = ({ label, message, icon, fnChange = () => {}, ...inputProps }) => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update the focus for an input field to handle validations
     *  @type {[open:boolean, setOpen:function]} */
    const [ focused, setFocused ] = useState(false);

    /** @desc Initialize reference object for input field */
    const inputRef = useRef(null);

    useEffect(() => {
        /** @desc Initialize callback function for event listener */
        const _fnChange = (oEvt) => fnChange(oEvt);

        if (inputProps.value) {
            /** @desc Initialize event listener for change handler to call it manually when a value is transferred */
            inputRef.current.addEventListener("change", _fnChange);
            const oEvt = new Event("change");
            inputRef.current.dispatchEvent(oEvt);
        }

        return () => {
            if (inputRef && inputRef?.current) {
                /** @desc Remove event listener after useEffect is called */
                inputRef.current.removeEventListener("change", _fnChange);
            }
        }
    }, [inputProps.value]);

    /** @private */
    const _onBlur = () => setFocused(true);

    return (
        <StyledInput>
            <label className={inputProps.required ? "required" : String()}>{label}</label>
            <input
                ref={inputRef}
                {...inputProps}
                onChange={fnChange}
                onBlur={_onBlur}
                focused={focused.toString()}/>
            <FontAwesomeIcon icon={FaDuotoneIcons[icon]} />
            <span>{message}</span>
        </StyledInput>
    )
}