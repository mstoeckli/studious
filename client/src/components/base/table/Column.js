import React, { useState } from 'react';

import { StyledTableColumn } from '../../../styles/base/table/Column.styles';

import { Dropdown } from '../dropdown/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {{key:string, title:string, sortable:boolean, ascending:boolean, fixed:boolean, isHidden:boolean, isDropdownActive:boolean}=} oProperties.column
 *  @param   {number=} oProperties.defaultColumnsFixed
 *  @param   {string=} oProperties.align
 *  @param   {string=} oProperties.customStyle
 *  @returns {JSX.Element} TableColumn */
export const TableColumn = (oProperties) => {
    /** @private
     *  @returns {JSX.Element} */
    const _addDropdown = (bIsActive = true) => (
        <Dropdown
            modelObj="TableCellConfig"
            float="left"
            isActive={bIsActive}
            onListItemClick={() => {

            }} />
    );

    return (
        <StyledTableColumn
            align={oProperties?.column?.align ? oProperties.column.align : oProperties.align}
            style={oProperties?.customStyle ? oProperties.customStyle : {}}>
            <span>{oProperties?.column?.title}</span>
            {oProperties?.column?.sortable &&
                <>
                    <FontAwesomeIcon icon={FaDuotoneIcons["faSort"]} />
                    {_addDropdown(oProperties.column.isDropdownActive)}
                </>}
        </StyledTableColumn>
    )
}