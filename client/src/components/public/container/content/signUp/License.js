import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { NavButtons } from '../authenticate/NavButtons';

import { Loader } from '../../../../core/Loader';
import { FormInput } from '../../../../base/forms/Input';

import { RegexExp } from '../../../../../constants/RegexExp';

import { useSignUpContext } from '../../../../../context/SignUpProvider';

import { progressPrev } from "../../../../../helpers/container/content/SignUp";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.errorMessage
 *  @param   {boolean} oProperties.showLoader
 *  @param   {function} oProperties.onSignUp
 *  @returns {JSX.Element} License */
export const License = ({ errorMessage, showLoader, onSignUp }) => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressBack, onProgressNext } = useSignUpContext();

    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep4 = (oEvt) => {
        oEvt.preventDefault();
        progressPrev(onProgressBack, "license", _isPatternMatching(), "school");
    }

    /** @private
     *  @param {Event<HTMLInputElement>} oEvt */
    const _onChange = (oEvt) => {
        values.licensePatternMatches[oEvt.target.name] = oEvt.target.value > 0
        return onAddValue(oEvt.target.name, parseInt(oEvt.target.value));
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.licensePatternMatches.classTeacher && values.licensePatternMatches.students

    return (
        <fieldset className={progress.find(({ id }) => id === "license").isActive ? "active" : String()}>
            <h1>{t('Container.Content.SignUp.License.title')}</h1>
            <p>{<Trans i18nKey="Container.Content.SignUp.License.description" />}</p>
            {properties["license"].map((oInput) => (
                <FormInput
                    {...oInput}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            <span className={errorMessage === String() ? "error error-none" : "error error-block"}>
                {errorMessage}
            </span>
            {showLoader && <Loader />}
            <NavButtons
                showPrev={true}
                callbackPrev={_onClickStep4}
                showNext={true}
                callbackNext={onSignUp}
                isNextDisabled={_isPatternMatching()}
                textNext={t("Container.Content.SignUp.License.navButtonTextNext")}
                rightIconNext="faFlagCheckered"/>
        </fieldset>
    )
};