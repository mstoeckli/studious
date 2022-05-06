import React from 'react';

import { StyledText } from '../../../../styles/base/table/template/Text.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.iconSrc
 *  @param   {string} oProperties.text
 *  @returns {JSX.Element} Text */
export const Text = (oProperties) => (
    <StyledText>
        {oProperties?.iconSrc && <FontAwesomeIcon icon={FaDuotoneIcons[oProperties.iconSrc]} />}
        <span>{oProperties.text}</span>
    </StyledText>
);