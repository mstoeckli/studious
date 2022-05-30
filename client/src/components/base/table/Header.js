import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { StyledTableHeader } from '../../../styles/base/table/Header.styles';

import { Filter } from './header/Filter';
import { Customize } from './header/Customize';
import { DatePicker } from '../DatePicker';

import { containsIdentifier, containsNumber, containsValue } from '../../../helpers/base/Search';
import { useResizeHandler } from "../../../hooks/ResizeHandler";

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
 *  @param   {[object]} oProperties.columns
 *  @param   {object=} oProperties.filterValues
 *  @param   {string} oProperties.filterValues.isActive
 *  @param   {string} oProperties.filterValues.searchValue
 *  @param   {array} oProperties.filterValues.filters
 *  @param   {array} oProperties.filterValues.filteredRows
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
 *  @param   {boolean=} oProperties.quickOptionsVisibility.datepicker
 *  @param   {object=} oProperties.quickOptionsSettings -> { settings: { title: .... }} / Elements: searchable/filterable/groupable/favorite/newest/settings/customView/dateCalendar
 *  @param   {string} oProperties.quickOptionsSettings.title
 *  @param   {string=} oProperties.quickOptionsSettings.titleColor
 *  @param   {string} oProperties.quickOptionsSettings.iconSrc
 *  @param   {string=} oProperties.quickOptionsSettings.iconColor
 *  @param   {string=} oProperties.quickOptionsSettings.iconSolid
 *  @param   {string=} oProperties.quickOptionsSettings.backgroundColor
 *  @param   {string=} oProperties.quickOptionsSettings.borderColor
 *  @param   {object=} oProperties.quickOptionsEvents -> { refresh: () => {}} / Elements: searchable/filterable/groupable/favorite/newest/settings/customView/dateCalendar
 *  @param   {function=} oProperties.quickOptionsEvents.searchable
 *  @param   {function=} oProperties.quickOptionsEvents.filterable
 *  @param   {function=} oProperties.quickOptionsEvents.groupable
 *  @param   {function=} oProperties.quickOptionsEvents.favorite
 *  @param   {function=} oProperties.quickOptionsEvents.newest
 *  @param   {function=} oProperties.quickOptionsEvents.create
 *  @param   {function=} oProperties.quickOptionsEvents.refresh
 *  @param   {function=} oProperties.quickOptionsEvents.settings
 *  @param   {function=} oProperties.quickOptionsEvents.customize
 *  @param   {function=} oProperties.quickOptionsEvents.dateCalendar
 *  @param   {object} oProperties.resizing
 *  @param   {number} oProperties.resizing.headerHeight
 *  @param   {number} oProperties.resizing.tableHeight
 *  @param   {number} oProperties.resizing.headerHeightCustom
 *  @param   {[object]=} oProperties.headerCards
 *  @param   {string} oProperties.headerCards.iconSrc
 *  @param   {string} oProperties.headerCards.title
 *  @param   {string} oProperties.headerCards.info
 *  @param   {string=} oProperties.headerCards.backgroundColor
 *  @param   {string=} oProperties.headerCards.borderColor
 *  @param   {[object]} oProperties.views
 *  @param   {function=} oProperties.onFilter
 *  @param   {function=} oProperties.onResize
 *  @returns {JSX.Element} TableHeader */
