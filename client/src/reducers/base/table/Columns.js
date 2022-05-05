import { createSlice } from '@reduxjs/toolkit';

import { Columns } from '../../../models/base/table/Columns';

/** @public */
export const TableColumnsSlice = createSlice({
    name: "tableColumns",
    initialState: { value: Columns },
    reducers: {

    }
});

export const {  } = TableColumnsSlice.actions;
export default TableColumnsSlice.reducer;