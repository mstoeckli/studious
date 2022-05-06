import React, { useState, useRef } from 'react';
import { useResizeHandler } from '../../hooks/ResizeHandler';

import { StyledTable } from '../../styles/base/Table.styles';

import { TableHeader } from './table/Header';
import { TableColumn } from './table/Column';
import { TableRow } from './table/Row';

import { PaginationBase } from './Pagination';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.tableKey
 *  @param   {string=} oProperties.title
 *  @param   {boolean=} oProperties.favorite
 *  @param   {boolean=} oProperties.searchable
 *  @param   {boolean=} oProperties.filterable
 *  @param   {boolean=} oProperties.groupable -> not supported at the moment!
 *  @param   {string=} oProperties.groupColumn
 *  @param   {boolean=} oProperties.multiSelect
 *  @param   {number=} oProperties.linesPerPage
 *  @param   {string=} oProperties.paginationAlignment -> left/center/right
 *  @param   {boolean=} oProperties.showNumberLine
 *  @param   {boolean=} oProperties.showContent
 *  @param   {JSX.Element=} oProperties.content
 *  @param   {[{key:string, title:string, sortable:boolean, ascending:boolean, fixed:boolean, isHidden:boolean, isDropdownActive:boolean, isCheckboxColumn:boolean}]} oProperties.columns
 *  @param   {[[{type:string, title:string, description:string, value:*, iconSrc:string, onClick:function, borderColor:string, backgroundColor:string}]]} oProperties.rows
 *  @param   {function=} oProperties.onCheckboxClicked
 *  @returns {JSX.Element} Table */
