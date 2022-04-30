import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { NavButtons } from '../authenticate/NavButtons';

import { FormInput } from "../../../../base/forms/Input";

import { progressPrev, progressNext } from '../../../../../helpers/container/content/SignUp';

import { RegexExp } from '../../../../../constants/RegexExp';

import { useSignUpContext } from '../../../../../context/SignUpProvider';

import { isValidInput } from '../../../../../assets/api/Authentication';

import { debounce } from '../../../../../helpers/Helper';

/** @public
 *  @constructor
 *  @returns {JSX.Element} User */
export const User = () => {
    const SUCCESS_STYLE = "border: 1px solid var(--color-input-border)";
    const ERROR_STYLE = "border: 1px solid var(--color-error)";

    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressBack, onProgressNext } = useSignUpContext();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Check input pattern and value validity for displaying messages
     *  @type {[invalidMessage:{ email:string, username:string}, setInvalidMessage:function]} */
    const [ invalidMessage, setInvalidMessage ] = useState({
        email: String(),
        username: String()
    });

    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep1 = (oEvt) => {
        oEvt.preventDefault();
        progressPrev(onProgressBack, "user", _isPatternMatching(), "provider");
    }

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep3 = (oEvt) => {
        oEvt.preventDefault();
        progressNext(onProgressNext, "user", _isPatternMatching(), "password");
    }

    /** @private
     *  @param {Event<HTMLInputElement>} oEvt */
    const _onChange = (oEvt) => _patternMatches(oEvt);

    /** @private
     *  @param {HTMLInputElement} target
     *  @param {boolean} bIsValid */
    const _addCustomValidity = (target, bIsValid = true) => {
        if (bIsValid) {
            target.setCustomValidity("valid");
            target.style = SUCCESS_STYLE;
        } else {
            target.setCustomValidity("invalid");
            target.style = ERROR_STYLE;
        }
    }

    /** @private
     *  @type {(function(...[*]=): void)|*} */
    const _patternMatches = debounce(([ oEvt ]) => {
        /** @desc Check input validity */
        isValidInput({
            key: oEvt.target.name,
            value: oEvt.target.value
        }).then(({ success }) => {
            if (success) _validInput(oEvt.target);
            else _invalidInput(oEvt.target);
        }).catch((oErr) => console.log(oErr))
    });

    /** @private
     *  @param {HTMLInputElement} target */
    const _validInput = (target) => {
        values.userPatternMatches[target.name] = false;

        /** @desc Change target validity while updating input value */
        _addCustomValidity(target, false);
        setInvalidMessage((invalidMessage) => ({...invalidMessage, [target.name]: _getInvalidMessage(target.name) }));
    }

    /** @private
     *  @param {HTMLInputElement} target */
    const _invalidInput = (target) => {
        /** @desc Check regex pattern and update provider */
        values.userPatternMatches[target.name] = new RegExp(RegexExp(target.name)).test(target.value);

        /** @desc Change target validity while updating input value */
        if (values.userPatternMatches[target.name]) _addCustomValidity(target)
        else _addCustomValidity(target, false);
        setInvalidMessage((invalidMessage) => ({...invalidMessage, [target.name]: String() }));

        /** @desc Update provider value */
        onAddValue(target.name, target.value);
    }

    /** @private
     *  @returns {string} */
    const _getInvalidMessage = (sName) => ({
        email: t("Container.Content.SignUp.User.invalidMailMessage"),
        username: t("Container.Content.SignUp.User.invalidUsernameMessage")
    })[sName];

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.userPatternMatches.email && values.userPatternMatches.username

    return (
        <fieldset className={progress.find(({ id }) => id === "user").isActive ? "active" : String()}>
            <h1>{t('Container.Content.SignUp.User.title')}</h1>
            <p>{<Trans i18nKey="Container.Content.SignUp.User.description" />}</p>
            {properties["user"].map((oInput) => (
                <FormInput
                    {...oInput}
                    message={invalidMessage[oInput.name] ? invalidMessage[oInput.name] : !values.userPatternMatches[oInput.name] ? oInput.message : String()}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            <NavButtons
                showPrev={true}
                callbackPrev={_onClickStep1}
                showNext={true}
                callbackNext={_onClickStep3}
                isNextDisabled={_isPatternMatching()}/>
        </fieldset>
    )
};