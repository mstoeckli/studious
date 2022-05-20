import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { StyledTableHeader } from '../../../styles/base/table/Header.styles';

import { Filter } from './header/Filter';
import { Customize } from './header/Customize';

import { Search } from '../Search';

import { CardInfo } from '../card/Info';

import { Dropdown } from '../dropdown/Dropdown';

import { QuickOptions } from '../../../models/base/table/QuickOptions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';
import * as FaSolidIcons from '@fortawesome/pro-solid-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.tableKey
 *  @param   {string} oProperties.title
 *  @param   {object=} oProperties.quickOptionsVisibility
 *  @param   {boolean=} oProperties.quickOptionsVisibility.searchable
 *  @param   {boolean=} oProperties.quickOptionsVisibility.filterable
 *  @param   {boolean=} oProperties.quickOptionsVisibility.groupable
 *  @param   {boolean=} oProperties.quickOptionsVisibility.favorite
 *  @param   {boolean=} oProperties.quickOptionsVisibility.newest
 *  @param   {boolean=} oProperties.quickOptionsVisibility.refresh
 *  @param   {boolean=} oProperties.quickOptionsVisibility.create
 *  @param   {boolean=} oProperties.quickOptionsVisibility.settings
 *  @param   {boolean=} oProperties.quickOptionsVisibility.customize
 *  @param   {boolean=} oProperties.quickOptionsVisibility.dateCalendar
 *  @param   {object=} oProperties.quickOptionsSettings -> { settings: { title: .... }} / Elements: searchable/filterable/groupable/favorite/newest/settings/customView/dateCalendar
 *  @param   {string} oProperties.quickOptionsSettings.title
 *  @param   {string=} oProperties.quickOptionsSettings.titleColor
 *  @param   {string} oProperties.quickOptionsSettings.iconSrc
 *  @param   {string=} oProperties.quickOptionsSettings.iconColor
 *  @param   {string=} oProperties.quickOptionsSettings.iconSolid
 *  @param   {string=} oProperties.quickOptionsSettings.backgroundColor
 *  @param   {string=} oProperties.quickOptionsSettings.borderColor
 *  @param   {object=} oProperties.quickOptionsEvents -> { refresh: () => {}} / Elements: refresh
 *  @param   {function} oProperties.quickOptionsEvents.refresh
 *  @param   {[object]=} oProperties.headerCards
 *  @param   {string} oProperties.headerCards.iconSrc
 *  @param   {string} oProperties.headerCards.title
 *  @param   {string} oProperties.headerCards.info
 *  @param   {string=} oProperties.headerCards.backgroundColor
 *  @param   {string=} oProperties.headerCards.borderColor
 *  @param   {[object]} oProperties.views
 *  @returns {JSX.Element} TableHeader */
