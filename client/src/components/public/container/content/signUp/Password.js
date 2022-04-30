import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { NavButtons } from '../authenticate/NavButtons';

import { FormInput } from '../../../../base/forms/Input';

import { RegexExp } from '../../../../../constants/RegexExp';

import { progressPrev, progressNext } from '../../../../../helpers/container/content/SignUp';

import { useSignUpContext } from '../../../../../context/SignUpProvider';

/** @public
 *  @constructor
 *  @returns {JSX.Element} Password */
export const Password = () => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressBack, onProgressNext } = useSignUpContext();

    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep2 = (oEvt) => {
        oEvt.preventDefault();
        progressPrev(onProgressBack, "password", _isPatternMatching(), "user");
    }

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep4 = (oEvt) => {
        oEvt.preventDefault();
        progressNext(onProgressNext, "password", _isPatternMatching(), "school");
    }

    /** @private
     *  @param {Event<HTMLInputElement>} oEvt */
    const _onChange = (oEvt) => {
        values.securityPatternMatches[oEvt.target.name] = new RegExp(RegexExp(oEvt.target.name)).test(oEvt.target.value)
        return onAddValue(oEvt.target.name, oEvt.target.value);
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.securityPatternMatches.password && values.securityPatternMatches.confirmPassword && values.password === values.confirmPassword

    return (
        <fieldset className={progress.find(({ id }) => id === "password").isActive ? "active" : String()}>
            <h1>{t('Container.Content.SignUp.Password.title')}</h1>
            <p>{<Trans i18nKey="Container.Content.SignUp.Password.description" />}</p>
            {properties["password"].map((oInput) => (
                <FormInput
                    {...oInput}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            <NavButtons
                showPrev={true}
                callbackPrev={_onClickStep2}
                showNext={true}
                callbackNext={_onClickStep4}
                isNextDisabled={_isPatternMatching()}/>
        </fieldset>
    )
};