export const TableHeader = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Handle showing and hiding of dropdown component for filtering/settings and customize content
     *  @type {[{filterable:boolean, settings:boolean, customize:boolean, datepicker:boolean}, setIsActive:function]} */
    const [ isActive, setIsActive ] = useState({
        filterable: false,
        settings: false,
        customize: false,
        datepicker: false
    });

    /** @desc Initialize reference object for table header object */
    const headerRefObj = useRef(null);

    /** @desc Add hook to reference object for calculating header height */
    useResizeHandler(headerRefObj, (oEvt) => {
        /** @desc Get header height and add 20px of padding */
        oProperties.onResize((oEvt.contentRect.height + 20));
    });


    //
    // useEffect(() => {
    //     if (oProperties.rows.length > 0 && oProperties.filterValues.isActive) {
    //         _onSearch(oProperties.filterValues.searchValue);
    //     }
    // }, [oProperties.rows])



    /** @private
     *  @param {string} sValue */
    const _onSearch = (sValue) => {
        /** @desc Check if search value has entered */
        if (!sValue) {
            oProperties.onFilter(oProperties.rows);
            return;
        }

        /** @desc Loop through all the columns which are defined as searchable */
        const aRows = [];
        oProperties.columns.forEach((oColumn, iIdx) => {
            if (!oColumn?.searchable) return;

            /** @desc Filter the rows which are transferred from the main component in which the "Table.js" component was included */
            const _aRows = oProperties.rows.filter((aRow) => {
                /** @desc Do value checks for each type of row with the current column index */
                if (aRow[iIdx].type === "Identifier") return containsIdentifier(aRow[iIdx]?.title, aRow[iIdx]?.description, sValue)
                else if (aRow[iIdx].type === "Number") return containsNumber(aRow[iIdx]?.value, sValue)
                else return containsValue(aRow[iIdx]?.value, sValue)
            });

            if (_aRows.length > 0) for (const _aRow of _aRows) {
                /** @desc Check if row already was added or not */
                const _iIdx = aRows.findIndex((aRow) => JSON.stringify(aRow) === JSON.stringify(_aRow));
                if (_iIdx < 0) aRows.push(_aRow);
            }
        });

        oProperties.onFilter(aRows, sValue);
    }

    /** @private
     *  @param {string} sId
     *  @param {boolean=} bIsActive */
    const _setIsActive = (sId, bIsActive = false) => {
        setIsActive((isActive) => ({
            ...isActive,
            [sId]: bIsActive
        }));
    };

    /** @private
     *  @param   {string} sKey
     *  @returns {JSX.Element} */
    const _getDropdownElement = (sKey) => (({
        filterable: <Filter resizing={oProperties.resizing}/>,
        settings: <div>settings</div>,
        customize: <Customize tableKey={oProperties.tableKey} views={oProperties.views} resizing={oProperties.resizing} />,
        datepicker: <DatePicker tableKey={oProperties.tableKey} resizing={oProperties.resizing}/>
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
     *  @param   {boolean=} oQuickOptions.hasDropdown
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
     *  @param   {object=} oQuickOptionsEvents -> { refresh: () => {}} / Elements: refresh/searchable
     *  @param   {function=} oQuickOptionsEvents.searchable
     *  @param   {function=} oQuickOptionsEvents.filterable
     *  @param   {function=} oQuickOptionsEvents.groupable
     *  @param   {function=} oQuickOptionsEvents.favorite
     *  @param   {function=} oQuickOptionsEvents.newest
     *  @param   {function=} oQuickOptionsEvents.create
     *  @param   {function=} oQuickOptionsEvents.refresh
     *  @param   {function=} oQuickOptionsEvents.settings
     *  @param   {function=} oQuickOptionsEvents.customize
     *  @param   {function=} oQuickOptionsEvents.dateCalendar */
    const _addQuickOptions = (oQuickOptions, oQuickOptionsVisibility= {}, oQuickOptionsSettings = {}, oQuickOptionsEvents = {}) => {
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
                    onClick={(oEvt) => {
                        debugger;
                        Object.keys(oQuickOptionsEvents).length > 0 && oQuickOptionsEvents.constructor === Object && typeof oQuickOptionsEvents[oQuickOptions.id] === "function"
                            ? oQuickOptionsEvents[oQuickOptions.id](oEvt)
                            : _setIsActive(oQuickOptions.id, true)
                    } }>
                    <FontAwesomeIcon
                        style={{ color: oQuickOptions?.iconColor }}
                        icon={oQuickOptions?.iconSolid ? FaSolidIcons[oQuickOptions.iconSrc] : FaDuotoneIcons[oQuickOptions.iconSrc]} />
                    {oQuickOptions?.title && <span style={{ color: oQuickOptions?.titleColor }}>{t(oQuickOptions.title)}</span>}
                </div>
                {oQuickOptions?.hasDropdown && <Dropdown
                    isActive={isActive[oQuickOptions.id]}
                    isClickedOutside={() => _setIsActive(oQuickOptions.id)}
                    jsxElement={_getDropdownElement(oQuickOptions.id)}  />}
            </div>
        );
    }

    /** @private
     *  @returns {JSX.Element} */
    const _addSearch = () => (
        <Search
            value={oProperties?.filterValues.searchValue}
            onSearch={oProperties?.quickOptionsEvents?.search ? oProperties.quickOptionsEvents.search : _onSearch}
            onChange={oProperties?.quickOptionsEvents?.search ? oProperties.quickOptionsEvents.search : _onSearch} />
    );

    return (
        <StyledTableHeader
            ref={headerRefObj}>
            <header>
                {oProperties.title && _addInfoContent(oProperties.title)}
                {oProperties.quickOptionsVisibility.datepicker && _addQuickOptions(QuickOptions["DatePicker"], oProperties.quickOptionsVisibility, oProperties.quickOptionsSettings)}
            </header>
            <header>
                <div className="left">
                    {oProperties.quickOptionsVisibility.searchable && _addSearch()}
                    {QuickOptions["Left"].map((oQuickOption) => _addQuickOptions(oQuickOption, oProperties.quickOptionsVisibility, oProperties.quickOptionsSettings, oProperties.quickOptionsEvents))}
                </div>
                <div className="right">
                    {QuickOptions["Right"].map((oQuickOption) => _addQuickOptions(oQuickOption, oProperties.quickOptionsVisibility, oProperties.quickOptionsSettings, oProperties.quickOptionsEvents))}
                </div>
            </header>

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

// /** @private
//  *  @param   {object} oFilterValue
//  *  @param   {string} oFilterValue.icon
//  *  @param   {string} oFilterValue.value
//  *  @returns {JSX.Element} */
// const _addFilterValue = (oFilterValue) => (
//     <div className="values">
//         <FontAwesomeIcon
//             className="type"
//             icon={FaDuotoneIcons[oFilterValue.icon]}>
//         </FontAwesomeIcon>
//         <span>{oFilterValue.value}</span>
//     </div>
// );

// {/*<article className="option-wrapper">*/}
// {/*    {[{ icon: "faMapPin", value: "Fislisbach" }, { icon: "faGraduationCap", value: "Grundschule Fislisbach" }].map((oFilterValue) => _addFilterValue(oFilterValue))}*/}
// {/*</article>*/}