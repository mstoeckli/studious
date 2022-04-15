import React from 'react';

import { NavButtons } from './NavButtons';

import { FormInput } from '../../../../base/forms/Input';

import { RegexExp } from '../../../../../constants/RegexExp';

import { useSignUpContext } from '../../../../../context/SignUpProvider';

import { progressPrev, progressNext } from "../../../../../helpers/container/content/SignUp";

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
        progressPrev(onProgressBack, "license", _isPatternMatching(), "school");
    }

    /** @private
     *  @param {Event<HTMLInputElement>} oEvt */
    const _onChange = (oEvt) => {
        values.licensePatternMatches[oEvt.target.name] = oEvt.target.value > 0
        return onAddValue(oEvt.target.name, oEvt.target.value);
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.licensePatternMatches.classTeacher && values.licensePatternMatches.students

    return (
        <fieldset className={progress.find(({ id }) => id === "license").isActive ? "active" : String()}>
            <h1>Definiere die Anzahl Lizenzen</h1>
            <p>Die Kosten für die Klassenlehrer-Lizenz betragen <strong>CHF 29.90/Monat</strong>, die Fachlehrer-Lizenz <strong>CHF 9.90/Monat</strong> und die Schüler-Lizenz <strong>CHF 14.90/Monat</strong><br /> Preise können varieren!</p>
            {properties["license"].map((oInput) => (
                <FormInput
                    {...oInput}
                    pattern={RegexExp(oInput.name)}
                    fnChange={_onChange}/>
            ))}
            <NavButtons
                isNextDisabled={_isPatternMatching()}
                textNext="Abschliessen"
                rightIconNext="faFlagCheckered"
                callbackPrev={_onClickStep4}
                callbackNext={() => {}} />
        </fieldset>
    )
};