export const TableHeader = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Handle showing and hiding of dropdown component for filtering content
     *  @type {[{filter:boolean}, setIsActive:function]} */
    const [ isActive, setIsActive ] = useState({
        filterable: false,
        settings: false,
        view: false
    });

    /** @private
     *  @param {string} sId
     *  @param {boolean=} bIsActive */
    const _setIsActive = (sId, bIsActive = false) => {
        setIsActive((isActive) => ({
            ...isActive,
            [sId]: bIsActive
        }));
    };

    const _getDropdownElement = (sKey) => (({
        filterable: <Filter />,
        settings: <div>settings</div>,
        customize: <Customize
            tableKey={oProperties.tableKey}
            views={oProperties.views}/>
    }))[sKey]

    /** @private
     *  @returns {JSX.Element} */
    const _addInfoContent = (sTitle) => (
        <div className="info">
            <div className="content">
                <div className="title">
                    <span>{sTitle}</span>
                </div>
            </div>
        </div>
    );

    /** @private
     *  @param   {object} oQuickOptions
     *  @param   {string} oQuickOptions.id
     *  @param   {string} oQuickOptions.title
     *  @param   {string=} oQuickOptions.titleColor
     *  @param   {string} oQuickOptions.iconSrc
     *  @param   {string} oQuickOptions.iconColor
     *  @param   {boolean=} oQuickOptions.iconSolid
     *  @param   {string=} oQuickOptions.backgroundColor
     *  @param   {string=} oQuickOptions.borderColor
     *  @param   {string=} oQuickOptions.jsxElement
     *  @param   {object=} oQuickOptionsVisibility
     *  @param   {boolean=} oQuickOptionsVisibility.searchable
     *  @param   {boolean=} oQuickOptionsVisibility.filterable
     *  @param   {boolean=} oQuickOptionsVisibility.groupable
     *  @param   {boolean=} oQuickOptionsVisibility.favorite
     *  @param   {boolean=} oQuickOptionsVisibility.newest
     *  @param   {boolean=} oQuickOptionsVisibility.create
     *  @param   {boolean=} oQuickOptionsVisibility.refresh
     *  @param   {boolean=} oQuickOptionsVisibility.settings
     *  @param   {boolean=} oQuickOptionsVisibility.customize
     *  @param   {boolean=} oQuickOptionsVisibility.dateCalendar
     *  @param   {object=} oQuickOptionsSettings -> { settings: { title: .... }} / Elements: searchable/filterable/groupable/favorite/newest/settings/customize/dateCalendar
     *  @param   {string} oQuickOptionsSettings.title
     *  @param   {string=} oQuickOptionsSettings.titleColor
     *  @param   {string} oQuickOptionsSettings.iconSrc
     *  @param   {string=} oQuickOptionsSettings.iconColor
     *  @param   {string=} oQuickOptionsSettings.iconSolid
     *  @param   {string=} oQuickOptionsSettings.backgroundColor
     *  @param   {string=} oQuickOptionsSettings.borderColor
     *  @param   {object=} oQuickOptionsEvents -> { refresh: () => {}} / Elements: refresh
     *  @param   {function} oQuickOptionsEvents.refresh */
    const _addQuickOptions = (oQuickOptions, oQuickOptionsVisibility, oQuickOptionsSettings, oQuickOptionsEvents) => {
        /** @desc Pre-check visibility of a quick option */
        if (!oQuickOptionsVisibility[oQuickOptions.id]) {
            return ( <></> );
        }

        const oQuickOptionSetting = oQuickOptionsSettings[oQuickOptions.id];
        if (oQuickOptionSetting) for (const sKey of Object.keys(oQuickOptionSetting)) {
            /** @desc Overwrite with custom values */
            oQuickOptions[sKey] = oQuickOptionSetting[sKey];
        }

        return (
            <div>
                <div
                    id={oQuickOptions.id}
                    className="quick-options"
                    style={{ backgroundColor: oQuickOptions?.backgroundColor, borderColor: oQuickOptions?.borderColor }}
                    onClick={(oEvt) => Object.keys(oQuickOptionsEvents).length > 0 && oQuickOptionsEvents.constructor === Object && oQuickOptionsEvents.hasOwnProperty(oQuickOptions.id)
                        ? oQuickOptionsEvents[oQuickOptions.id](oEvt)
                        : _setIsActive(oQuickOptions.id, true)}>
                    <FontAwesomeIcon
                        style={{ color: oQuickOptions?.iconColor }}
                        icon={oQuickOptions?.iconSolid ? FaSolidIcons[oQuickOptions.iconSrc] : FaDuotoneIcons[oQuickOptions.iconSrc]} />
                    {oQuickOptions?.title && <span style={{ color: oQuickOptions?.titleColor }}>{t(oQuickOptions.title)}</span>}
                </div>
                {oQuickOptions?.jsxElement && <Dropdown
                    isActive={isActive[oQuickOptions.id]}
                    isClickedOutside={() => _setIsActive(oQuickOptions.id)}
                    jsxElement={_getDropdownElement(oQuickOptions.id)}  />}
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
            <header>
                {oProperties.title && _addInfoContent(oProperties.title)}
                {oProperties.quickOptionsVisibility.dateCalendar && _addQuickOptions({
                    id: "dateCalendar",
                    title: "06. Jan. 2022 - 13. Jan. 2022",
                    iconSrc: "faCalendarRange"
                }, oProperties.quickOptionsVisibility, oProperties.quickOptionsSettings)}
            </header>
            <header>
                <div className="left">
                    {oProperties.quickOptionsVisibility.searchable && <Search />}
                    {QuickOptions["Left"].map((oQuickOption) => _addQuickOptions(oQuickOption, oProperties.quickOptionsVisibility, oProperties.quickOptionsSettings, oProperties.quickOptionsEvents))}
                </div>
                <div className="right">
                    {QuickOptions["Right"].map((oQuickOption) => _addQuickOptions(oQuickOption, oProperties.quickOptionsVisibility, oProperties.quickOptionsSettings, oProperties.quickOptionsEvents))}
                </div>
            </header>
            {/*<article className="option-wrapper">*/}
            {/*    {[{ icon: "faMapPin", value: "Fislisbach" }, { icon: "faGraduationCap", value: "Grundschule Fislisbach" }].map((oFilterValue) => _addFilterValue(oFilterValue))}*/}
            {/*</article>*/}
            {oProperties.headerCards.length > 0 && <article className="card-info">
                {oProperties.headerCards.map((oCard) => (
                    <CardInfo
                        icon={oCard.icon}
                        title={oCard.title}
                        info={oCard.info}
                        backgroundColor={oCard.backgroundColor}
                        borderColor={oCard.borderColor} />
                ))}
            </article>}
        </StyledTableHeader>
    )
}