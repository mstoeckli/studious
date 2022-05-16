import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { StyledTable } from '../../styles/base/Table.styles';

import { initialize, setRows, setPaginationIdx, setResizeInfo } from '../../reducers/base/table/Configuration';

import { TableHeader } from './table/Header';
import { TableColumn } from './table/Column';
import { TableRow } from './table/Row';

import { Loader } from "../core/Loader";

import { getParentByInstance } from '../../helpers/Helper';
import { getQuickOptionsVisibility, getPagination, getResizing, getGrouping, getContent, getNoDataText } from '../../helpers/base/Table';

import { PaginationBase } from './Pagination';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.tableKey
 *  @param   {string=} oProperties.title
 *  @param   {[{key:string, title:string, sortable:boolean, searchable:boolean, ascending:boolean, fixed:boolean, isHidden:boolean, isDropdownActive:boolean, isCheckboxColumn:boolean}]} oProperties.columns
 *  @param   {[[{type:string, title:string, description:string, disabled:boolean, customStyle:object, value:*, iconSrc:string, onClick:function, borderColor:string, backgroundColor:string}]]} oProperties.rows
 *  @param   {object} oProperties.content
 *  @param   {[JSX.Element=]} oProperties.content.jsxElement
 *  @param   {boolean=} oProperties.content.initialVisibility
 *  @param   {object=} oProperties.quickOptionsVisibility
 *  @param   {boolean=} oProperties.quickOptionsVisibility.searchable
 *  @param   {boolean=} oProperties.quickOptionsVisibility.filterable
 *  @param   {boolean=} oProperties.quickOptionsVisibility.groupable
 *  @param   {boolean=} oProperties.quickOptionsVisibility.favorite
 *  @param   {boolean=} oProperties.quickOptionsVisibility.newest
 *  @param   {boolean=} oProperties.quickOptionsVisibility.create
 *  @param   {boolean=} oProperties.quickOptionsVisibility.settings
 *  @param   {boolean=} oProperties.quickOptionsVisibility.customView
 *  @param   {boolean=} oProperties.quickOptionsVisibility.dateCalendar
 *  @param   {object=} oProperties.quickOptionsSettings -> { settings: { title: .... }} / Elements: searchable/filterable/groupable/favorite/newest/settings/customView/dateCalendar
 *  @param   {string} oProperties.quickOptionsSettings.title
 *  @param   {string=} oProperties.quickOptionsSettings.titleColor
 *  @param   {string} oProperties.quickOptionsSettings.iconSrc
 *  @param   {string=} oProperties.quickOptionsSettings.iconColor
 *  @param   {string=} oProperties.quickOptionsSettings.iconSolid
 *  @param   {string=} oProperties.quickOptionsSettings.backgroundColor
 *  @param   {string=} oProperties.quickOptionsSettings.borderColor
 *  @param   {object=} oProperties.pagination
 *  @param   {boolean=} oProperties.pagination.active
 *  @param   {number=} oProperties.pagination.idxFirst
 *  @param   {number=} oProperties.pagination.idxLast
 *  @param   {number=} oProperties.pagination.perPage
 *  @param   {string=} oProperties.pagination.alignment -> left/center/right
 *  @param   {object=} oProperties.grouping
 *  @param   {boolean=} oProperties.grouping.active
 *  @param   {string} oProperties.grouping.columnKey
 *  @param   {object=} oProperties.noDataText
 *  @param   {string=} oProperties.noDataText.title
 *  @param   {string} oProperties.noDataText.description
 *  @param   {string} oProperties.noDataText.iconSrc
 *  @param   {[object]=} oProperties.headerCards
 *  @param   {string} oProperties.headerCards.iconSrc
 *  @param   {string} oProperties.headerCards.title
 *  @param   {string} oProperties.headerCards.info
 *  @param   {string=} oProperties.headerCards.backgroundColor
 *  @param   {string=} oProperties.headerCards.borderColor
 *  @param   {boolean=} oProperties.showHeader
 *  @param   {boolean=} oProperties.showLineNumber
 *  @param   {boolean=} oProperties.showLoader
 *  @param   {boolean=} oProperties.showMultiSelect
 *  @param   {function=} oProperties.onCheckboxClicked
 *  @returns {JSX.Element} Table */
