import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { NavButtons } from '../authenticate/NavButtons';

import { FormInput } from '../../../../base/forms/Input';

import { RegexExp } from '../../../../../constants/RegexExp';

import { useSignInContext } from '../../../../../context/SignInProvider';

import { progressNext} from "../../../../../helpers/container/content/SignUp";

/** @public
 *  @constructor
 *  @returns {JSX.Element} School */
export const School = () => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressNext } = useSignInContext();

    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep2 = (oEvt) => {
        oEvt.preventDefault();
        progressNext(onProgressNext, "school", _isPatternMatching(), "user");
    }

    /** @private
     *  @param {Event<HTMLInputElement>} oEvt */
    const _onChange = (oEvt) => {
        values.schoolPatternMatches[oEvt.target.name] = new RegExp(RegexExp(oEvt.target.name)).test(oEvt.target.value)
        onAddValue(oEvt.target.name, oEvt.target.value);
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.schoolPatternMatches.schoolKey

    return (
        <fieldset className={progress.find(({ id }) => id === "school").isActive ? "active" : String()}>
            <h1>{t('Container.Content.SignIn.School.title')}</h1>
            <p>{<Trans i18nKey="Container.Content.SignIn.School.description" />}</p>
            {properties["school"].map((oInput) => {
                return (
                    <FormInput
                        {...oInput}
                        value={values[oInput.name]}
                        pattern={RegexExp(oInput.name)}
                        fnChange={_onChange}/>
                )
            })}
            <NavButtons
                showNext={true}
                callbackNext={_onClickStep2}
                isNextDisabled={_isPatternMatching()}/>
        </fieldset>
    )
};