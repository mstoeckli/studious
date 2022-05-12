import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";

import { NavButtons } from '../authenticate/NavButtons';

import { FormInput } from '../../../../base/forms/Input';

import { RegexExp } from '../../../../../constants/RegexExp';

import { useSignInContext } from '../../../../../context/SignInProvider';

import { progressNext } from "../../../../../helpers/container/content/SignUp";

/** @public
 *  @constructor
 *  @returns {JSX.Element} School */
export const School = () => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressNext } = useSignInContext();

    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Get custom routing parameter */
    const { state } = useLocation();

    /** @desc Call started through navigation from another site */
    if (state && Object.keys(state).length > 0 && state.constructor === Object && state.hasOwnProperty("schoolKey")) {
        values.schoolKey = state.schoolKey
    }

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep2 = (oEvt) => {
        oEvt.preventDefault();
        progressNext(onProgressNext, "school", _isPatternMatching(), "user");
    }

    /** @private
     *  @param {Event<HTMLInputElement>} oEvt */
    const _onChange = (oEvt) => {
        /** @desc Update reducer values */
        values.schoolPatternMatches[oEvt.target.name] = new RegExp(RegexExp(oEvt.target.name)).test(oEvt.target.value)
        onAddValue(oEvt.target.name, oEvt.target.value);

        /** @desc Event is called through custom event inside "Input.js" */
        if (state && Object.keys(state).length > 0 && state.constructor === Object && state.hasOwnProperty("schoolKey")) {
            progressNext(onProgressNext, "school", _isPatternMatching(), "user");
        }
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.schoolPatternMatches.schoolKey

    return (
        <fieldset className={progress.find(({ id }) => id === "school").isActive ? "active" : String()}>
            <h1>{t('Container.Content.SignIn.School.title')}</h1>
            <p>{<Trans i18nKey="Container.Content.SignIn.School.description" />}</p>
            {properties["school"].map((oInput) => (
                <FormInput
                    {...oInput}
                    value={values[oInput.name]}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            <NavButtons
                showNext={true}
                callbackNext={_onClickStep2}
                isNextDisabled={_isPatternMatching()}/>
        </fieldset>
    )
};