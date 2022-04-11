import React from 'react';

import { StyledNavbarGroup } from '../../../styles/base/nav/NavbarGroup.styles'

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {JSX.Element} oProperties.children
 *  @returns {JSX.Element} NavbarGroup */
export const NavbarGroup = (oProperties) => (
    <StyledNavbarGroup>
        {oProperties.children}
    </StyledNavbarGroup>
)