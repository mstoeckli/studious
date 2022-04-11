import React from 'react';

import { StyledDropdownItem } from '../../../styles/base/dropdown/DropdownItem.styles'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';
import {Link} from "react-router-dom";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.icon
 *  @param   {string=} oProperties.iconColor
 *  @param   {string} oProperties.title
 *  @param   {string=} oProperties.routerLink
 *  @param   {function=} oProperties.onClick
 *  @returns {JSX.Element} DropdownItem */
export const DropdownItem = (oProperties) => (
    <StyledDropdownItem
        onClick={oProperties?.onClick}>
        <FontAwesomeIcon
            style={oProperties.hasOwnProperty("iconColor") ? { color: `${oProperties.iconColor}` } : {}}
            icon={FaDuotoneIcons[oProperties.icon]} />
        {oProperties.routerLink ? <Link to={`/${oProperties.routerLink}`}>{oProperties.title}</Link> : <span>{oProperties.title}</span>}
    </StyledDropdownItem>
)