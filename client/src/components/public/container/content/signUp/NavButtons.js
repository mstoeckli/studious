import React from 'react';

import { FormButton } from "../../../../base/forms/Button";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {boolean} oProperties.isNextDisabled
 *  @param   {function} oProperties.callbackPrev
 *  @param   {function} oProperties.callbackNext
 *  @param   {string=} oProperties.textNext
 *  @param   {string=} oProperties.rightIconNext
 *  @returns {JSX.Element} NavButtons */
export const NavButtons = (oProperties) => (
    <div className="nav-buttons">
        <FormButton
            className="back"
            text="Zurück"
            showLeftIcon={true}
            onClick={oProperties.callbackPrev}/>
        <FormButton
            className={oProperties.isNextDisabled ? "next" : "next-disabled"}
            text={oProperties.textNext ? oProperties.textNext : "Weiter"}
            rightIcon={oProperties.rightIconNext ? oProperties.rightIconNext : "faRight"}
            showRightIcon={true}
            disabled={!(oProperties.isNextDisabled)}
            onClick={oProperties.callbackNext}/>
    </div>
);