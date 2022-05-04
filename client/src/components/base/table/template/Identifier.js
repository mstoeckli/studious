import React from 'react';

import { StyledIdentifier } from '../../../../styles/base/table/template/Identifier.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.title
 *  @param   {string} oProperties.description
 *  @param   {string=} oProperties.icon
 *  @returns {JSX.Element} Identifier */
export const Identifier = (oProperties) => (
    <StyledIdentifier>
        {oProperties?.icon && <FontAwesomeIcon icon={FaDuotoneIcons[oProperties.icon]} />}
        <div>
            <h4>{oProperties.title}</h4>
            <span>{oProperties.description}</span>
        </div>
    </StyledIdentifier>
);