import React from 'react';

import { StyledNumber } from '../../../../styles/base/table/template/Number.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {number} oProperties.numberValue
 *  @param   {number} oProperties.iconSrc
 *  @returns {JSX.Element} Number */
export const Number = (oProperties) => (
    <StyledNumber>
        {oProperties?.iconSrc && <FontAwesomeIcon icon={FaDuotoneIcons[`${oProperties.iconSrc}`]} />}
        <span>{oProperties.numberValue}</span>
    </StyledNumber>
);