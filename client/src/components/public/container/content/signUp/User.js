import React from 'react';

import { FormInput } from "../../../../base/forms/Input";
import { FormButton } from "../../../../base/forms/Button";

import { RegexExp } from "../../../../../constants/RegexExp";

import { useSignUpContext } from "../../../../../context/SignUpProvider";

/** @public
 *  @constructor
 *  @returns {JSX.Element} User */
export const User = () => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressNext, onProgressBack } = useSignUpContext();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep1 = (oEvt) => {
        oEvt.preventDefault();

        /** @desc Go back to progress provider component
         *  @host {src/components/public/container/content/SignUp.js} */
        onProgressBack({
            id: "user",
            isCompleted: _isPatternMatching(),
            isActive: false
        }, {
            id: "provider",
            isActive: true
        });
    }

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep3 = (oEvt) => {
        oEvt.preventDefault();

        /** @desc Go forward to progress password component
         *  @host {src/components/public/container/content/SignUp.js} */
        onProgressNext({
            id: "user",
            isCompleted: _isPatternMatching(),
            isActive: false
        }, {
            id: "password",
            isCompleted: false,
            isActive: true
        });
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.userPatternMatches.email && values.userPatternMatches.username

    /** @private
     *  @param {Event<HTMLInputElement>} oEvt */
    const _onChange = (oEvt) => {
        values.userPatternMatches[oEvt.target.name] = new RegExp(RegexExp(oEvt.target.name)).test(oEvt.target.value)
        return onAddValue(oEvt.target.name, oEvt.target.value);
    }

    /** @private
     *  @param   {function} fnCallbackPrevious
     *  @param   {function} fnCallbackNext
     *  @returns {JSX.Element} */
    const _addNavButtons = (fnCallbackPrevious, fnCallbackNext) => (
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
                onClick={fnCallbackNext}/>
        </div>
    );

    return (
        <fieldset className={progress.find(({ id }) => id === "user").isActive ? "active" : String()}>
            <h1>Definiere einen Administrator</h1>
            <p>Der Administrator dient als <strong>Ansprechstelle</strong> innerhalb der Schul-Organisation.</p>
            {properties["user"].map((oInput) => (
                <FormInput
                    {...oInput}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            {_addNavButtons(_onClickStep1, _onClickStep3)}
        </fieldset>
    )
};