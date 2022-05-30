/** @public
 *  @param   {object} oContent
 *  @param   {[JSX.Element]} oContent.jsxElement
 *  @param   {boolean=} oContent.initialVisibility
 *  @returns {object} */
export const getContent = (oContent = {}) => ({
    jsxElement: oContent?.jsxElement ? Array.isArray(oContent.jsxElement) ? oContent.jsxElement : [] : [],
    initialVisibility: oContent?.initialVisibility ? oContent.initialVisibility : false,
});

/** @public
 *  @param   {object} oNoDataText
 *  @param   {string=} oNoDataText.title
 *  @param   {string=} oNoDataText.description
 *  @param   {string=} oNoDataText.iconSrc
 *  @param   {string=} oNoDataText.flexDirection -> row/column
 *  @returns {object} */
export const getNoDataText = (oNoDataText = {}) => ({
    title: oNoDataText?.title ? oNoDataText.title : "Oops. It looks like the database fall asleep or ... ",
    description: oNoDataText?.description ? oNoDataText.description : "... you got lost while filtering the data",
    iconSrc: oNoDataText?.iconSrc ? oNoDataText.iconSrc : "faServer",
    flexDirection: oNoDataText?.flexDirection ? oNoDataText.flexDirection : "column"
});

/** @public
 *  @param   {object} oQuickOptions
 *  @param   {boolean} oQuickOptions.searchable
 *  @param   {boolean} oQuickOptions.filterable
 *  @param   {boolean} oQuickOptions.groupable
 *  @param   {boolean} oQuickOptions.favorite
 *  @param   {boolean} oQuickOptions.newest
 *  @param   {boolean} oQuickOptions.refresh
 *  @param   {boolean} oQuickOptions.create
 *  @param   {boolean} oQuickOptions.settings
 *  @param   {boolean} oQuickOptions.customize
 *  @param   {boolean} oQuickOptions.datepicker
 *  @returns {object} */
export const getQuickOptionsVisibility = (oQuickOptions = {}) => ({
    searchable: oQuickOptions?.searchable ? oQuickOptions.searchable : true,
    filterable: oQuickOptions?.filterable ? oQuickOptions.filterable : true,
    groupable: oQuickOptions?.groupable ? oQuickOptions.groupable : false,
    favorite: oQuickOptions?.favorite ? oQuickOptions.favorite : false,
    newest: oQuickOptions?.newest ? oQuickOptions.newest : false,
    refresh: oQuickOptions?.refresh ? oQuickOptions.refresh : false,
    create: oQuickOptions?.create ? oQuickOptions.create : false,
    settings: oQuickOptions?.settings ? oQuickOptions.settings : true,
    customize: oQuickOptions?.customize ? oQuickOptions.customize : true,
    datepicker: oQuickOptions?.datepicker ? oQuickOptions.datepicker : false
});

/** @public
 *  @desc    Without callback: Does not need a default callback function, because the initial callback is defined in TableHeader.js
 *  @param   {object=} oQuickOptions
 *  @param   {function} oQuickOptions.searchable
 *  @param   {function} oQuickOptions.filterable
 *  @param   {function} oQuickOptions.groupable
 *  @param   {function} oQuickOptions.favorite
 *  @param   {function} oQuickOptions.newest
 *  @param   {function} oQuickOptions.refresh
 *  @param   {function} oQuickOptions.create
 *  @param   {function} oQuickOptions.settings
 *  @param   {function} oQuickOptions.customize
 *  @param   {function} oQuickOptions.datepicker
 *  @returns {object} */
export const getQuickOptionsEvents = (oQuickOptions = {}) => ({
    searchable: oQuickOptions?.searchable,
    filterable: oQuickOptions?.filterable,
    groupable: oQuickOptions?.groupable,
    favorite: oQuickOptions?.favorite,
    newest: oQuickOptions?.newest,
    refresh: oQuickOptions?.refresh ? oQuickOptions.refresh : () => {},
    create: oQuickOptions?.create ? oQuickOptions.create : () => {},
    settings: oQuickOptions?.settings,
    customize: oQuickOptions?.customize,
    datepicker: oQuickOptions?.datepicker
});

/** @public
 *  @param   {object} oPagination
 *  @param   {boolean=} oPagination.active
 *  @param   {number=} oPagination.idxFirst
 *  @param   {number=} oPagination.idxLast
 *  @param   {number=} oPagination.perPage
 *  @param   {string=} oPagination.alignment -> left/center/right
 *  @returns {object} */
export const getPagination = (oPagination = {}) => ({
    active: oPagination?.active ? oPagination.active : false,
    idxFirst: oPagination?.idxFirst ? oPagination.idxFirst : 0,
    idxLast: oPagination?.idxLast ? oPagination.idxLast : 0,
    perPage: oPagination?.perPage ? oPagination.perPage : 20,
    alignment: oPagination?.alignment ? oPagination.alignment : "center"
});

/** @public
 *  @param   {object} oGrouping
 *  @param   {boolean=} oGrouping.active
 *  @param   {string} oGrouping.columnKey
 *  @returns {object} */
export const getGrouping = (oGrouping = {}) => ({
    active: oGrouping?.active ? oGrouping.active : false,
    columnKey: oGrouping?.columnKey
});

/** @public
 *  @param   {object=} oResizing
 *  @param   {number} oResizing.headerHeight
 *  @param   {number} oResizing.tableHeight
 *  @param   {number} oResizing.headerHeightCustom
 *  @returns {object} */
export const getResizing = (oResizing = {}) => ({
    headerHeight: oResizing?.headerHeight ? oResizing.headerHeight : 0,
    tableHeight: oResizing?.tableHeight ? oResizing.tableHeight : 0,
    headerHeightCustom: oResizing?.headerHeightCustom ? oResizing.headerHeightCustom : 0,
});

/** @public
 *  @param   {object=} oFilterValues
 *  @param   {boolean} oFilterValues.isActive
 *  @param   {string} oFilterValues.searchValue
 *  @param   {number} oFilterValues.filters
 *  @param   {array} oFilterValues.filteredRows
 *  @returns {object} */
export const getFilterValues = (oFilterValues) => ({
    isActive: oFilterValues?.isActive ? oFilterValues.isActive : false,
    searchValue: oFilterValues?.searchValue ? oFilterValues.searchValue : String(),
    filters: oFilterValues?.filters ? oFilterValues.filters : [],
    filteredRows: oFilterValues?.filteredRows ? oFilterValues.filteredRows : []
});