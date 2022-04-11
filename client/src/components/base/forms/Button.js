import React from "react";

import { StyledButton } from '../../../styles/base/forms/Button.styles';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {boolean} oProperties.disabled
 *  @param   {string} oProperties.text
 *  @param   {function} oProperties.onClick
 *  @returns {JSX.Element} FormButton */
export const FormButton = (oProperties) => (
    <StyledButton
        onClick={(oEvt) => {
            oEvt.preventDefault();
            oProperties.onClick(oEvt)
        }}
        disabled={oProperties.disabled}>
        <span>{oProperties.text}</span>
    </StyledButton>
)