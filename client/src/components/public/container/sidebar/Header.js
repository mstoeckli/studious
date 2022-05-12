import React from 'react';

import { StyledHeader } from '../../../../styles/public/container/sidebar/Header.styles';

import { Logo } from "../../../base/Logo";
import { MadeInSwitzerland } from '../../../core/MadeInSwitzerland';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {boolean} oProperties.bSidebarToggle
 *  @returns {JSX.Element} Header */
export const Header = ({ bSidebarToggle }) => (
    <StyledHeader>
        <div className="logo">
            <Logo />
        </div>
        <div className={!bSidebarToggle ? "company" : "company-hide"}>
            <span className="studious">studious</span>
            <MadeInSwitzerland />
        </div>
    </StyledHeader>
)