import { createSlice } from '@reduxjs/toolkit';

/** @private
 *  @param {Proxy} state
 *  @param {array} state.value
 *  @param {object} action
 *  @param {string} action.type -> tableConfiguration/setDropdownActive
 *  @param {string} action.payload.key
 *  @param {string} action.payload.columnKey
 *  @param {boolean} action.payload.isActive  */
const _setDropdownVisibility = (state, action) => {
    state[action.payload.key].columns.map((oColumn) => {
        if (oColumn.key === action.payload.columnKey) {
            oColumn.isDropdownActive = action.payload.isActive;
        }
    });
};

/** @public */
export const TableConfigurationSlice = createSlice({
    name: "tableConfiguration",
    initialState: [],
    reducers: {
        /** @public
         *  @param {Proxy} state
         *  @param {object} action
         *  @param {string} action.type -> tableConfiguration/initialize
         *  @param {object} action.payload
         *  @param {string} action.payload.key
         *  @param {string=} action.payload.title
         *  @param {array} action.payload.columns
         *  @param {array} action.payload.rows
         *  @param {array} action.payload.content
         *  @param {object} action.payload.quickOptionsVisibility
         *  @param {object} action.payload.quickOptionsSettings
         *  @param {object} action.payload.pagination
         *  @param {object} action.payload.noDataText
         *  @param {object} action.payload.grouping
         *  @param {object} action.payload.resizing
         *  @param {[object]} action.payload.headerCards
         *  @param {boolean} action.payload.showHeader
         *  @param {boolean} action.payload.showLineNumber
         *  @param {boolean} action.payload.showLoader
         *  @param {boolean} action.payload.showMultiSelect
         *  @param {function} action.payload.onCheckBoxClicked */
        initialize: (state, action) => {
            return {
                ...state,
                [action.payload.key]: {
                    key: action.payload.key,
                    title: action.payload.title,
                    columns: action.payload.columns,
                    rows: action.payload.rows,
                    content: action.payload.content,
                    quickOptionsVisibility: action.payload.quickOptionsVisibility,
                    quickOptionsSettings: action.payload.quickOptionsSettings,
                    pagination: action.payload.pagination,
                    grouping: action.payload.grouping,
                    noDataText: action.payload.noDataText,
                    resizing: action.payload.resizing,
                    headerCards: action.payload.headerCards,
                    showHeader: action.payload.showHeader,
                    showLineNumber: action.payload.showLineNumber,
                    showLoader: action.payload.showLoader,
                    showMultiSelect: action.payload.showMultiSelect,
                    onCheckBoxClicked: action.payload.onCheckBoxClicked
                }
            }
        },

        /** @public
         *  @param {Proxy} state
         *  @param {object} action
         *  @param {string} action.type -> tableConfiguration/setRows
         *  @param {object} action.payload
         *  @param {string} action.payload.key
         *  @param {array} action.payload.rows */
        setRows: (state, action) => {
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    rows: action.payload.rows
                }
            }
        },

        /** @public
         *  @param {Proxy} state
         *  @param {object} action
         *  @param {string} action.type -> tableConfiguration/setPaginationIdx
         *  @param {object} action.payload
         *  @param {string} action.payload.key
         *  @param {number} action.payload.idxFirst
         *  @param {number} action.payload.idxLast */
        setPaginationIdx: (state, action) => {
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    pagination: {
                        ...state[action.payload.key].pagination,
                        idxFirst: action.payload.idxFirst,
                        idxLast: action.payload.idxLast
                    }
                }
            }
        },

        /** @public
         *  @param {Proxy} state
         *  @param {object} action
         *  @param {string} action.type -> tableConfiguration/setResizeInfo
         *  @param {object} action.payload
         *  @param {string} action.payload.key
         *  @param {number} action.payload.headerHeight */
        setResizeInfo: (state, action) => {
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    resizing: {
                        ...state[action.payload.key].resizing,
                        headerHeight: action.payload.headerHeight
                    }
                }
            }
        },

        /** @public
         *  @param {Proxy} state
         *  @param {array} state.value
         *  @param {object} action
         *  @param {string} action.type -> tableColumns/setHidden
         *  @param {string} action.payload.key
         *  @param {string} action.payload.columnKey
         *  @param {boolean} action.payload.isHidden  */
        setHidden: (state, action) => {
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    columns: state[action.payload.key].columns.map(
                        (oColumn) => oColumn.key === action.payload.columnKey
                            ? {...oColumn, isHidden: action.payload.isHidden}
                            : oColumn
                    )
                }
            }
        },

        /** @public
         *  @param {Proxy} state
         *  @param {array} state.value
         *  @param {object} action
         *  @param {string} action.type -> tableColumns/setDropdownActive
         *  @param {string} action.payload.key
         *  @param {string} action.payload.columnKey
         *  @param {boolean} action.payload.isActive  */
        setDropdownActive: (state, action) => _setDropdownVisibility(state, action),

        /** @public
         *  @param {Proxy} state
         *  @param {array} state.value
         *  @param {object} action
         *  @param {string} action.type -> tableColumns/isClickedOutside
         *  @param {objects} action.payload
         *  @param {string} action.payload.key
         *  @param {string} action.payload.columnKey
         *  @param {boolean} action.payload.isActive  */
        isClickedOutside: (state, action) => _setDropdownVisibility(state, action)
    }
});

export const { initialize, setRows, setPaginationIdx, setResizeInfo, setHidden, setDropdownActive, isClickedOutside } = TableConfigurationSlice.actions;
export default TableConfigurationSlice.reducer;