export const Table = (oProperties) => {
    /** @desc Returns dispatcher function to call the actions inside the reducer
     *  @type {React.Dispatch} fnDispatch */
    const fnDispatch = useDispatch();

    /** @desc Returns global state value by redux toolkit
     *  @type {object} oConfiguration */
    let oConfiguration = useSelector((state) => state.tableConfiguration[oProperties.tableKey]);

    /** @desc Initialize configuration object */
    if (!oConfiguration) {
        fnDispatch(initialize({
            key: oProperties.tableKey,
            title: oProperties?.title,
            columns: oProperties?.columns && Array.isArray(oProperties.columns) ? oProperties.columns : [],
            rows: oProperties?.rows && Array.isArray(oProperties.rows) ? oProperties.rows : [],
            content: getContent(oProperties?.content),
            quickOptionsVisibility: getQuickOptionsVisibility(oProperties?.quickOptionsVisibility),
            quickOptionsSettings: oProperties?.quickOptionsSettings ? oProperties.quickOptionsSettings : {},
            pagination: getPagination(oProperties?.pagination),
            grouping: getGrouping(oProperties?.grouping),
            noDataText: getNoDataText(oProperties?.noDataText),
            resizing: getResizing({ headerHeight: 0 }),
            headerCards: oProperties?.headerCards && Array.isArray(oProperties.headerCards) ? oProperties.headerCards : [],
            showHeader: oProperties?.showHeader ? oProperties.showHeader : false,
            showLineNumber: oProperties?.showLineNumber ? oProperties.showLineNumber : false,
            showLoader: oProperties?.showLoader ? oProperties.showLoader : false,
            showMultiSelect: oProperties?.showMultiSelect ? oProperties.showMultiSelect : false,
            onCheckBoxClicked: oProperties?.onCheckboxClicked && typeof oProperties.onCheckboxClicked === "function" ? oProperties.onCheckboxClicked : () => {}
        }));
    }

    /** @desc Update rows after fetching data */
    if (oProperties.rows.length > 0 && oConfiguration.rows.length === 0) fnDispatch(setRows({
        key: oConfiguration.key,
        rows: oProperties.rows
    }));

    /** @desc Returns global state value by redux toolkit
     *  @type {object} oConfiguration */
    oConfiguration = useSelector((state) => state.tableConfiguration[oProperties.tableKey]);

    /** @desc Pre-checks */
    if (!oConfiguration.key) throw "missing property tableKey";
    if (oConfiguration.grouping.active) throw "grouping is not supported in the current version!";

    /** @desc Initialize reference object for setting object pagination */
    const paginationRefObj = useRef(null);

    /** @desc Initialize reference object for updating the style "height" for displaying table content correctly */
    const headerRefObj = useRef(null);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        /** @desc Dispatch it once mounted */
        if (headerRefObj) {
            /** @desc Call resize event manually */
            headerRefObj?.current.dispatchEvent(new Event("resize"));
        }
    }, [headerRefObj]);

    if (headerRefObj?.current) {
        /** @desc Defines the resize hook for changing the height of the table */
        headerRefObj.current.addEventListener("resize", (oEvt) => {
            fnDispatch(setResizeInfo({
                key: oConfiguration.tableKey,
                headerHeight: oEvt.target.firstChild.offsetHeight + (oConfiguration.pagination.active && oConfiguration.rows.length > oConfiguration.pagination.perPage ? 70 : 40)
            }));
        });
    }

    /** @private
     *  @returns {JSX.Element} */
    const _addContainer = () => {
        return (
            <section style={{ height: "100%" }}>
                {_addTableContent()}
            </section>
        );
    };

    /** @private
     *  @returns {JSX.Element} */
    const _addTableContent = () => (
        <article>
            <table>
                {_addTableHeader()}
                {_addTableBody()}
            </table>
        </article>
    );

    /** @private
     *  @returns {JSX.Element} */
    const _addTableHeader = () => (
        <thead>
            {_addColumns()}
        </thead>
    );

    /** @private
     *  @returns {JSX.Element} */
    const _addTableBody = () => {
        /** @desc Calculate col span columns for displaying sub content */
        const iColSpan = oConfiguration.columns.length + (oConfiguration.showLineNumber ? 1 : 0) + (oConfiguration.showMultiSelect ? 1 : 0) + (oConfiguration.content.jsxElement.length > 0 ? 1 : 0);

        return (
            <tbody>
                {oConfiguration.rows.length > 0 ? oConfiguration.rows.slice(oConfiguration.pagination.idxFirst, oConfiguration.pagination.idxLast).map((aRow, iIdx) => {
                    /** @desc Determine the JSX for displaying additional row content */
                    const content = Array.isArray(oConfiguration.content.jsxElement) && oConfiguration.content.jsxElement[iIdx]
                        ? oConfiguration.content.jsxElement[iIdx]
                        : <span>Leider stehen Ihnen hierzu keine Daten zur Verfügung</span>;

                    return (
                        <>
                            {_addRow(aRow)}
                            {Array.isArray(oConfiguration.content.jsxElement) && oConfiguration.content.jsxElement.length > 0 && _addContent(content, iColSpan)}
                        </>
                    )
                }) : _addRowNoDataFound(iColSpan)}
            </tbody>
        );
    }

    /** @private
     *  @returns {JSX.Element} */
    const _addColumns = () => (
        <tr>
            {oConfiguration.showLineNumber && <TableColumn />}
            {oConfiguration.content.jsxElement.length > 0 && <TableColumn />}
            {oConfiguration.showMultiSelect && <TableColumn
                align="center"
                isCheckboxColumn={true}
                onCheckboxClicked={(oEvt) => {}}/>}
            {oConfiguration.columns.map((oColumn) => <TableColumn
                tableKey={oConfiguration.key}
                column={oColumn}
                isCheckboxColumn={oColumn.isCheckboxColumn} />)}
        </tr>
    );

    /** @private
     *  @param   {[{type:string, title:string, description:string, disabled:boolean, customStyle:object, value:*, iconSrc:string, onClick:function, borderColor:string, backgroundColor:string}]} aRow
     *  @returns {JSX.Element} */
    const _addRow = (aRow) => (
        <tr>
            {oConfiguration.showLineNumber && _addRowShowLineNumber()}
            {oConfiguration.content.jsxElement.length > 0 && _addRowContent()}
            {oConfiguration.showMultiSelect && _addRowMultiSelect(oConfiguration.onCheckboxClicked)}
            {aRow.map((oRow, iCellIdx) => (
                <TableRow
                    tableKey={oConfiguration.key}
                    attrColumnKey={oConfiguration.columns[iCellIdx].key}
                    align={oConfiguration.columns[iCellIdx]?.align}
                    row={oRow} />
            ))}
        </tr>
    );

    /** @private
     *  @param   {number} iColSpan
     *  @returns {JSX.Element} */
    const _addRowNoDataFound = (iColSpan) => (
        <tr>
            <TableRow
                colSpan={iColSpan}
                align="center"
                row={{
                    type: "Identifier",
                    iconSrc: oConfiguration.noDataText.iconSrc,
                    title: oConfiguration.noDataText.title,
                    description: oConfiguration.noDataText.description,
                    flexDirection: oConfiguration.noDataText.flexDirection
                }}/>
        </tr>
    );

    /** @private
     *  @param   {JSX.Element} content
     *  @param   {number} iColSpan
     *  @returns {JSX.Element} */
    const _addContent = (content, iColSpan) => (
        <tr className={oConfiguration.content.initialVisibility ? "row-content" : "row-content-hide"}>
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
                value: 0
        }} />
    );

    /** @private
     *  @returns {JSX.Element} */
    const _addRowContent = () => (
        <TableRow
            align="center"
            row={{
                type: "Icon",
                iconSrc: "faArrowsFromDottedLine",
                onClick: (oEvt) => {
                    /** @desc Get parent element by selector for showing/hiding row content */
                    const oParentElement = getParentByInstance(oEvt.target.parentElement, HTMLTableRowElement);
                    oParentElement.nextElementSibling.classList.toggle("row-content");
                    oParentElement.nextElementSibling.classList.toggle("row-content-hide");
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
    const _addPagination = () => (
        <PaginationBase
            ref={paginationRefObj}
            perPage={oConfiguration.pagination.perPage}
            data={oConfiguration.rows}
            customStyle={{ display: "flex", justifyContent: oConfiguration.pagination.alignment, alignItems: "center" }}
            onIndexCalculated={(iIndexLast, iIndexFirst) => {
                /** @desc Update pagination information */
                fnDispatch(setPaginationIdx({
                    key: oConfiguration.key,
                    idxFirst: iIndexFirst,
                    idxLast: iIndexLast
                }));
            }} />
    );

    return (
        <StyledTable ref={headerRefObj}>
            {oConfiguration.showHeader && <TableHeader
                title={oProperties.title}
                headerCards={oConfiguration.headerCards}
                quickOptionsVisibility={oConfiguration.quickOptionsVisibility}
                quickOptionsSettings={oConfiguration.quickOptionsSettings}/>}
            <div
                style={{ height: `calc(100% - ${oConfiguration.resizing.headerHeight}px)` }}
                className="container">
                {_addContainer()}
            </div>
            {oProperties.showLoader && <Loader/>}
            {_addPagination()}
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