import { createSlice } from '@reduxjs/toolkit';

import { ContainerNav } from '../../models/public/ContainerNav';

/** @public */
export const ContainerNavSlice = createSlice({
    name: "containerNav",
    initialState: { value: ContainerNav },
    reducers: {
        /** @public
         *  @param {Proxy} state
         *  @param {array} state.value
         *  @param {object} action
         *  @param {string} action.type -> containerNav/setActivityClass
         *  @param {number} action.payload -> key */
        setActivityClass: (state, action) => {
            state.value.map((oGroup) => {
                oGroup.hasNavbarItem && oGroup.navbarItem.map((oNavMenu) => {
                    oNavMenu.isActive = oNavMenu.key === action.payload;
                });
            });
        },

        /** @public
         *  @param {Proxy} state
         *  @param {array} state.value
         *  @param {object} action
         *  @param {string} action.type -> containerNav/setActivityClass
         *  @param {objects} action.payload
         *  @param {number} action.payload.key
         *  @param {boolean} action.payload.isActive  */
        isClickedOutside: (state, action) => {
            state.value.map((oGroup) => {
                oGroup.hasNavbarItem && oGroup.navbarItem.map((oNavMenu) => {
                    if (oNavMenu.key === action.payload.key) {
                        oNavMenu.isActive = action.payload.isActive;
                    }
                });
            });
        }
    }
});

export const { setActivityClass, isClickedOutside } = ContainerNavSlice.actions;
export default ContainerNavSlice.reducer;