import { createContext, useContext, useState } from 'react';

/** @desc Create auth context for global usage */
const ContentContext = createContext({});
export const useContentContext = () => useContext(ContentContext);

/** @public
 *  @constructor
 *  @param {JSX.Element} children */
export const ContentProvider = ({ children }) => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Defines the initial signup values
     *  @type {[values:{}, setValues:function]} */
    const [ values, setValues ] = useState({
        sidebarWidthPx: 0
    });

    /** @public
     *  @param {number} iSidebarWidthPx */
    const setSidebarWidthPx = (iSidebarWidthPx) => {
        setValues((oValues) => {
            return {...oValues, sidebarWidthPx: iSidebarWidthPx}
        });
    };

    /** @desc Defines the provider value object for returning data and functions */
    const oValues = {
        values,
        setSidebarWidthPx
    }

    return (
        <ContentContext.Provider value={oValues}>
            {children}
        </ContentContext.Provider>
    );
};

export default ContentContext;
