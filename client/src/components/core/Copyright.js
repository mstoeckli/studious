import React from "react";

/** @styles */
import { StyledCopyright } from '../../styles/core/Copyright.styles';

/** @public
 *  @constructor
 *  @returns {JSX.Element} Copyright */
export const Copyright = () => <StyledCopyright>© {new Date().getFullYear()} Codemize. All rights reserved.</StyledCopyright>;