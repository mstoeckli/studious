import React, { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { NavButtons } from '../authenticate/NavButtons';

import { FormInput } from '../../../../base/forms/Input';
import { FormInputAddress } from '../../../../base/forms/InputAddress';

import { RegexExp } from '../../../../../constants/RegexExp';

import { useSignUpContext } from '../../../../../context/SignUpProvider';

import { progressPrev, progressNext} from "../../../../../helpers/container/content/SignUp";

import { isValidKey } from '../../../../../assets/api/School';

import { AddressParts } from '../../../../../models/base/forms/InputAddress';

/** @public
 *  @constructor
 *  @returns {JSX.Element} School */
export const School = () => {
    /** @desc Get context properties for handling signing up progress */
    const { values, progress, properties, onAddValue, onProgressBack, onProgressNext } = useSignUpContext();

    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        if (!values.schoolKey) {
            /** @desc Set valid school key which will be used for signing in */
            _setValidKey();
        }
    });

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep3 = (oEvt) => {
        oEvt.preventDefault();
        progressPrev(onProgressBack, "school", _isPatternMatching(), "password");
    }

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep5 = (oEvt) => {
        oEvt.preventDefault();
        progressNext(onProgressNext, "school", _isPatternMatching(), "license");
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

    /** @private */
    const _setValidKey = () => {
        /** @desc Check key validity */
        isValidKey({
            key: Math.floor(1000 + Math.random() * 9000)
        }).then(({ data }) => {
            if (data.success) values.schoolKey = data.key;
            else _setValidKey();
        }).catch((oErr) => console.log(oErr));
    }

    /** @private
     *  @returns {boolean} */
    const _isPatternMatching = () => values.schoolPatternMatches.schoolName
        && values.schoolPatternMatches.route && values.schoolPatternMatches.street_number
        && values.schoolPatternMatches.postal_code && values.schoolPatternMatches.locality
        && values.schoolPatternMatches.country;

    return (
        <fieldset className={progress.find(({ id }) => id === "school").isActive ? "active" : String()}>
            <h1>{t('Container.Content.SignUp.School.title')}</h1>
            <p>{<Trans i18nKey="Container.Content.SignUp.School.description" />}</p>
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
                        value={values[oInput.name]}
                        pattern={RegexExp(oInput.name)}
                        fnChange={_onChange}/>
                )
            })}
            <NavButtons
                showPrev={true}
                callbackPrev={_onClickStep3}
                showNext={true}
                callbackNext={_onClickStep5}
                isNextDisabled={_isPatternMatching()}/>
        </fieldset>
    )
};