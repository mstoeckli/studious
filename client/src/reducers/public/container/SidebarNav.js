import { createSlice } from '@reduxjs/toolkit';

import { SidebarNav } from '../../../models/public/container/SidebarNav';

/** @public */
export const SidebarNavSlice = createSlice({
    name: "sidebarNav",
    initialState: { value: SidebarNav },
    reducers: {
        /** @public
         *  @param {Proxy} state
         *  @param {array} state.value
         *  @param {object} action
         *  @param {string} action.type -> sidebarNav/setActivityClass
         *  @param {object} action.payload
         *  @param {number} action.payload.key
         *  @param {number} action.payload.keyGroup
         *  @param {string} action.payload.title
         *  @param {string} action.payload.icon
         *  @param {boolean} action.payload.isActive
         *  @param {string=} action.payload.contentKey */
        setActivityClass: (state, action) => {
            state.value.map((oGroup) => {
                oGroup.hasNavMenu && oGroup.navMenu.map((oNavMenu) => {
                    oNavMenu.isActive = oNavMenu.key === action.payload.key;
                });
            });
        }
    }
});

export const { setActivityClass } = SidebarNavSlice.actions;
export default SidebarNavSlice.reducer;