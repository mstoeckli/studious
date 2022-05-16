import { createSlice } from '@reduxjs/toolkit';

import { Columns } from '../../../models/base/table/Columns';

/** @public */
export const TableColumnsSlice = createSlice({
    name: "tableConfiguration",
    initialState: { value: [] },
    reducers: {

    }
});

export const { setDropdownActive, isClickedOutside } = TableColumnsSlice.actions;
export default TableColumnsSlice.reducer;