import React from "react";
import { Trans, useTranslation } from 'react-i18next';

import { useSignInContext } from "../../../../../context/SignInProvider";

import { NavButtons } from "../authenticate/NavButtons";

import { Loader } from "../../../../core/Loader";
import { FormInput } from "../../../../base/forms/Input";

import { RegexExp } from "../../../../../constants/RegexExp";

import { progressPrev } from "../../../../../helpers/container/content/SignUp";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.errorMessage
 *  @param   {boolean} oProperties.showLoader
 *  @param   {function} oProperties.onSignIn
 *  @returns {JSX.Element} User */
export const User = ({ errorMessage, showLoader, onSignIn }) => {
    /** @desc Get context properties for handling signing in progress */
    const { values, progress, properties, onProgressBack, onAddValue } = useSignInContext();

    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep2 = (oEvt) => {
        oEvt.preventDefault();
        progressPrev(onProgressBack, "user", _isPatternMatching(), "school");
    }

    /** @private
     *  @param {Event<HTMLInputElement>} oEvt */
    const _onChange = (oEvt) => {
        values.userPatternMatches[oEvt.target.name] = new RegExp(RegexExp(oEvt.target.name)).test(oEvt.target.value)
        onAddValue(oEvt.target.name, oEvt.target.value);
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.userPatternMatches.username && values.userPatternMatches.password;

    return (
        <fieldset className={progress.find(({ id }) => id === "user").isActive ? "active" : String()}>
            <h1>{t('Container.Content.SignIn.User.title')}</h1>
            <p>{<Trans i18nKey="Container.Content.SignIn.User.description" />}</p>
            {properties["user"].map((oInput) => (
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
                callbackPrev={_onClickStep2}
                showNext={true}
                callbackNext={onSignIn}
                textNext={t('Container.Content.SignIn.User.nextButtonText')}
                rightIconNext="faRightToBracket"
                isNextDisabled={_isPatternMatching()}/>
        </fieldset>
    )
};