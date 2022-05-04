import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledTable } from '../../styles/base/Table.styles';

import { TableHeader } from './table/Header';
import { Identifier } from './table/template/Identifier';
import { Number } from './table/template/Number';
import { Status } from './table/template/Status';
import { Email } from './table/template/Email';

import { Dropdown } from './dropdown/Dropdown';

import { PaginationBase } from './Pagination';

import { FormCheckbox } from './forms/Checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/pro-solid-svg-icons';
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
     *  @param   {boolean=} oProperties.showContent
     *  @param   {boolean=} oProperties.multiSelect
     *  @returns {JSX.Element} */
    const _addColumns = (oProperties) => {
        return (
            <tr>
                {oProperties?.showLineNumber && <th className="show-line-number"/>}
                {oProperties?.multiSelect && <th className="align-center multi-select-checkbox">
                    <FormCheckbox />
                </th>}
                {oProperties.showContent && <th className="show-content-icon"/>}
                <th>
                    <span>Schule</span>
                    <FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />
                </th>
                <th>
                    <span>Administrator</span>
                    <FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />
                </th>
                <th>
                    <span>Beitrittsdatum</span>
                    <FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />
                </th>
                <th className="align-center">
                    <span>Klassen-Lehrer</span>
                    {/*<FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />*/}
                </th>
                <th className="align-center">
                    <span>Fach-Lehrer</span>
                    {/*<FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />*/}
                </th>
                <th className="align-center">
                    <span>Schüler</span>
                    {/*<FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />*/}
                </th>
                <th>
                    <span>Abonnement</span>
                    <FontAwesomeIcon icon={FaDuotoneIcons["faFilters"]} />
                </th>
            </tr>
        )
    };

    /** @private
     *  @param   {object} oProperties
     *  @param   {boolean=} oProperties.showLineNumber
     *  @param   {boolean=} oProperties.showContent
     *  @param   {boolean=} oProperties.multiSelect
     *  @returns {JSX.Element} */
    const _addRow = (oProperties) => {
        return (
            <tr>
                {oProperties?.showLineNumber && <td className="align-center show-line-number">
                    <Number numberValue="2"/>
                </td>}
                {oProperties?.multiSelect && <td className="align-center">
                    <FormCheckbox />
                </td>}
                {oProperties.showContent && <td className="show-content-icon align-center">
                    <FontAwesomeIcon icon={FaSolidIcons["faChevronDown"]} />
                </td>}
                <td>
                    <Identifier
                        title="Grundschule Fislisbach"
                        description="Feldstrasse 31g, 5442 Fislisbach, Switzerland" />
                </td>
                <td>
                    <Email address="hanspeter.mueller@schule.ch" />
                </td>
                <td>
                    31.12.2021
                </td>
                <td className="align-center">
                    <Number numberValue="10"/>
                </td>
                <td className="align-center">
                    <Number numberValue="6"/>
                </td>
                <td className="align-center">
                    <Number numberValue="67"/>
                </td>
                <td>
                    <Status
                        title="Free"
                        icon="faSackDollar"
                        borderColor="#d3366e"
                        backgroundColor="#d885a3" />
                </td>
            </tr>
        )
    };

    const _addRowContent = () => {
        return (
            <tr>
                <td colSpan="5">
                    <div>
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

