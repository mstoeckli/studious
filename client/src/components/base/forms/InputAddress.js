import React, { useRef, useState, useEffect } from "react";

import { StyledInputAddress } from '../../../styles/base/forms/InputAddress.styles';

import { AddressParts } from '../../../models/base/forms/InputAddress';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons'

/** @private
 *  @param   {string} sSrc
 *  @returns {Promise<unknown>} */
function _loadAsyncScript(sSrc) {
    return new Promise((fnResolve) => {
        const script = document.createElement("script");
        Object.assign(script, {
            type: "text/javascript",
            async: true,
            src: sSrc
        });

        script.addEventListener("load", () => fnResolve(script));
        document.head.appendChild(script);
    });
}

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.label
 *  @param   {string} oProperties.message
 *  @param   {string} oProperties.icon
 *  @param   {function} oProperties.fnChange
 *  @param   {function} oProperties.fnChangeAddress
 *  @param   {object} oProperties.inputProps
 *  @returns {JSX.Element} FormInputAddress */
export const FormInputAddress = ({ label, message, icon, fnChange, fnChangeAddress, ...inputProps }) => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update the focus for an input field to handle validations
     *  @type {[open:boolean, setOpen:function]} */
    const [ focused, setFocused ] = useState(false);

    /** @desc Create a reference object for handling google api places search */
    const inputAddress = useRef(null);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        _initMapScript().then(() => {
            if (!inputAddress.current) return;

            /** @desc Instantiate google api for searching for places in a dropdown
             *  @type {Window.google.maps.places.Autocomplete} */
            const autocomplete = new window.google.maps.places.Autocomplete(inputAddress.current, {
                fields: ["address_components", "geometry"]
            });

            /** @desc Add event listener for handling location place has changed */
            autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));
        })
    }, []);

    /** @private */
    const _onBlur = () => setFocused(true);

    /** @private
     *  @param {Window.google.maps.places.Autocomplete} autocomplete */
    const onChangeAddress = (autocomplete) => {
        let sAddress = String();
        const oAddressComponents = {};
        for (const sKey of AddressParts) {
            for (const { types, long_name } of autocomplete.getPlace().address_components) {
                /** @desc Check if all the keys of a place are submitted */
                if (types.includes(sKey)) {
                    oAddressComponents[sKey] = true;
                    sAddress = sAddress.length <= 0 ? long_name : `${sAddress} ${long_name}`
                    break;
                }
            }
        } fnChangeAddress(sAddress, oAddressComponents, autocomplete.getPlace().geometry.location.lat(), autocomplete.getPlace().geometry.location.lng());
    }

    /** @private
     *  @returns {Promise<unknown>|Promise<void>} */
    const _initMapScript = () => window.google ? Promise.resolve() : _loadAsyncScript(`https://maps.googleapis.com/maps/api/js?key=${"AIzaSyAeP-qI7ipVJbov8nSEBs6_Uqm-WmRDoOk"}&libraries=places&v=weekly`);

    return (
        <StyledInputAddress>
            <label className={inputProps.required ? "required" : String()}>{label}</label>
            <input
                ref={inputAddress}
                {...inputProps}
                onBlur={_onBlur}
                onChange={fnChange}
                focused={focused.toString()}/>
            <FontAwesomeIcon icon={FaDuotoneIcons[icon]} />
            <span>{message}</span>
        </StyledInputAddress>
    )
}