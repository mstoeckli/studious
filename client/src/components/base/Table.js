import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { StyledTable } from '../../styles/base/Table.styles';

import { initialize, setRows, setPaginationIdx, setResizeInfo } from '../../reducers/base/table/Configuration';

import { TableHeader } from './table/Header';
import { TableColumn } from './table/Column';
import { TableRow } from './table/Row';

import { Dialog } from "./messages/Dialog";

import { useAuth } from '../../context/AuthProvider';

import { create } from '../../assets/api/Customize';

import { Loader } from '../core/Loader';

import { Codes } from "../../models/core/messages/Codes";

import { getParentByInstance } from '../../helpers/Helper';
import { getQuickOptionsVisibility, getQuickOptionsEvents, getPagination, getResizing, getGrouping, getContent, getNoDataText } from '../../helpers/base/Table';

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
 *  @param   {boolean=} oProperties.quickOptionsVisibility.refresh
 *  @param   {boolean=} oProperties.quickOptionsVisibility.create
 *  @param   {boolean=} oProperties.quickOptionsVisibility.settings
 *  @param   {boolean=} oProperties.quickOptionsVisibility.customize
 *  @param   {boolean=} oProperties.quickOptionsVisibility.dateCalendar
 *  @param   {object=} oProperties.quickOptionsSettings -> { settings: { title: .... }} / Elements: searchable/filterable/groupable/favorite/newest/refresh/settings/customView/dateCalendar
 *  @param   {string} oProperties.quickOptionsSettings.title
 *  @param   {string=} oProperties.quickOptionsSettings.titleColor
 *  @param   {string} oProperties.quickOptionsSettings.iconSrc
 *  @param   {string=} oProperties.quickOptionsSettings.iconColor
 *  @param   {string=} oProperties.quickOptionsSettings.iconSolid
 *  @param   {string=} oProperties.quickOptionsSettings.backgroundColor
 *  @param   {string=} oProperties.quickOptionsSettings.borderColor
 *  @param   {object=} oProperties.quickOptionsEvents -> { refresh: () => {}} / Elements: refresh/search
 *  @param   {function} oProperties.quickOptionsEvents.refresh
 *  @param   {function} oProperties.quickOptionsEvents.search
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
 *  @param   {function=} oProperties.onRefreshClicked
 *  @param   {function=} oProperties.onSearch
 *  @returns {JSX.Element} Table */
