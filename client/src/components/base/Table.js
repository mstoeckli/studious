import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledTable } from '../../styles/base/Table.styles';

import { TableHeader } from "./table/Header";

import { Dropdown } from './dropdown/Dropdown';

import { PaginationBase } from './Pagination';

import { FormCheckbox } from './forms/Checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';


/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.modelKey
 *  @param   {string=} oProperties.title
 *  @param   {boolean=} oProperties.sorting
 *  @param   {boolean=} oProperties.searchable
 *  @param   {boolean=} oProperties.grouping
 *  @param   {string=} oProperties.groupColumn
 *  @param   {boolean=} oProperties.multiSelect
 *  @param   {boolean=} oProperties.showNumberLine
 *  @param   {boolean=} oProperties.showContent
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


    /** @desc Initialize reference object for setting object pagination */
    const paginationRefreshRef = useRef(null);

    /** @desc Entries per page */
    const iPerPage = 15;

    const _addContainer = (oProperties) => {
        return (
            <section>
                {oProperties?.grouping && oProperties?.groupColumn && _addTableGroupHeader(oProperties)}
                {_addTableContent(oProperties)}
            </section>
        );
    };

    const _addTableGroupHeader = (oProperties) => {
        return (
            <header className="expanded">
                <div>
                    <FontAwesomeIcon icon={FaDuotoneIcons["faSquareChevronDown"]} />
                    <span>Schweiz</span>
                </div>
                <FontAwesomeIcon icon={FaDuotoneIcons["faEllipsisVertical"]} />
            </header>
        );
    };

    const _addTableContent = (oProperties) => {
        return (
            <article>
                <table>
                    <thead>
                    {_addColumns({
                        showLineNumber: oProperties.showNumberLine,
                        multiSelect: oProperties.multiSelect
                    })}
                    </thead>
                    <tbody>
                        {_addRow({
                            showLineNumber: oProperties.showNumberLine,
                            multiSelect: oProperties.multiSelect
                        })}
                        {oProperties?.showContent && _addRowContent()}
                    </tbody>
                </table>
            </article>
        );
    };

    /** @private
     *  @param   {object} oProperties
     *  @param   {boolean=} oProperties.showLineNumber
     *  @param   {boolean=} oProperties.multiSelect
     *  @returns {JSX.Element} */
    const _addColumns = (oProperties) => {
        return (
            <tr>
                {oProperties?.showLineNumber && <th style={{ width: "45px" }} />}
                {oProperties?.multiSelect && <th style={{ width: "35px" }}>
                    <FormCheckbox />
                </th>}
                <th style={{ width: "auto" }}>
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
     *  @param   {object} oProperties
     *  @param   {boolean=} oProperties.showLineNumber
     *  @param   {boolean=} oProperties.multiSelect
     *  @returns {JSX.Element} */
    const _addRow = (oProperties) => {
        return (
            <tr>
                {oProperties?.showLineNumber && <td style={{ textAlign: "center", fontWeight: "700" }}>1</td>}
                {oProperties?.multiSelect && <td><FormCheckbox /></td>}
                <td>Grundschule Fislisbach</td>
                <td>asdf</td>
                <td>Dorfstrasse 21, 5442 Fislisbach, Aargau Baden, Schweiz</td>
            </tr>
        )
    };

    const _addRowContent = () => {
        return (
            <tr>
                <td colSpan="5">
                    <div id="my_box">
                        <p>I'm text in a div inside a td tag.</p>
                    </div>
                </td>

            </tr>
        )
    };

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
            <TableHeader
                title={oProperties.title}
                sorting={oProperties?.sorting}
                searchable={oProperties.searchable}
                grouping={oProperties?.grouping} />
            <div className="container">
                {_addContainer(oProperties)}
            </div>
            {_addPagination()}
        </StyledTable>
    )
}

