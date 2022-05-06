import React from 'react';

import { StyledStatus } from '../../../../styles/base/table/template/Status.styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaSolidIcons from "@fortawesome/pro-solid-svg-icons";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.text
 *  @param   {string=} oProperties.iconSrc
 *  @param   {string} oProperties.borderColor
 *  @param   {string} oProperties.backgroundColor
 *  @param   {function=} oProperties.onClick
 *  @returns {JSX.Element} Status */
export const Status = (oProperties) => (
    <StyledStatus
        style={{ background: `${oProperties.backgroundColor}`, border: `1px solid ${oProperties.borderColor}`}}
        onClick={oProperties?.onClick ? oProperties.onClick : () => {}}>
        <FontAwesomeIcon icon={FaSolidIcons[`${oProperties?.iconSrc ? oProperties.iconSrc : "faTags"}`]} />
        <span>{oProperties.text}</span>
    </StyledStatus>
);