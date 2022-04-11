import { configureStore } from '@reduxjs/toolkit';

import containerNavReducer from './reducers/public/ContainerNav';
import sidebarNavReducer from './reducers/public/container/SidebarNav';

/** @public */
export const store = configureStore({
    reducer: {
        containerNav: containerNavReducer,
        sidebarNav: sidebarNavReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});