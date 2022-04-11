import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutside } from '../../../hooks/ClickOutside';

import { StyledDropdown } from '../../../styles/base/dropdown/Dropdown.styles';

import { DropdownItem } from './DropdownItem';

import { DropdownItems } from '../../../models/base/dropdown/DropdownItems';

import { useAuth } from '../../../context/AuthProvider';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from "@fortawesome/pro-duotone-svg-icons";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.modelObj
 *  @param   {string=} oProperties.float
 *  @param   {string=} oProperties.icon
 *  @param   {boolean=} oProperties.showIcon
 *  @param   {boolean=} oProperties.isActive
 *  @param   {function=} oProperties.isClickedOutside
 *  @param   {function=} oProperties.onListItemClick
 *  @param   {JSX.Element=} oProperties.jsxElement
 *  @returns {JSX.Element} Dropdown */
export const Dropdown = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Get user object to check if user is signed in */
    const { user } = useAuth();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Handle showing and hiding of dropdown component
     *  @type {[isActive:boolean, setIsActive:function]} */
    const [ isActive, setIsActive ] = useState(false);

    /** @desc Create a reference object to the dropdown element for adding as dependencies to the hook "useEffect" inside
     *        custom hook "useClickOutside" */
    const dropdownChildrenRef = useRef(null);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => setIsActive((isActive) => oProperties.isActive), [oProperties.isActive]);

    /** @private
     *  @desc Handle icon click of a dropdown for showing and hiding component */
    const _onIconClick = () => setIsActive((isActive) => !isActive);

    /** @desc Initialize custom hook for handling the outside click of a dropdown element */
    useClickOutside(dropdownChildrenRef, () => {
        if (isActive) {
            /** @desc Call custom function to handle when clicking outside -> Used when NavbarItem.js element is used with their own icon and state object */
            if (typeof oProperties.isClickedOutside === "function") {
                if (oProperties.isClickedOutside()) {
                    return;
                }
            } setIsActive((isActive) => !isActive);
        }
    });

    /** @private
     *  @param   {object} oConfigItem
     *  @param   {string} oConfigItem.icon
     *  @param   {string} oConfigItem.iconColor
     *  @param   {string=} oConfigItem.title
     *  @param   {string=} oConfigItem.routerLink
     *  @param   {boolean} oConfigItem.isPublic
     *  @param   {boolean} oConfigItem.isPrivate
     *  @param   {function=} oConfigItem.onListItemClick
     *  @returns {JSX.Element} */
    const _addDropdownItem = (oConfigItem) => (
        <DropdownItem
            icon={oConfigItem.icon}
            iconColor={oConfigItem.iconColor}
            title={oConfigItem.hasOwnProperty("title") ? t(`${oConfigItem.title}`) : user.email}
            routerLink={oConfigItem?.routerLink}
            onClick={oProperties.onListItemClick}/>
    );

    return (
        <StyledDropdown>
            {oProperties.showIcon && <FontAwesomeIcon
                onClick={_onIconClick}
                className={`dropdown-icon-custom ${isActive ? "active" : String()}`}
                icon={FaDuotoneIcons[oProperties.hasOwnProperty("icon") ? oProperties.icon : "faEllipsisV"]}>
            </FontAwesomeIcon>}
            <div
                ref={dropdownChildrenRef}
                className={`dropdown-menu-container dropdown-menu-container-custom ${oProperties.float ? oProperties.float : "right"} ${isActive ? "active" : String()}`}>
                {oProperties.hasOwnProperty("jsxElement")
                    ? oProperties.jsxElement
                    : <ul>{DropdownItems[oProperties.modelObj].map((oConfigItem) => {
                        if (user) return oConfigItem.isPrivate ? _addDropdownItem(oConfigItem) : false;
                        else return oConfigItem.isPublic ? _addDropdownItem(oConfigItem) : false;
                    })}</ul>}
            </div>
        </StyledDropdown>
    )
}