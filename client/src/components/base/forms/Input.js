import React, { useState } from "react";

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
export const FormInput = ({ label, message, icon, fnChange, ...inputProps }) => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update the focus for an input field to handle validations
     *  @type {[open:boolean, setOpen:function]} */
    const [ focused, setFocused ] = useState(false);

    /** @private */
    const _onBlur = () => setFocused(true);

    return (
        <StyledInput>
            <label className={inputProps.required ? "required" : String()}>{label}</label>
            <input
                {...inputProps}
                onChange={fnChange}
                onBlur={_onBlur}
                focused={focused.toString()}/>
            <FontAwesomeIcon icon={FaDuotoneIcons[icon]} />
            <span>{message}</span>
        </StyledInput>
    )
}