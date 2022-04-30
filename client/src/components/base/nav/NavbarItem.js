import React from 'react';

import { StyledNavbarItem } from '../../../styles/base/nav/NavbarItem.styles'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.icon
 *  @param   {function} oProperties.onClick
 *  @param   {boolean} oProperties.isActive
 *  @param   {boolean} oProperties.hasDropdown
 *  @param   {object} oProperties.dropdownMenu
 *  @param   {string} oProperties.dropdownMenu.style
 *  @param   {JSX.Element} oProperties.children
 *  @returns {JSX.Element} NavbarItem */
export const NavbarItem = (oProperties) => {
    /** @private
     *  @param   {object} oProperties
     *  @param   {string} oProperties.icon
     *  @param   {function} oProperties.onClick
     *  @param   {boolean} oProperties.isActive
     *  @param   {boolean} oProperties.hasDropdown
     *  @param   {object} oProperties.dropdownMenu
     *  @param   {JSX.Element} oProperties.children
     *  @returns {JSX.Element} */
    const _addNavIconElement = (oProperties) => (
        <div>
            <FontAwesomeIcon
                className={oProperties.isActive ? "active" : String()}
                icon={FaDuotoneIcons[oProperties.icon]}
                onClick={(oEvt) => oProperties.onClick(oEvt)}>
            </FontAwesomeIcon>
            {oProperties.children}
        </div>
    );

    return (
        <StyledNavbarItem>
            {_addNavIconElement(oProperties)}
        </StyledNavbarItem>
    )
}