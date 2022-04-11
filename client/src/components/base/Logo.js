import React from 'react';

import { StyledLogo } from '../../styles/base/Logo.styles';

import LogoSrc from '../../assets/pictures/Logo.png';

/** @public
 *  @constructor
 *  @returns {JSX.Element} Logo */
export const Logo = () => <StyledLogo src={LogoSrc} alt="ScrapeCodeLogo" />