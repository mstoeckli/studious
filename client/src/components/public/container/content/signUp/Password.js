import React from 'react';

import { NavButtons } from "./NavButtons";

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
            <h1>Wähle dein Passwort</h1>
            <p>Das Passwort sollte <strong>6-20 Zeichen</strong> lang sein und mindestens <strong>1 Buchstaben</strong>, <strong>1 Zahl</strong> und <strong>1 Sonderzeichen</strong> enthalten.</p>
            {properties["password"].map((oInput) => (
                <FormInput
                    {...oInput}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            <NavButtons
                isNextDisabled={_isPatternMatching()}
                callbackPrev={_onClickStep2}
                callbackNext={_onClickStep4} />
        </fieldset>
    )
};