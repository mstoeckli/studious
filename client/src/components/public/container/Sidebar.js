import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { StyledSidebar } from '../../../styles/public/container/Sidebar.styles';

import { setActivityClass } from '../../../reducers/public/container/SidebarNav';

import { Header } from './sidebar/Header';

import { PrefixId } from '../../../constants/PrefixComponent';

import { useAuth } from '../../../context/AuthProvider';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {function} oProperties.onNavMenuClick
 *  @param   {boolean} oProperties.bSidebarToggle - false => Closed / true => Open
 *  @returns {JSX.Element} Sidebar */
export const Sidebar = (({ onNavMenuClick, bSidebarToggle }) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Returns global state value by redux toolkit
     *  @type {array} aSidebarNav */
    const aSidebarNav = useSelector((state) => state.sidebarNav.value);

    /** @desc Returns dispatcher function to call the actions inside the reducer
     *  @type {React.Dispatch} fnDispatch */
    const fnDispatch = useDispatch();

    /** @desc Get user object to check if user is signed in */
    const { user } = useAuth();

    /** @private
     *  @param   {MouseEvent<HTMLLIElement>} oEvt
     *  @param   {object} oNavMenu
     *  @param   {number} oNavMenu.key
     *  @param   {number} oNavMenu.keyGroup
     *  @param   {string} oNavMenu.title
     *  @param   {string} oNavMenu.icon
     *  @param   {boolean} oNavMenu.isActive
     *  @param   {string=} oNavMenu.contentKey
     *  @returns {JSX.Element} */
    const _onClick = (oEvt, oNavMenu) => {
        /** @desc Calls reducer function for handling the activity of a list item */
        fnDispatch(setActivityClass(oNavMenu));

        /** @desc Calls callback function inside component "Container.js" for updating the component "Content.js" */
        onNavMenuClick(oNavMenu.contentKey);
    }

    /** @private
     *  @param   {string} sContentKey
     *  @returns {JSX.Element} */
    const _getHtmlContentByKey = (sContentKey) => ({
        // "onboarding": _addOnboardingContent()
    })[sContentKey]

    /** @private
     *  @param   {object} oGroup
     *  @param   {number} oGroup.key
     *  @param   {string} oGroup.title
     *  @param   {boolean} oGroup.hasNavMenu
     *  @param   {boolean} oGroup.isOpen
     *  @param   {boolean} oGroup.isPrivate
     *  @param   {array=} oGroup.navMenu
     *  @returns {JSX.Element} */
    const _addGroups = (oGroup) => (
        <div className="group">
            <span className={!bSidebarToggle ? "show" : "hide"}>{t(oGroup.title)}</span>
            <ul
                key={`${PrefixId("sidebar", oGroup.key)}`}
                className={oGroup.isOpen ? "group-open" : "group-close"}>
                {oGroup.hasNavMenu
                    ? oGroup.navMenu.map((oNavMenu) => _addNavMenu(oNavMenu))
                    : _getHtmlContentByKey(oGroup["htmlContentKey"])}
            </ul>
        </div>
    );

    /** @private
     *  @param   {object} oNavMenu
     *  @param   {number} oNavMenu.key
     *  @param   {number} oNavMenu.keyGroup
     *  @param   {string} oNavMenu.title
     *  @param   {string} oNavMenu.icon
     *  @param   {boolean} oNavMenu.isActive
     *  @param   {string=} oNavMenu.contentKey
     *  @returns {JSX.Element} */
    const _addNavMenu = (oNavMenu) => (
        <li
            key={`${PrefixId("sidebar", oNavMenu.key)}`}
            className={oNavMenu.isActive ? "active" : String()}
            onClick={(oEvt) => _onClick(oEvt, oNavMenu)}>
            <FontAwesomeIcon icon={FaDuotoneIcons[oNavMenu.icon]} />
            <span className={!bSidebarToggle ? "show" : "hide"}>{t(oNavMenu.title)}</span>
        </li>
    );

    /** @private
     *  @returns {JSX.Element} */
    const _addOnboardingContent = () => (
        <div className={bSidebarToggle ? "onboarding-content onboarding-content-project-hide" : "onboarding-content onboarding-content-project"}>
            <FontAwesomeIcon icon={FaDuotoneIcons["faLayerGroupPlus"]} />
            <div><span className="project-title">{t('Container.Sidebar.Onboarding.Project.title')}</span></div>
            <div><span className="project-description">{t('Container.Sidebar.Onboarding.Project.description')}</span></div>
        </div>
    )

    return (
        <StyledSidebar style={bSidebarToggle ? { width: "75px" } : { width: "250px" }}>
            <Header bSidebarToggle={bSidebarToggle}/>
            <menu>
                {aSidebarNav.map((oGroup) => {
                    if (oGroup.isPrivate) {
                        return user ? _addGroups(oGroup) : false;
                    } return _addGroups(oGroup);
                })}
            </menu>
        </StyledSidebar>
    )
});