export const Table = (oProperties) => {
    /** @desc Returns dispatcher function to call the actions inside the reducer
     *  @type {React.Dispatch} fnDispatch */
    const fnDispatch = useDispatch();

    /** @desc Returns global state value by redux toolkit
     *  @type {object} oConfiguration */
    let oConfiguration = useSelector((state) => state.tableConfiguration[oProperties.tableKey]);

    /** @desc Get user object to check if user is signed in */
    let { user } = useAuth();
    let bInitialCall = false;

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Used for displaying error dialog while fetching data from database
     *  @type {[error:{title:string, description:string}, setError:function]} */
    const [ error, setError ] = useState({});

    const [ configuration, setConfiguration ] = useState({
        loading: false,
        loaded: false
    });

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

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        if ((!oConfiguration && !configuration.loading && !configuration.loaded) || (oConfiguration && !oConfiguration.userLoaded && user !== null)) {
            /** @desc Set configuration status while loading/fetching user customizing */
            setConfiguration(() => ({
                loading: true,
                loaded: false
            }));

            /** @desc Fetching user customizing */
            _fetchCustomize()
        }
    }, []);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        /** @desc Update rows after fetching data */
        if (oProperties.rows.length > 0 && oConfiguration && JSON.stringify(oConfiguration.rows) !== JSON.stringify(oProperties.rows)) {
            fnDispatch(setRows({
                key: oConfiguration?.key ? oConfiguration.key : oProperties.tableKey,
                rows: bInitialCall ? oConfiguration.rows : oProperties.rows
            })); bInitialCall = true;
        }
    }, [JSON.stringify(oProperties.rows)])

    /** @private
     *  @param {array} aRows */
    const _onFilter = (aRows) => {
        debugger
        fnDispatch(setRows({
            key: oConfiguration.key,
            rows: aRows
        }));
    };

    /** @private */
    const _fetchCustomize = () => {
        /** @desc Check if user is signed in */
        if (user !== null) {
            /** @private
             *  @returns {Promise<*>} */
            const _fetch = async () => await create({
                user: user.userId,
                tables: {
                    key: oProperties.tableKey,
                    views: [_getStandardView()]
            }});

            /** @param {object} oFetchedObj
             *  @param {boolean} oFetchedObj.success
             *  @param {array} oFetchedObj.schools */
            _fetch()
            .then(async ({ success, data, url, message }) => {
                if (success) {
                    if (data.success) {
                        /** @desc Get customizing for current table object for reading active view */
                        const oCustomize = data.oCustomize.tables.find(({ key }) => key === oProperties.tableKey);
                        const oView = oCustomize.views.find(({ active }) => active === true);

                        /** @desc Initialize configuration object */
                        _initialize(oView.columns, oCustomize.views, true);

                        /** @desc Set configuration status while loading/fetching user customizing -> Fetching completed! */
                        setConfiguration(() => ({
                            loading: true,
                            loaded: true
                        }));
                    } else _setError({ message: `${data.message} - ${url}` });
                } else _setError({ message: `${message} - ${url}` });
            })
            .catch((oErr) => _setError(oErr));
        } else _initialize()
    };

    /** @private
     *  @param {array} aColumns
     *  @param {array} aViews
     *  @param {boolean} bUserLoaded */
    const _initialize = (aColumns = oProperties?.columns && Array.isArray(oProperties.columns) ? oProperties.columns : [], aViews = [_getStandardView()], bUserLoaded = false) => {
        fnDispatch(initialize({
            key: oProperties.tableKey,
            userLoaded: bUserLoaded,
            title: oProperties?.title,
            columns: aColumns,
            rows: bUserLoaded && oConfiguration ? oConfiguration.rows : oProperties?.rows && Array.isArray(oProperties.rows) ? oProperties.rows : [],
            views: aViews,
            content: getContent(oProperties?.content),
            quickOptionsVisibility: getQuickOptionsVisibility(oProperties?.quickOptionsVisibility),
            quickOptionsSettings: oProperties?.quickOptionsSettings ? oProperties.quickOptionsSettings : {},
            quickOptionsEvents: getQuickOptionsEvents(oProperties?.quickOptionsEvents),
            pagination: oConfiguration?.pagination ? oConfiguration.pagination : getPagination(oProperties?.pagination),
            grouping: getGrouping(oProperties?.grouping),
            noDataText: getNoDataText(oProperties?.noDataText),
            resizing: getResizing({ headerHeight: 0 }),
            headerCards: oProperties?.headerCards && Array.isArray(oProperties.headerCards) ? oProperties.headerCards : [],
            showHeader: oProperties?.showHeader ? oProperties.showHeader : false,
            showLineNumber: oProperties?.showLineNumber ? oProperties.showLineNumber : false,
            showLoader: oProperties?.showLoader ? oProperties.showLoader : false,
            showMultiSelect: oProperties?.showMultiSelect ? oProperties.showMultiSelect : false
        }));
    };

    /** @private
     *  @param {object} oErr
     *  @param {string} oErr.message */
    const _setError = ({ message }) => {
        setError((oError) => {
            return {
                ...oError,
                title: `${Codes["database-access"].key} - ${Codes["database-access"].text}`,
                description: message
            }
        });
    };

    /** @private
     *  @returns {{columns: ({key: string, title: string, sortable: boolean, searchable: boolean, ascending: boolean, fixed: boolean, isHidden: boolean, isDropdownActive: boolean, isCheckboxColumn: boolean}[]|*[]), active: boolean, title: string, key: string, order: *[]}}*/
    const _getStandardView = () => ({
        key: "S0",
        title: "Standard",
        active: true,
        columns: oProperties?.columns && Array.isArray(oProperties.columns) ? oProperties.columns : [],
        order: _getOrderStandardView()
    });

    /** @private
     *  @returns {[]} */
    const _getOrderStandardView = () => {
        const aOrder = [];
        for (const oColumn of oProperties.columns) {
            aOrder.push(oColumn.key);
        } return aOrder;
    }

    /** @private
     *  @returns {JSX.Element} */
    const _addContainer = () => {
        return (
            <section style={{ height: "100%" }}>
                <article>
                    <table>
                        <thead>
                            {_addColumns()}
                        </thead>
                        {_addTableBody()}
                    </table>
                </article>
            </section>
        );
    };

    /** @private
     *  @returns {JSX.Element} */
    const _addTableBody = () => {
        /** @desc Calculate col span columns for displaying sub content */
        const iColSpan = oConfiguration.columns.length + (oConfiguration.showLineNumber ? 1 : 0) + (oConfiguration.showMultiSelect ? 1 : 0) + (oConfiguration.content.jsxElement.length > 0 ? 1 : 0);

        return (
            <tbody>
                {oConfiguration.rows.length > 0
                    ? oConfiguration.pagination.active
                        ? oConfiguration.rows.slice(oConfiguration.pagination.idxFirst, oConfiguration.pagination.idxLast).map((aRow, iIdx) => _addRows(aRow, iIdx, iColSpan))
                        : oConfiguration.rows.map((aRow, iIdx) => _addRows(aRow, iIdx, iColSpan))
                    : _addRowNoDataFound(iColSpan)}
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
            {oConfiguration.columns.map((oColumn) => !oColumn.isHidden && <TableColumn
                tableKey={oConfiguration.key}
                column={oColumn}
                isCheckboxColumn={oColumn.isCheckboxColumn} />)}
        </tr>
    );

    const _addRows = (aRow, iIdx, iColSpan) => {
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
    };

    /** @private
     *  @param   {[{type:string, title:string, description:string, disabled:boolean, customStyle:object, value:*, iconSrc:string, onClick:function, borderColor:string, backgroundColor:string}]} aRow
     *  @returns {JSX.Element} */
    const _addRow = (aRow) => (
        <tr>
            {oConfiguration.showLineNumber && _addRowShowLineNumber()}
            {oConfiguration.content.jsxElement.length > 0 && _addRowContent()}
            {oConfiguration.showMultiSelect && _addRowMultiSelect(oProperties.onCheckboxClicked)}
            {aRow.map((oRow, iCellIdx) => (
                !oConfiguration.columns[iCellIdx].isHidden && <TableRow
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
            {oConfiguration && oConfiguration.showHeader && <TableHeader
                tableKey={oConfiguration.key}
                title={oConfiguration.title}
                views={oConfiguration.views}
                rows={oProperties.rows}
                columns={oConfiguration.columns}
                headerCards={oConfiguration.headerCards}
                quickOptionsVisibility={oConfiguration.quickOptionsVisibility}
                quickOptionsSettings={oConfiguration.quickOptionsSettings}
                quickOptionsEvents={oConfiguration.quickOptionsEvents}
                onFilter={_onFilter}/>}
            {oConfiguration && <div
                style={{ height: `calc(100% - ${oConfiguration.resizing.headerHeight}px)` }}
                className="container">
                {_addContainer()}
            </div>}
            {!oConfiguration && <Loader />}
            {oConfiguration && oProperties.showLoader && <Loader/>}
            {oConfiguration && oConfiguration.pagination.active && _addPagination()}
            {Object.keys(error).length !== 0 && error.constructor === Object && <Dialog
                title={error.title}
                description={error.description}
                messageType="E"
                showSupport={true} />}
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