import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { StyledHeader } from '../../../styles/public/container/Header.styles';

import { setActivityClass, isClickedOutside } from '../../../reducers/public/ContainerNav';

import { NavbarGroup } from '../../base/nav/NavbarGroup';
import { NavbarItem } from '../../base/nav/NavbarItem';
import { Dropdown } from '../../base/dropdown/Dropdown';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {function} oProperties.onClick
 *  @returns {JSX.Element} Header */
export const Header = ({ onClick }) => {
    /** @desc Returns global state value by redux toolkit
     *  @type {array} aContainerNav */
    const aContainerNav = useSelector((state) => state.containerNav.value);

    /** @desc Returns dispatcher function to call the actions inside the reducer
     *  @type {React.Dispatch} fnDispatch */
    const fnDispatch = useDispatch();

    /** @desc In a suspense-enabled app, the navigate function is aware of when your app is suspending.
     *        -> Used for changing the content after clicking element in the sidebar */
    const oNavigate = useNavigate();

    /** @private
     *  @param {number} iKey
     *  @param {boolean} bIsActive */
    const _onClickOutside = (iKey, bIsActive) => {
        if (bIsActive) {
            /** @desc Calls dispatcher function which handles the show/hide property of a dropdown when clicked outside */
            fnDispatch(isClickedOutside({
                key: iKey,
                isActive: !bIsActive
            }));
        }
    };

    /** @private
     *  @param   {number} iKey
     *  @param   {boolean} bIsActive
     *  @returns {JSX.Element}*/
    const _addNavbarItemChildrenDropdown = (iKey, bIsActive) => ({
        16: _addDropdownElement(iKey, bIsActive)
    })[iKey];

    /** @private
     *  @param   {number} iKey
     *  @param   {boolean} bIsActive
     *  @returns {JSX.Element}*/
    const _addDropdownElement = (iKey, bIsActive) => (
        <Dropdown
            modelObj="ContainerNavConfig"
            isActive={bIsActive}
            isClickedOutside={() => _onClickOutside(iKey, bIsActive)}
            onListItemClick={async () => {

            }} />
    )

    return (
        <StyledHeader>
            <nav>
                {aContainerNav.map((oNavbarGroup) => (
                    <NavbarGroup>
                        {oNavbarGroup.hasNavbarItem ? oNavbarGroup.navbarItem.map((oNavbarItem) => (
                            <NavbarItem
                                {...oNavbarItem}
                                onClick={(oEvt) => {
                                    onClick(oEvt);
                                    fnDispatch(setActivityClass(oNavbarItem.key))
                                }}>
                                {oNavbarItem.hasDropdown
                                    /** @desc If dropdown is defined in models object the menu will be displayed after clicking the icon with event "onClick" */
                                    ? _addNavbarItemChildrenDropdown(oNavbarItem.key, oNavbarItem.isActive)
                                    : undefined }
                            </NavbarItem>
                        )) : undefined}
                    </NavbarGroup>
                ))}
            </nav>
        </StyledHeader>
    )
}