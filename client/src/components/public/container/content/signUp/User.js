import React from 'react';

import {FormInput} from "../../../../base/forms/Input";
import {RegexExp} from "../../../../../constants/RegexExp";
import {FormButton} from "../../../../base/forms/Button";
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
        onProgressBack({
            id: "user",
            isCompleted: values.email && values.username,
            isActive: false
        }, {
            id: "provider",
            isCompleted: false,
            isActive: true
        });
    }

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep3 = (oEvt) => {
        oEvt.preventDefault();
        onProgressNext({
            id: "user",
            isCompleted: values.email && values.username,
            isActive: false
        }, {
            id: "password",
            isCompleted: false,
            isActive: true
        });
    }

    const _onChange = (oEvt) => onAddValue(oEvt.target.name, oEvt.target.value);

    /** @private
     *  @param   {function} fnCallbackPrevious
     *  @param   {function} fnCallbackNext
     *  @returns {JSX.Element} */
    const _addNavButtons = (fnCallbackPrevious, fnCallbackNext) => (
        <div className="nav-buttons">
            <FormButton
                text="Zurück"
                onClick={fnCallbackPrevious}/>
            <FormButton
                text="Weiter"
                disabled={!(values.email && values.username)}
                onClick={fnCallbackNext}/>
        </div>
    );

    return (
        <fieldset className={progress.find(({ id }) => id === "user").isActive ? "active" : String()}>
            <h1>Vervollständige deine Benutzer-Angaben</h1>
            <p></p>
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