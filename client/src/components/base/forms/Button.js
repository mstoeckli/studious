import React from "react";

import { StyledButton } from '../../../styles/base/forms/Button.styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaSolidIcons from "@fortawesome/pro-solid-svg-icons";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {boolean} oProperties.disabled
 *  @param   {string} oProperties.text
 *  @param   {boolean=} oProperties.showLeftIcon
 *  @param   {boolean=} oProperties.showRightIcon
 *  @param   {string=} oProperties.leftIcon
 *  @param   {string=} oProperties.rightIcon
 *  @param   {function} oProperties.onClick
 *  @returns {JSX.Element} FormButton */
export const FormButton = (oProperties) => (
    <StyledButton
        onClick={(oEvt) => {
            oEvt.preventDefault();
            oProperties.onClick(oEvt)
        }}
        disabled={oProperties.disabled}>
        {oProperties.showLeftIcon && <FontAwesomeIcon icon={FaSolidIcons[`${oProperties?.leftIcon ? oProperties.leftIcon : "faLeft"}`]} />}
        <span>{oProperties.text}</span>
        {oProperties.showRightIcon && <FontAwesomeIcon icon={FaSolidIcons[`${oProperties?.rightIcon ? oProperties.rightIcon : "faRight"}`]} />}
    </StyledButton>
)