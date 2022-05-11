import React, { useState } from 'react';

import { StyledDialog } from '../../../styles/base/messages/Dialog.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/pro-solid-svg-icons';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.title
 *  @param   {string} oProperties.description
 *  @param   {string=} oProperties.messageType -> Success/Warning/Error/Information
 *  @param   {boolean=} oProperties.showSupport
 *  @returns {JSX.Element} Dialog */
export const Dialog = (oProperties) => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Updates visibility of modal dialog by attribute "display"
     *  @type {[state:string, setState:function]} */
    const [ state, setState ] = useState("flex")

    /** @private */
    const _onClose = () => setState("none");

    /** @private
     *  @param   {string} sMessageType
     *  @returns {string} */
    const _getIconColorByMessageType = (sMessageType) => ({
        S: "var(--color-completed)",
        W: "var(--color-warning)",
        E: "var(--color-error)"
    })[sMessageType];

    /** @private
     *  @param   {string} sMessageType
     *  @returns {string} */
    const _getIconByMessageType = (sMessageType) => ({
        S: "faCheckDouble",
        W: "faLightEmergencyOn",
        E: "faBug",
        I: "faInfo"
    })[sMessageType];

    return (
        <StyledDialog
            state={state}
            messageTypeColor={_getIconColorByMessageType(oProperties?.messageType ? oProperties.messageType : "S")}>
            <FontAwesomeIcon
                className="close"
                icon={FaSolidIcons["faClose"]}
                onClick={_onClose}/>
            <FontAwesomeIcon
                className="customIcon"
                icon={FaDuotoneIcons[_getIconByMessageType(oProperties?.messageType ? oProperties.messageType : "S")]} />
            <h4>{oProperties.title}</h4>
            <span>{oProperties.description}</span>
            {oProperties.showSupport && <button className="support">
                <FontAwesomeIcon icon={FaDuotoneIcons["faHandsHelping"]} />
                <span>Support</span>
            </button>}
        </StyledDialog>
    )
}