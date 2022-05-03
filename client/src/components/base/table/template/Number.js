import React from 'react';

import { StyledNumber } from '../../../../styles/base/table/template/Number.styles';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {number} oProperties.numberValue
 *  @returns {JSX.Element} Number */
export const Number = (oProperties) => (
    <StyledNumber>
        {oProperties.numberValue}
    </StyledNumber>
);