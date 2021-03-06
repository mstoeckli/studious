import { configureStore } from '@reduxjs/toolkit';

import containerNavReducer from './reducers/public/ContainerNav';
import sidebarNavReducer from './reducers/public/container/SidebarNav';
import tableConfigurationReducer from './reducers/base/table/Configuration';

/** @public */
export const store = configureStore({
    reducer: {
        containerNav: containerNavReducer,
        sidebarNav: sidebarNavReducer,
        tableConfiguration: tableConfigurationReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});