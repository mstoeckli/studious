import React, { useState, useRef } from 'react';
import { useResizeHandler } from '../../hooks/ResizeHandler';

import { StyledTable } from '../../styles/base/Table.styles';

import { TableHeader } from './table/Header';
import { TableColumn } from './table/Column';
import { TableRow } from './table/Row';
import { Number } from './table/template/Number';

import { PaginationBase } from './Pagination';

import { FormCheckbox } from './forms/Checkbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaSolidIcons from '@fortawesome/pro-solid-svg-icons';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.tableKey
 *  @param   {string=} oProperties.title
 *  @param   {boolean=} oProperties.favorite
 *  @param   {boolean=} oProperties.searchable
 *  @param   {boolean=} oProperties.filterable
 *  @param   {boolean=} oProperties.groupable
 *  @param   {string=} oProperties.groupColumn
 *  @param   {boolean=} oProperties.multiSelect
 *  @param   {number=} oProperties.linesPerPage
 *  @param   {string=} oProperties.paginationAlignment -> left/center/right
 *  @param   {boolean=} oProperties.showNumberLine
 *  @param   {boolean=} oProperties.showContent
 *  @param   {[{title:string, filterable: boolean, fixed: boolean, align: string}]} oProperties.columns
 *  @param   {{jsx:JSX.Element, align: string}} oProperties.rows
 *  @returns {JSX.Element} Table */
