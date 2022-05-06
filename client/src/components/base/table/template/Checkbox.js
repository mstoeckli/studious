import React from 'react';

import { StyledCheckbox } from '../../../../styles/base/table/template/Checkbox.styles';

import { FormCheckbox } from '../../forms/Checkbox';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {function} oProperties.onClick
 *  @returns {JSX.Element} Checkbox */
export const Checkbox = (oProperties) => (
    <StyledCheckbox>
        <FormCheckbox onClick={oProperties.onClick}/>
    </StyledCheckbox>
);