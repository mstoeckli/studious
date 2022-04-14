import React, {useContext, useState} from 'react';
import {FormInput} from "../../../../base/forms/Input";
import {RegexExp} from "../../../../../constants/RegexExp";
import {FormButton} from "../../../../base/forms/Button";
import {useSignUpContext} from "../../../../../context/SignUpProvider";

/** @public
 *  @constructor
 *  @returns {JSX.Element} License */
export const License = () => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressBack, onProgressNext } = useSignUpContext();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep4 = (oEvt) => {
        oEvt.preventDefault();
        onProgressBack({
            id: "license",
            isCompleted: false,
            isActive: false
        }, {
            id: "school",
            isCompleted: true,
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
                text="Abschliessen"
                rightIcon="faFlagCheckered"
                showRightIcon={true}
                onClick={fnCallbackSignUp}/>
        </div>
    );

    return (
        <fieldset className={progress.find(({ id }) => id === "license").isActive ? "active" : String()}>
            <h1>Definiere die Anzahl Lizenzen</h1>
            <p>Die Kosten für die Klassenlehrer-Lizenz betragen <br /><strong>CHF 29.90/Monat</strong>, die Fachlehrer-Lizenz <strong>CHF 9.90/Monat</strong><br /> und die Schüler-Lizenz <strong>CHF 14.90/Monat</strong><br /> Preise können varieren!</p>
            {properties["license"].map((oInput) => (
                <FormInput
                    {...oInput}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            {_addNavButtons(_onClickStep4, () => {})}
        </fieldset>
    )
};