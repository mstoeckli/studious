import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { StyledTableHeader } from '../../../styles/base/table/Header.styles';

import { Search } from '../Search';

import { CardInfo } from '../card/Info';

import { Dropdown } from '../dropdown/Dropdown';

import { QuickOptions } from '../../../models/base/table/QuickOptions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.title
 *  @param   {boolean=} oProperties.searchable
 *  @param   {boolean=} oProperties.filterable
 *  @param   {boolean=} oProperties.groupable
 *  @param   {boolean=} oProperties.favorite
 *  @param   {array=} oProperties.cards
 *  @returns {JSX.Element} TableHeader */
export const TableHeader = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Handle showing and hiding of dropdown component for filtering content
     *  @type {[{filter:boolean}, setIsActive:function]} */
    const [ isActive, setIsActive ] = useState({
        filter: false
    });

    /** @private
     *  @returns {JSX.Element} */
    const _addInfoContent = (sTitle) => (
        <div className="info">
            <div className="content">
                <div className="title">
                    <span>{sTitle}</span>
                    {/*{_addDropdownElement()}*/}
                </div>
            </div>
        </div>
    );

    /** @private
     *  @param   {object} oQuickOptions
     *  @param   {string} oQuickOptions.id
     *  @param   {string} oQuickOptions.title
     *  @param   {string} oQuickOptions.icon
     *  @param   {string} oQuickOptions.iconColor
     *  @param   {string=} oQuickOptions.jsxElement
     *  @param   {boolean=} bGroupable
     *  @param   {boolean=} bFilterable
     *  @param   {boolean=} bFavorite
     *  @returns {JSX.Element} */
    const _addQuickOptions = (oQuickOptions, bGroupable = false, bFilterable = true, bFavorite = false) => {
        const _fnActiveBasisQuickOptions = (sId) => ({
            "groupable": bGroupable,
            "filterable": bFilterable,
            "favorite": bFavorite
        })[sId];

        /** @desc Check if grouping or sorting is active */
        if (oQuickOptions.id === "groupable" || oQuickOptions.id === "filterable" || oQuickOptions.id === "favorite") {
            if (!_fnActiveBasisQuickOptions(oQuickOptions.id)) {
                return ( <></> );
            }
        }

        return (
            <div>
                <div
                    id={oQuickOptions.id}
                    className="quick-options"
                    onClick={() => {}}>
                    <FontAwesomeIcon
                        style={oQuickOptions.iconColor ? { color: oQuickOptions.iconColor } : ""}
                        icon={FaDuotoneIcons[oQuickOptions.icon]} />
                    <span>{t(oQuickOptions.title)}</span>
                </div>
                {oQuickOptions.hasOwnProperty("jsxElement") && <Dropdown
                    isActive={isActive[oQuickOptions.id]}
                    isClickedOutside={() => setIsActive((isActive) => ({
                        ...isActive,
                        [oQuickOptions.id]: false
                    }))}
                    jsxElement={<div>jsxelement</div>}  />}
            </div>
        );
    }

    /** @private
     *  @param   {object} oFilterValue
     *  @param   {string} oFilterValue.icon
     *  @param   {string} oFilterValue.value
     *  @returns {JSX.Element} */
    const _addFilterValue = (oFilterValue) => (
        <div className="values">
            <FontAwesomeIcon
                className="type"
                icon={FaDuotoneIcons[oFilterValue.icon]}>
            </FontAwesomeIcon>
            <span>{oFilterValue.value}</span>
        </div>
    );

    return (
        <StyledTableHeader>
            {oProperties?.title && _addInfoContent(oProperties.title)}
            <header>
                {oProperties.searchable && <Search />}
                {QuickOptions["Base"].map((oQuickOption) => _addQuickOptions(oQuickOption, oProperties.groupable, oProperties.filterable, oProperties.favorite))}
            </header>
            {/*<article className="option-wrapper">*/}
            {/*    {[{ icon: "faMapPin", value: "Fislisbach" }, { icon: "faGraduationCap", value: "Grundschule Fislisbach" }].map((oFilterValue) => _addFilterValue(oFilterValue))}*/}
            {/*</article>*/}
            <article className="card-info">
                {oProperties.cards.map((oCard) => (
                    <CardInfo
                        icon={oCard.icon}
                        title={oCard.title}
                        info={oCard.info}
                        backgroundColor={oCard.backgroundColor}
                        borderColor={oCard.borderColor} />
                ))}
            </article>
        </StyledTableHeader>
    )
}