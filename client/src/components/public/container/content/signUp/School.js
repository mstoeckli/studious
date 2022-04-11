import React, {useContext, useState} from 'react';
import {SignInProps} from "../../../../../models/public/container/content/SignIn";
import {FormInput} from "../../../../base/forms/Input";
import {RegexExp} from "../../../../../constants/RegexExp";
import {FormButton} from "../../../../base/forms/Button";
import {useSignUpContext} from "../../../../../context/SignUpProvider";

/** @public
 *  @constructor
 *  @returns {JSX.Element} School */
export const School = () => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressBack, onProgressNext } = useSignUpContext();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep3 = (oEvt) => {
        oEvt.preventDefault();
        onProgressBack({
            id: "school",
            isCompleted: false,
            isActive: false
        }, {
            id: "password",
            isCompleted: values.password && values.confirmPassword,
            isActive: true
        });
    }

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep5 = (oEvt) => {
        oEvt.preventDefault();
        onProgressNext({
            id: "school",
            isCompleted: true,
            isActive: false
        }, {
            id: "license",
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
                showLeftIcon={true}
                onClick={fnCallbackPrevious}/>
            <FormButton
                text="Weiter"
                showRightIcon={true}
                disabled={!(values.password && values.confirmPassword && values.password === values.confirmPassword)}
                onClick={fnCallbackSignUp}/>
        </div>
    );

    return (
        <fieldset className={progress.find(({ id }) => id === "school").isActive ? "active" : String()}>
            <h1>Verwalte deine Schule</h1>
            <p></p>
            {properties["school"].map((oInput) => (
                <FormInput
                    {...oInput}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            {_addNavButtons(_onClickStep3, _onClickStep5)}
        </fieldset>
    )
};