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
 *  @param   {boolean} oQuickOptions.create
 *  @param   {boolean} oQuickOptions.settings
 *  @param   {boolean} oQuickOptions.customize
 *  @param   {boolean} oQuickOptions.dateCalendar
 *  @returns {object} */
export const getQuickOptionsVisibility = (oQuickOptions = {}) => ({
    searchable: oQuickOptions?.searchable ? oQuickOptions.searchable : true,
    filterable: oQuickOptions?.filterable ? oQuickOptions.filterable : true,
    groupable: oQuickOptions?.groupable ? oQuickOptions.groupable : false,
    favorite: oQuickOptions?.favorite ? oQuickOptions.favorite : false,
    newest: oQuickOptions?.newest ? oQuickOptions.newest : false,
    create: oQuickOptions?.create ? oQuickOptions.create : false,
    settings: oQuickOptions?.settings ? oQuickOptions.settings : true,
    customize: oQuickOptions?.customize ? oQuickOptions.customize : true,
    dateCalendar: oQuickOptions?.dateCalendar ? oQuickOptions.dateCalendar : false
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
 *  @param   {object} oResizing
 *  @param   {number} oResizing.headerHeight
 *  @returns {object} */
export const getResizing = (oResizing = {}) => ({
    headerHeight: oResizing?.headerHeight ? oResizing.headerHeight : 0,
});