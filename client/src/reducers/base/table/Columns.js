import { createSlice } from '@reduxjs/toolkit';

import { Columns } from '../../../models/base/table/Columns';

/** @private
 *  @param {Proxy} state
 *  @param {array} state.value
 *  @param {object} action
 *  @param {string} action.type -> tableColumns/setDropdownActive
 *  @param {string} action.payload.tableKey
 *  @param {string} action.payload.columnKey
 *  @param {boolean} action.payload.isActive  */
const _setDropdownVisibility = (state, action) => {
    state.value[action.payload.tableKey].map((oColumn) => {
        if (oColumn.key === action.payload.columnKey) {
            oColumn.isDropdownActive = action.payload.isActive;
        }
    });
};

/** @public */
export const TableColumnsSlice = createSlice({
    name: "tableColumns",
    initialState: { value: Columns },
    reducers: {
        setColumnVisibility: (state, action) => {

        },

        /** @public
         *  @param {Proxy} state
         *  @param {array} state.value
         *  @param {object} action
         *  @param {string} action.type -> tableColumns/setDropdownActive
         *  @param {string} action.payload.tableKey
         *  @param {string} action.payload.columnKey
         *  @param {boolean} action.payload.isActive  */
        setDropdownActive: (state, action) => _setDropdownVisibility(state, action),

        /** @public
         *  @param {Proxy} state
         *  @param {array} state.value
         *  @param {object} action
         *  @param {string} action.type -> tableColumns/isClickedOutside
         *  @param {objects} action.payload
         *  @param {string} action.payload.tableKey
         *  @param {string} action.payload.columnKey
         *  @param {boolean} action.payload.isActive  */
        isClickedOutside: (state, action) => _setDropdownVisibility(state, action)
    }
});

export const { setDropdownActive, isClickedOutside } = TableColumnsSlice.actions;
export default TableColumnsSlice.reducer;