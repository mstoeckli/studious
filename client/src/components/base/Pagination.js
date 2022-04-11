import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import Pagination from 'react-js-pagination';

import { StyledPagination } from '../../styles/base/Pagination.styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from "@fortawesome/pro-duotone-svg-icons";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {array=} oProperties.data
 *  @param   {string=} oProperties.perPage
 *  @param   {number=} oProperties.pageRangeDisplayed
 *  @param   {boolean=} oProperties.hideDisabled
 *  @param   {string=} oProperties.customStyle
 *  @param   {function} oProperties.onIndexCalculated
 *  @returns {JSX.Element} Pagination */
export const PaginationBase = forwardRef((oProperties, ref) => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update pagination state for displaying grouped projects
     *  @type {[pagination:{ data:[], perPage:number, page:number, pages:number}, setPagination:function]} */
    const [ pagination, setPagination ] = useState({
        data: oProperties.data ? oProperties.data : [],
        perPage: oProperties.perPage ? oProperties.perPage : 5,
        page: 1,
        pages: 0
    });

    /** @desc The current post is getting defined on the basis of iIndexLastPost and iIndexFirstPost. */
    const iIndexLast = pagination.page * pagination.perPage;
    const iIndexFirst = iIndexLast - pagination.perPage;

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        /** @desc Call parent function for setting the calculated indexes for further usage */
        oProperties.onIndexCalculated(iIndexLast, iIndexFirst);
    }, [ref, iIndexLast, iIndexFirst]);

    useImperativeHandle(ref, () => ({
        refresh(aData) {
            /** @desc Update the pagination state after reading the projects */
            setPagination((oPagination) => ({
                ...oPagination,
                data: aData,
                pages: Math.floor(aData.length / pagination.perPage)
            }));
        }
    }));

    return (
        <StyledPagination
            style={oProperties?.customStyle ? oProperties.customStyle : String()}>
            <Pagination
                prevPageText={<FontAwesomeIcon icon={FaDuotoneIcons["faAngleLeft"]} />}
                nextPageText={<FontAwesomeIcon icon={FaDuotoneIcons["faAngleRight"]} />}
                firstPageText={<FontAwesomeIcon icon={FaDuotoneIcons["faAngleDoubleLeft"]} />}
                lastPageText={<FontAwesomeIcon icon={FaDuotoneIcons["faAngleDoubleRight"]} />}
                itemsCountPerPage={pagination.perPage}
                totalItemsCount={pagination.data.length}
                pageRangeDisplayed={oProperties.pageRangeDisplayed ? oProperties.pageRangeDisplayed : 8}
                hideDisabled={oProperties.hideDisabled ? oProperties.hideDisabled : true}
                activePage={pagination.page}
                onChange={(selectedPage) => setPagination((oPagination) => ({
                    ...oPagination,
                    page: selectedPage
                }))}/>
        </StyledPagination>
    )
})