import React from 'react';

import { FormInput } from '../../../../base/forms/Input';
import { FormButton } from '../../../../base/forms/Button';

import { RegexExp } from '../../../../../constants/RegexExp';

import { useSignUpContext } from '../../../../../context/SignUpProvider';

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
            isCompleted: _isPatternMatching(),
            isActive: false
        }, {
            id: "password",
            isActive: true
        });
    }

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep5 = (oEvt) => {
        oEvt.preventDefault();
        onProgressNext({
            id: "school",
            isCompleted: _isPatternMatching(),
            isActive: false
        }, {
            id: "license",
            isCompleted: false,
            isActive: true
        });
    }

    /** @private
     *  @param {Event<HTMLInputElement>} oEvt */
    const _onChange = (oEvt) => {
        values.schoolPatternMatches[oEvt.target.name] = new RegExp(RegexExp(oEvt.target.name)).test(oEvt.target.value)
        return onAddValue(oEvt.target.name, oEvt.target.value);
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.schoolPatternMatches.name && values.schoolPatternMatches.country && values.schoolPatternMatches.city && values.schoolPatternMatches.street;

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
                className={_isPatternMatching() ? "next" : "next-disabled"}
                text="Weiter"
                showRightIcon={true}
                disabled={!(_isPatternMatching())}
                onClick={fnCallbackSignUp}/>
        </div>
    );

    return (
        <fieldset className={progress.find(({ id }) => id === "school").isActive ? "active" : String()}>
            <h1>Verwalte deine Schule</h1>
            <p>Erfassen Sie hier Ihre Informationen zu der Schule. Diese Informationen dienen der späteren Einsicht aller registrierten Schulen, sowie möglicher <strong>Partnerprogramme</strong> zwischen Schulen</p>
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