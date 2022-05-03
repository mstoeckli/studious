import React from 'react';

import { StyledIdentifier } from '../../../../styles/base/table/template/Identifier.styles';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.title
 *  @param   {string} oProperties.description
 *  @returns {JSX.Element} Identifier */
export const Identifier = (oProperties) => (
    <StyledIdentifier>
        <h4>{oProperties.title}</h4>
        <span>{oProperties.description}</span>
    </StyledIdentifier>
);