import React from 'react';

import { StyledStatus } from '../../../../styles/base/table/template/Status.styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaSolidIcons from "@fortawesome/pro-solid-svg-icons";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.title
 *  @param   {string=} oProperties.icon
 *  @param   {string} oProperties.borderColor
 *  @param   {string} oProperties.backgroundColor
 *  @returns {JSX.Element} Status */
export const Status = (oProperties) => (
    <StyledStatus style={{ background: `${oProperties.backgroundColor}`, border: `1px solid ${oProperties.borderColor}`}}>
        <FontAwesomeIcon icon={FaSolidIcons[`${oProperties?.icon ? oProperties.icon : "faTags"}`]} />
        <span>{oProperties.title}</span>
    </StyledStatus>
);