export const Table = (oProperties) => {
    /** @desc Throw console message when key property is missing */
    if (!oProperties.tableKey) throw "missing property tableKey";
    if (oProperties.groupable) throw "is not supported in the current version!";
    if (!oProperties.columns || !Array.isArray(oProperties.columns)) throw "missing property columns";
    if (!oProperties.rows || !Array.isArray(oProperties.rows)) throw "missing property rows";

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
    let iLineIdx = 0;

    /** @desc Defines the resize hook for changing the height of the table */
    useResizeHandler(tableHeaderRef, (oResizeObj) => setTableHeaderHeight((tableHeaderHeight) => oResizeObj.target.firstChild.offsetHeight + (oProperties.rows.length < iPerPage ? 40 : 70)));

    /** @private
     *  @returns {{width:string, minWidth:string}} */
    const _getStyleDefaultColumns = () => ({
        width: "40px",
        minWidth: "40px"
    });

    /** @private
     *  @param   {object} oProperties
     *  @returns {JSX.Element} */
    const _addContainer = (oProperties) => {
        return (
            <section style={{ height: "100%" }}>
                {_addTableContent(oProperties)}
            </section>
        );
    };

    /** @private
     *  @param   {object} oProperties
     *  @returns {JSX.Element} */
    const _addTableContent = (oProperties) => (
        <article>
            <table>
                {_addTableHeader(oProperties)}
                {_addTableBody(oProperties)}
            </table>
        </article>
    );

    /** @private
     *  @param   {object} oProperties
     *  @returns {JSX.Element} */
    const _addTableHeader = (oProperties) => (
        <thead>
            {_addColumns(oProperties)}
        </thead>
    );

    /** @private
     *  @param   {object} oProperties
     *  @param   {JSX.Element=} oProperties.content
     *  @param   {[{key:string, title:string, sortable:boolean, ascending:boolean, fixed:boolean, isHidden:boolean, isDropdownActive:boolean, isCheckboxColumn:boolean}]} oProperties.columns
     *  @param   {[[{type:string, title:string, description:string, value:*, iconSrc:string, onClick:function, borderColor:string, backgroundColor:string}]]} oProperties.rows
     *  @returns {JSX.Element} */
    const _addTableBody = (oProperties) => (
        <tbody>
            {oProperties.rows.length > 0
                ? oProperties.rows.slice(_indexFirst, _indexLast).map((aRow) => (
                    <>
                        {_addRow(oProperties, aRow)}
                        {oProperties?.content && oProperties.content && _addContent(oProperties.content, oProperties.columns.length)}
                    </>
                )) : waitFetchContent}
        </tbody>
    );

    /** @private
     *  @param   {object} oProperties
     *  @param   {string} oProperties.tableKey
     *  @param   {boolean=} oProperties.showLineNumber
     *  @param   {boolean=} oProperties.multiSelect
     *  @param   {JSX.Element=} oProperties.content
     *  @param   {[{key:string, title:string, sortable:boolean, ascending:boolean, fixed:boolean, isHidden:boolean, isDropdownActive:boolean, isCheckboxColumn:boolean}]} oProperties.columns
     *  @returns {JSX.Element} */
    const _addColumns = (oProperties) => (
        <tr>
            {oProperties?.showLineNumber && <TableColumn customStyle={_getStyleDefaultColumns()}/>}
            {oProperties?.content && oProperties.content && <TableColumn customStyle={_getStyleDefaultColumns()}/>}
            {oProperties?.multiSelect && <TableColumn
                align="center"
                customStyle={_getStyleDefaultColumns()}
                isCheckboxColumn={true}
                onCheckboxClicked={(oEvt) => {
                    debugger
                }}/>}
            {oProperties.columns.map((oColumn) => <TableColumn
                tableKey={oProperties.tableKey}
                column={oColumn}
                isCheckboxColumn={oColumn.isCheckboxColumn} />)}
        </tr>
    );

    /** @private
     *  @param   {object} oProperties
     *  @param   {string} oProperties.tableKey
     *  @param   {boolean=} oProperties.showLineNumber
     *  @param   {boolean=} oProperties.multiSelect
     *  @param   {JSX.Element=} oProperties.content
     *  @param   {[{key:string, title:string, sortable:boolean, ascending:boolean, fixed:boolean, isHidden:boolean, isDropdownActive:boolean, isCheckboxColumn:boolean}]} oProperties.columns
     *  @param   {function=} oProperties.onCheckboxClicked
     *  @param   {[{type:string, title:string, description:string, value:*, iconSrc:string, onClick:function, borderColor:string, backgroundColor:string}]} aRow
     *  @returns {JSX.Element} */
    const _addRow = (oProperties, aRow) => (
        <tr>
            {oProperties?.showLineNumber && _addRowShowLineNumber()}
            {oProperties?.content && oProperties.content && _addRowContent()}
            {oProperties?.multiSelect && _addRowMultiSelect(oProperties?.onCheckboxClicked)}
            {aRow.map((oRow, iCellIdx) => (
                <TableRow
                    tableKey={oProperties.tableKey}
                    attrColumnKey={oProperties.columns[iCellIdx].key}
                    align={oProperties.columns[iCellIdx]?.align}
                    row={oRow} />
            ))}
        </tr>
    );

    /** @private
     *  @param   {JSX.Element} content
     *  @param   {number} iColSpan
     *  @returns {JSX.Element} */
    const _addContent = (content, iColSpan) => (
        <tr className="row-content">
            <td colSpan={iColSpan}>
                {content}
            </td>
        </tr>
    );

    /** @private
     *  @returns {JSX.Element} */
    const _addRowShowLineNumber = () => (
        <TableRow
            align="center"
            row={{
                type: "Number",
                value: iLineIdx++
        }} />
    );

    /** @private
     *  @returns {JSX.Element} */
    const _addRowContent = () => (
        <TableRow
            align="center"
            row={{
                type: "Icon",
                iconSrc: "faChevronDown",
                onClick: (oEvt) => {
                    oEvt.target.parentElement.parentElement.parentElement.nextSibling.classList.toggle("row-content");
                    oEvt.target.parentElement.parentElement.parentElement.nextSibling.classList.toggle("row-content-hide");
                }
        }} />
    );

    /** @private
     *  @param   {function} fnCheckboxClicked
     *  @returns {JSX.Element} */
    const _addRowMultiSelect = (fnCheckboxClicked = () => {}) => (
        <TableRow
            align="center"
            row={{
                type: "Checkbox",
                iconSrc: "faChevronDown",
                onClick: (oEvt) => {
                    fnCheckboxClicked(oEvt);
                }
        }} />
    );

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

// /** @private
//  *  @param {Event} oEvt */
// const _onGroupHeaderClick = (oEvt) => {
//     oEvt.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle("group-close")
// };

// const _addTableGroupHeader = (oProperties) => (
//     <header className="expanded">
//         <div>
//             <FontAwesomeIcon
//                 icon={FaDuotoneIcons["faSquareChevronDown"]}
//                 onClick={_onGroupHeaderClick}/>
//             <span>Schweiz</span>
//         </div>
//         <FontAwesomeIcon icon={FaDuotoneIcons["faEllipsisVertical"]} />
//     </header>
// );

// return oProperties?.grouping && oProperties?.groupColumn
//     ? (
//         <div style={{ height: "100%", overflow: "auto" }}>
//             <section>
//                 {_addTableGroupHeader(oProperties)}
//                 {_addTableContent(oProperties)}
//             </section>
//         </div>
//     ) : (
//         <section style={{ height: "100%" }}>
//             {_addTableContent(oProperties)}
//         </section>
//     );