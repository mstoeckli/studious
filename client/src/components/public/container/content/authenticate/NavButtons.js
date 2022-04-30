import React from 'react';
import { useTranslation } from 'react-i18next';

import { FormButton } from "../../../../base/forms/Button";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {boolean=} oProperties.showPrev
 *  @param   {function} oProperties.callbackPrev
 *  @param   {boolean=} oProperties.showNext
 *  @param   {function} oProperties.callbackNext
 *  @param   {string=} oProperties.textNext
 *  @param   {string=} oProperties.rightIconNext
 *  @param   {boolean} oProperties.isNextDisabled
 *  @returns {JSX.Element} NavButtons */
export const NavButtons = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    return (
        <div className="nav-buttons">
            {oProperties.showPrev && <FormButton
                className="back"
                text={t("Base.back")}
                showLeftIcon={true}
                onClick={oProperties.callbackPrev}/>}
            {oProperties.showNext && <FormButton
                className={oProperties.isNextDisabled ? "next" : "next-disabled"}
                text={oProperties.textNext ? oProperties.textNext : t("Base.next")}
                rightIcon={oProperties.rightIconNext ? oProperties.rightIconNext : "faRight"}
                showRightIcon={true}
                disabled={!(oProperties.isNextDisabled)}
                onClick={oProperties.callbackNext}/>}
        </div>
    );
}