import { configureStore } from '@reduxjs/toolkit';

import containerNavReducer from './reducers/public/ContainerNav';
import sidebarNavReducer from './reducers/public/container/SidebarNav';
import tableConfigurationReducer from './reducers/base/table/Configuration';
import tableColumnsReducer from './reducers/base/table/Columns';

/** @public */
export const store = configureStore({
    reducer: {
        containerNav: containerNavReducer,
        sidebarNav: sidebarNavReducer,
        tableConfiguration: tableConfigurationReducer,
        tableColumns: tableColumnsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});