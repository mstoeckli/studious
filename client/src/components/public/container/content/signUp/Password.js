import React, {useContext, useState} from 'react';
import {SignInProps} from "../../../../../models/public/container/content/SignIn";
import {FormInput} from "../../../../base/forms/Input";
import {RegexExp} from "../../../../../constants/RegexExp";
import {FormButton} from "../../../../base/forms/Button";
import {useSignUpContext} from "../../../../../context/SignUpProvider";

/** @public
 *  @constructor
 *  @returns {JSX.Element} Password */
export const Password = () => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressBack } = useSignUpContext();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep2 = (oEvt) => {
        oEvt.preventDefault();
        onProgressBack({
            id: "password",
            isCompleted: values.password && values.confirmPassword,
            isActive: false
        }, {
            id: "user",
            isCompleted: false,
            isActive: true
        });
    }

    const _onChange = (oEvt) => onAddValue(oEvt.target.name, oEvt.target.value);

    /** @private
     *  @param   {function} fnCallbackPrevious
     *  @param   {function} fnCallbackSignUp
     *  @returns {JSX.Element} */
    const _addNavButtons = (fnCallbackPrevious, fnCallbackSignUp) => (
        <div className="nav-buttons">
            <FormButton
                text="Zurück"
                onClick={fnCallbackPrevious}/>
            <FormButton
                text="Abschliessen"
                onClick={fnCallbackSignUp}/>
        </div>
    );

    return (
        <fieldset className={progress.find(({ id }) => id === "password").isActive ? "active" : String()}>
            <h1>Wähle dein Passwort</h1>
            <p></p>
            {properties["password"].map((oInput) => (
                <FormInput
                    {...oInput}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            {_addNavButtons(_onClickStep2, () => {})}
        </fieldset>
    )
};