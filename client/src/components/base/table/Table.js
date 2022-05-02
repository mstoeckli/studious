import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledTable } from '../../../styles/base/table/Table.styles';

import { Dropdown } from '../dropdown/Dropdown';

import { CardInfo } from '../card/Info';

import { Search } from '../Search';
import { PaginationBase } from '../Pagination';

import { QuickOptions } from '../../../models/base/table/QuickOptions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.modelKey
 *  @returns {JSX.Element} Table */
export const Table = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Store pagination indexes
     *  @type {[_indexFirst:number, _setIndexFirst:function]}
     *  @type {[_indexLast:number, _setIndexLast:function]} */
    const [ _indexFirst, _setIndexFirst ] = useState(0);
    const [ _indexLast, _setIndexLast ] = useState(0);

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Handle showing and hiding of dropdown component for filtering projects
     *  @type {[{filter:boolean, sorter:boolean}, setIsActive:function]} */
    const [ isActive, setIsActive ] = useState({
        sorter: false
    });

    /** @desc Initialize reference object for setting object pagination */
    const paginationRefreshRef = useRef(null);

    /** @desc Entries per page */
    const iPerPage = 15;

    /** @private
     *  @returns {JSX.Element} */
    const _addColumns = () => {
        return (
            <tr>
                <th>
                    <input type="checkbox" />
                </th>
                <th>
                    <span>Schule</span>
                    <FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />
                </th>
                <th>
                    <span>Adresse</span>
                    <FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />
                </th>
                <th>
                    <span>Administrator</span>
                    <FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />
                </th>
            </tr>
        )
    };

    /** @private
     *  @returns {JSX.Element} */
    const _addRow = () => {
        return (
            <tr>
                <th><input type="checkbox" /></th>
                <th>Grundschule Fislisbach</th>
                <th>asdf</th>
                <td>Dorfstrasse 21, 5442 Fislisbach, Aargau Baden, Schweiz</td>
            </tr>
        )
    };

    /** @private
     *  @returns {JSX.Element} */
    const _addInfoContent = () => (
        <div className="info">
            <div className="content">
                <div className="title">
                    <span>Schulen</span>
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
     *  @returns {JSX.Element} */
    const _addQuickOptions = (oQuickOptions) => (
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
                jsxElement={() => {}}  />}
        </div>
    );

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

    /** @private
     *  @param   {number} iKey
     *  @param   {boolean} bIsActive
     *  @returns {JSX.Element}*/
    const _addDropdownElement = (iKey, bIsActive) => (
        <Dropdown
            modelObj="ContainerNavConfig"
            showIcon={true}
            float="left" />
    );

    /** @private
     *  @returns {JSX.Element} */
    const _addPagination = () => (
        <PaginationBase
            ref={paginationRefreshRef}
            customStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            perPage={iPerPage}
            onIndexCalculated={(iIndexLast, iIndexFirst) => {
                _setIndexFirst((_indexFirst) => iIndexFirst);
                _setIndexLast((_indexLast) => iIndexLast);
            }} />
    );

    return (
        <StyledTable>
            <section>
                {_addInfoContent()}
                <header>
                    <Search />
                    {QuickOptions["Base"].map((oQuickOption) => _addQuickOptions(oQuickOption))}
                </header>
                <article className="option-wrapper">
                    {[{ icon: "faMapPin", value: "Fislisbach" }, { icon: "faGraduationCap", value: "Grundschule Fislisbach" }].map((oFilterValue) => _addFilterValue(oFilterValue))}
                </article>
                <article className="card-info">
                    <CardInfo
                        icon="faEarthEurope"
                        title="Länder"
                        info="2"
                        backgroundColor="#98c9d1"
                        borderColor="#53b1c1" />
                    <CardInfo
                        icon="faGraduationCap"
                        title="Schulen"
                        info="23"
                        backgroundColor="#98d1bf"
                        borderColor="#61cfac" />
                    <CardInfo
                        icon="faChalkboardUser"
                        title="Lehrer"
                        info="52"
                        backgroundColor="#98b9d1"
                        borderColor="#5d9ecd" />
                    <CardInfo
                        icon="faUserGraduate"
                        title="Schüler"
                        info="276"
                        backgroundColor="#d198a5"
                        borderColor="#cf5d77" />
                </article>
            </section>
            <section className="table">
                <article>
                    <header className="expanded">
                        <div>
                            <FontAwesomeIcon icon={FaDuotoneIcons["faSquareChevronDown"]} />
                            <span>Schweiz</span>
                        </div>
                        <FontAwesomeIcon icon={FaDuotoneIcons["faEllipsisVertical"]} />
                    </header>
                    <main>
                        <table>
                            <thead>
                                {_addColumns()}
                            </thead>
                            <tbody>
                                {_addRow()}
                                {_addRow()}
                            </tbody>
                        </table>
                    </main>
                </article>
                <article>
                    <header>
                        <div>
                            <FontAwesomeIcon icon={FaDuotoneIcons["faSquareChevronDown"]} />
                            <span>Deutschland</span>
                        </div>
                        <FontAwesomeIcon icon={FaDuotoneIcons["faEllipsisVertical"]} />
                    </header>
                    <main>
                        <table>
                            <thead>
                                {_addColumns()}
                            </thead>
                            <tbody>
                                {_addRow()}
                            </tbody>
                        </table>
                    </main>
                </article>
            </section>
            {_addPagination()}
        </StyledTable>
    )
}

