import { configureStore } from '@reduxjs/toolkit';

import containerNavReducer from './reducers/public/ContainerNav';
import sidebarNavReducer from './reducers/public/container/SidebarNav';
import tableColumnsReducer from './reducers/base/table/Columns';

/** @public */
export const store = configureStore({
    reducer: {
        containerNav: containerNavReducer,
        sidebarNav: sidebarNavReducer,
        tableColumns: tableColumnsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});