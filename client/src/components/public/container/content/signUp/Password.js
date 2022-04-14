import React from 'react';

import { FormInput } from '../../../../base/forms/Input';
import { FormButton } from '../../../../base/forms/Button';

import { RegexExp } from '../../../../../constants/RegexExp';

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

        /** @desc Go back to progress user component
         *  @host {src/components/public/container/content/SignUp.js} */
        onProgressBack({
            id: "password",
            isCompleted: _isPatternMatching(),
            isActive: false
        }, {
            id: "user",
            isActive: true
        });
    }

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep4 = (oEvt) => {
        oEvt.preventDefault();

        /** @desc Go forward to progress school component
         *  @host {src/components/public/container/content/SignUp.js} */
        onProgressNext({
            id: "password",
            isCompleted: _isPatternMatching(),
            isActive: false
        }, {
            id: "school",
            isCompleted: false,
            isActive: true
        });
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

    /** @private
     *  @param   {function} fnCallbackPrevious
     *  @param   {function} fnCallbackSignUp
     *  @returns {JSX.Element} */
    const _addNavButtons = (fnCallbackPrevious, fnCallbackSignUp) => (
        <div className="nav-buttons">
            <FormButton
                className="back"
                text="Zurück"
                showLeftIcon={true}
                onClick={fnCallbackPrevious}/>
            <FormButton
                className={_isPatternMatching() ? "next" : "next-disabled"}
                text="Weiter"
                showRightIcon={true}
                disabled={!(_isPatternMatching())}
                onClick={fnCallbackSignUp}/>
        </div>
    );

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
            {_addNavButtons(_onClickStep2, _onClickStep4)}
        </fieldset>
    )
};