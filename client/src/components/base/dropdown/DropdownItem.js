import React from 'react';
import { Link } from "react-router-dom";

import { StyledDropdownItem } from '../../../styles/base/dropdown/DropdownItem.styles'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.icon
 *  @param   {string=} oProperties.iconColor
 *  @param   {string} oProperties.title
 *  @param   {string=} oProperties.routerLink
 *  @param   {function=} oProperties.onClick
 *  @param   {boolean=} oProperties.isSeparator
 *  @returns {JSX.Element} DropdownItem */
export const DropdownItem = (oProperties) => (
    <StyledDropdownItem
        height={oProperties.isSeparator ? "1px" : "32px"}
        padding={oProperties.isSeparator ? "2px 8px" : "4px 8px"}
        marginBottom={oProperties.isSeparator ? "4px" : "0"}
        borderRadius={oProperties.isSeparator ? "0" : "5px"}
        borderBottom={oProperties.isSeparator ? "1px solid var(--color-input-border)" : "none"}
        onClick={oProperties?.onClick}>
        {<FontAwesomeIcon
            style={oProperties.hasOwnProperty("iconColor") ? { color: `${oProperties.iconColor}` } : {}}
            icon={FaDuotoneIcons[oProperties.icon]} />}
        {oProperties.routerLink ? <Link to={`/${oProperties.routerLink}`}>{oProperties.title}</Link> : <span>{oProperties.title}</span>}
    </StyledDropdownItem>
);