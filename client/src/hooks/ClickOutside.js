import React from 'react';

import { useEffect } from 'react';

/** @public
 *  @param {*} ref
 *  @param {function=} handler */
export const useClickOutside = (ref, handler = () => {}) => {
    useEffect(() => {
        /** @private
         *  @param {Event} oEvt */
        const _listener = (oEvt) => {
            if (!ref?.current || ref?.current.contains(oEvt.target)) {
                return;
            }

            /** @desc Call callback handler for handling outside click */
            handler();
        }; document.addEventListener("mousedown", _listener);
        return () => document.removeEventListener("mousedown", _listener);
    }, [ref, handler]);
}