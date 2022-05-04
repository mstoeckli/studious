import React from 'react';

import { StyledButton } from '../../../../styles/base/table/template/Button.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.text
 *  @param   {string=} oProperties.icon
 *  @returns {JSX.Element} Button */
export const Button = (oProperties) => (
    <StyledButton>
        {oProperties?.icon && <FontAwesomeIcon icon={FaDuotoneIcons[`${oProperties.icon}`]} />}
        <span>{oProperties.text}</span>
    </StyledButton>
);