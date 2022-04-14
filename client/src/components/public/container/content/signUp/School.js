import React from 'react';

import { FormInput } from '../../../../base/forms/Input';
import { FormInputAddress } from '../../../../base/forms/InputAddress';
import { FormButton } from '../../../../base/forms/Button';

import { RegexExp } from '../../../../../constants/RegexExp';

import { useSignUpContext } from '../../../../../context/SignUpProvider';

import { AddressParts } from '../../../../../models/base/forms/InputAddress';

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
        onAddValue(oEvt.target.name, oEvt.target.value);

        /** @desc Reset pattern matches for address because not selected through google API */
        if (oEvt.target.name === "address") {
            for (const sKey of AddressParts) {
                values.schoolPatternMatches[sKey] = false;
            }
        }
    }

    /** @private
     *  @param   {string} sValue
     *  @param   {object} oAddressComponents
     *  @param   {boolean} oAddressComponents.route
     *  @param   {boolean} oAddressComponents.street_number
     *  @param   {boolean} oAddressComponents.postal_code
     *  @param   {boolean} oAddressComponents.locality
     *  @param   {boolean} oAddressComponents.country
     *  @param   {number} iLatitude
     *  @param   {number} iLongitude
     *  @returns {*} */
    const _onChangeAddress = (sValue, oAddressComponents, iLatitude, iLongitude) => {
        for (const sAddressComponent of Object.keys(oAddressComponents)) {
            values.schoolPatternMatches[sAddressComponent] = oAddressComponents[sAddressComponent];
        }

        /** @desc Refresh address value */
        onAddValue("address", sValue);
        onAddValue("latitude", iLatitude);
        onAddValue("longitude", iLongitude);
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.schoolPatternMatches.schoolName
        && values.schoolPatternMatches.route && values.schoolPatternMatches.street_number
        && values.schoolPatternMatches.postal_code && values.schoolPatternMatches.locality
        && values.schoolPatternMatches.country;

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
            <p>Über die Informationen können Sie als Schule für mögliche <strong>Partnerprojekte</strong> in studious gefunden werden. <br /> Diese Informationen dienen ebenfalls als <strong>Korrespondenz</strong> zwischen ihnen und studious</p>
            {properties["school"].map((oInput) => {
                return oInput.isAddress ? (
                    <FormInputAddress
                        {...oInput}
                        pattern={RegexExp(oInput.name)}
                        fnChange={_onChange}
                        fnChangeAddress={_onChangeAddress}/>
                ) : (
                    <FormInput
                        {...oInput}
                        pattern={RegexExp(oInput.name)}
                        fnChange={_onChange}/>
                )
            })}
            {_addNavButtons(_onClickStep3, _onClickStep5)}
        </fieldset>
    )
};