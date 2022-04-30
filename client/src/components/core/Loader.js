import React from "react";

import { StyledLoader } from '../../styles/core/Loader.styles';

import { useContentContext } from '../../context/ContentProvider';

/** @public
 *  @constructor
 *  @returns {JSX.Element} Loader */
export const Loader = () => {
    /** @desc Get content provider context */
    const { values } = useContentContext();

    return (
        <StyledLoader
            style={{ left: `${values.sidebarWidthPx}px`, width: `calc(100% - ${values.sidebarWidthPx}px)` }}>
            <span className="loader" />
        </StyledLoader>
    )
};