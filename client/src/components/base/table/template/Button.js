import React from 'react';

import { StyledButton } from '../../../../styles/base/table/template/Button.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.text
 *  @param   {string=} oProperties.iconSrc
 *  @param   {boolean=} oProperties.disabled
 *  @param   {object=} oProperties.customStyle
 *  @param   {function} oProperties.onClick
 *  @returns {JSX.Element} Button */
export const Button = (oProperties) => (
    <StyledButton
        style={oProperties?.customStyle}
        disabled={oProperties?.disabled}
        onClick={oProperties.onClick}>
        {oProperties?.iconSrc && <FontAwesomeIcon icon={FaDuotoneIcons[`${oProperties.iconSrc}`]} />}
        <span>{oProperties.text}</span>
    </StyledButton>
);