import React from 'react';

import { StyledIcon } from '../../../../styles/base/table/template/Icon.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.iconSrc
 *  @param   {function} oProperties.onClick
 *  @returns {JSX.Element} Icon */
export const Icon = (oProperties) => (
    <StyledIcon>
        <FontAwesomeIcon
            icon={FaDuotoneIcons[`${oProperties.iconSrc}`]}
            onClick={oProperties.onClick}/>
    </StyledIcon>
);