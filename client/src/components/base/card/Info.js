import React from 'react';

import { StyledCardInfo } from '../../../styles/base/card/Info.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.icon
 *  @param   {string} oProperties.title
 *  @param   {string} oProperties.info
 *  @param   {string=} oProperties.backgroundColor
 *  @param   {string=} oProperties.borderColor
 *  @returns {JSX.Element} CardInfo */
export const CardInfo = (oProperties) => {
    return (
        <StyledCardInfo
            backgroundColor={oProperties.backgroundColor}
            borderColor={oProperties.borderColor}>
            <FontAwesomeIcon icon={FaDuotoneIcons[oProperties.icon]} />
            <div>
                <h4>{oProperties.title}</h4>
                <span>{oProperties.info}</span>
            </div>
        </StyledCardInfo>
    )
}