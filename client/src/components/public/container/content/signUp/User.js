import React from 'react';

import { NavButtons } from './NavButtons';

import { FormInput } from "../../../../base/forms/Input";

import { progressPrev, progressNext } from '../../../../../helpers/container/content/SignUp';

import { RegexExp } from '../../../../../constants/RegexExp';

import { useSignUpContext } from "../../../../../context/SignUpProvider";

/** @public
 *  @constructor
 *  @returns {JSX.Element} User */
export const User = () => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressBack, onProgressNext } = useSignUpContext();

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
    const _onChange = (oEvt) => {
        values.userPatternMatches[oEvt.target.name] = new RegExp(RegexExp(oEvt.target.name)).test(oEvt.target.value)
        return onAddValue(oEvt.target.name, oEvt.target.value);
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.userPatternMatches.email && values.userPatternMatches.username

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
            <NavButtons
                isNextDisabled={_isPatternMatching()}
                callbackPrev={_onClickStep1}
                callbackNext={_onClickStep3} />
        </fieldset>
    )
};