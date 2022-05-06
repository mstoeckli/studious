import React from "react";

import { StyledCheckbox } from '../../../styles/base/forms/Checkbox.styles';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {function} oProperties.onClick
 *  @returns {JSX.Element} FormCheckbox */
export const FormCheckbox = (oProperties) => (
    <StyledCheckbox
        type="checkbox"
        onClick={oProperties.onClick}>
    </StyledCheckbox>
)