export const Table = (oProperties) => {
    /** @desc Throw console message when key property is missing */
    if (!oProperties.tableKey) throw "missing property tableKey"

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Store pagination indexes
     *  @type {[_indexFirst:number, _setIndexFirst:function]}
     *  @type {[_indexLast:number, _setIndexLast:function]} */
    const [ _indexFirst, _setIndexFirst ] = useState(0);
    const [ _indexLast, _setIndexLast ] = useState(0);

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update table height for displaying content and enable the correct scrolling inside
     *  @type {[sectionHeaderHeight:number, setSectionHeaderHeight:function]} */
    const [ tableHeaderHeight, setTableHeaderHeight ] = useState(0);



    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update content while fetching data from backend system
     *  @type {[waitFetchContent:JSX.Element, setWaitFetchContent:function]} */
    const [ waitFetchContent, setWaitFetchContent ] = useState(<div />);



    /** @desc Initialize reference object for setting object pagination */
    const paginationRefreshRef = useRef(null);

    /** @desc Initialize reference object for updating the style "height" for displaying table content correctly */
    const tableHeaderRef = useRef(null);

    /** @desc Entries per page */
    const iPerPage = oProperties?.linesPerPage ? oProperties.linesPerPage : 20;

    /** @desc Cumulate fixed default columns by checking if property is supplied and value equals true or not supplied */
    let iFixedColumns = 0;
    ["showLineNumber", "showContent", "multiSelect"].forEach((sKey) => {
        if (oProperties[sKey]) {
            iFixedColumns++;
        }
    });

    /** @desc Defines the resize hook for changing the height of the table */
    useResizeHandler(tableHeaderRef, (oResizeObj) => setTableHeaderHeight((tableHeaderHeight) => oResizeObj.target.firstChild.offsetHeight + (oProperties.rows.length < iPerPage ? 40 : 70)));




    /** @private
     *  @param {Event} oEvt */
    const _onGroupHeaderClick = (oEvt) => {
        oEvt.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle("group-close")
    };


    const _addContainer = (oProperties) => {
        return oProperties?.grouping && oProperties?.groupColumn
            ? (
                <div style={{ height: "100%", overflow: "auto" }}>
                    <section>
                        {_addTableGroupHeader(oProperties)}
                        {_addTableContent(oProperties)}
                    </section>
                </div>
            ) : (
                <section style={{ height: "100%" }}>
                    {_addTableContent(oProperties)}
                </section>
            );
    };





    const _addTableGroupHeader = (oProperties) => (
        <header className="expanded">
            <div>
                <FontAwesomeIcon
                    icon={FaDuotoneIcons["faSquareChevronDown"]}
                    onClick={_onGroupHeaderClick}/>
                <span>Schweiz</span>
            </div>
            <FontAwesomeIcon icon={FaDuotoneIcons["faEllipsisVertical"]} />
        </header>
    );

    const _addTableContent = (oProperties) => (
        <article>
            <table>
                <thead>
                    {_addColumns(oProperties)}
                </thead>
                <tbody>
                    {oProperties.rows.length > 0
                        ? oProperties.rows.slice(_indexFirst, _indexLast).map((aRow, iIdx) => (
                            <>
                                {_addRow(oProperties, aRow, iIdx + 1 )}
                                {oProperties?.showContent && _addRowContent()}
                            </>
                        )) : waitFetchContent
                    }
                </tbody>
            </table>
        </article>
    );

    /** @private
     *  @param   {object} oProperties
     *  @param   {string} oProperties.tableKey
     *  @param   {boolean=} oProperties.showLineNumber
     *  @param   {boolean=} oProperties.showContent
     *  @param   {boolean=} oProperties.multiSelect
     *  @param   {[{}]} oProperties.columns
     *  @returns {JSX.Element} */
    const _addColumns = (oProperties) => (
        <tr>
            {oProperties?.showLineNumber && <TableColumn customStyle={_getStyleDefaultColumns()}/>}
            {oProperties?.showContent && <TableColumn customStyle={_getStyleDefaultColumns()}/>}
            {oProperties?.multiSelect && <TableColumn
                align="center"
                customStyle={_getStyleDefaultColumns()}>
                <FormCheckbox />
            </TableColumn>}
            {oProperties.columns.map((oColumn) => <TableColumn
                tableKey={oProperties.tableKey}
                column={oColumn}
                defaultColumnsFixed={iFixedColumns}/>)}
        </tr>
    );

    /** @private
     *  @param   {object} oProperties
     *  @param   {string} oProperties.tableKey
     *  @param   {boolean=} oProperties.showLineNumber
     *  @param   {boolean=} oProperties.showContent
     *  @param   {boolean=} oProperties.multiSelect
     *  @param   {[{key:string}]} oProperties.columns
     *  @param   {[{}]} aRow
     *  @param   {number} iIdx
     *  @returns {JSX.Element} */
    const _addRow = (oProperties, aRow, iIdx) => (
        <tr>
            {oProperties.showLineNumber && <td className="align-center show-line-number"><Number numberValue={iIdx} /></td>}
            {oProperties.showContent && <td className="show-content-icon align-center"><FontAwesomeIcon icon={FaSolidIcons["faChevronDown"]} /></td>}
            {oProperties.multiSelect && <td className="align-center"><FormCheckbox /></td>}
            {aRow.map((oRow, iCellIdx) => (
                <TableRow
                    tableKey={oProperties.tableKey}
                    attrColumnKey={oProperties.columns[iCellIdx].key}
                    align={oProperties.columns[iCellIdx]?.align}
                    row={oRow} />
            ))}
        </tr>
    );

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
     *  @returns {JSX.Element} */
    const _addPagination = (aRows, sJustifyContent = "center") => (
        <PaginationBase
            ref={paginationRefreshRef}
            perPage={iPerPage}
            data={aRows}
            customStyle={{ display: "flex", justifyContent: sJustifyContent, alignItems: "center" }}
            onIndexCalculated={(iIndexLast, iIndexFirst) => {
                _setIndexFirst((_indexFirst) => iIndexFirst);
                _setIndexLast((_indexLast) => iIndexLast);
            }} />
    );

    /** @private
     *  @returns {{width: string, minWidth: string}} */
    const _getStyleDefaultColumns = () => ({
        width: "40px",
        minWidth: "40px"
    });

    return (
        <StyledTable ref={tableHeaderRef}>
            <TableHeader
                title={oProperties.title}
                favorite={oProperties?.favorite}
                searchable={oProperties?.searchable}
                filterable={oProperties?.filterable}
                groupable={oProperties?.groupable} />
            <div
                style={{ height: `calc(100% - ${tableHeaderHeight}px)` }}
                className="container">
                {_addContainer(oProperties)}
            </div>
            {!oProperties?.groupable && _addPagination(oProperties.rows, oProperties.paginationAlignment)}
        </StyledTable>
    )
}