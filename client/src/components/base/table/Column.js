import React from 'react';
import { useDispatch } from 'react-redux';

import { StyledTableColumn } from '../../../styles/base/table/Column.styles';

import { setDropdownActive, isClickedOutside } from '../../../reducers/base/table/Columns';

import { Checkbox } from './template/Checkbox';

import { Dropdown } from '../dropdown/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.tableKey
 *  @param   {{key:string, title:string, sortable:boolean, ascending:boolean, fixed:boolean, isHidden:boolean, isDropdownActive:boolean, isCheckboxColumn:boolean}=} oProperties.column
 *  @param   {number=} oProperties.defaultColumnsFixed
 *  @param   {string=} oProperties.align
 *  @param   {string=} oProperties.customStyle
 *  @param   {boolean=} oProperties.isCheckboxColumn
 *  @param   {function=} oProperties.onCheckboxClicked
 *  @returns {JSX.Element} TableColumn */
export const TableColumn = (oProperties) => {
    /** @desc Returns dispatcher function to call the actions inside the reducer
     *  @type {React.Dispatch} fnDispatch */
    const fnDispatch = useDispatch();

    /** @private
     *  @param {string} sTableKey
     *  @param {string} sColumnKey
     *  @param {boolean} bIsActive */
    const _onClickOutside = (sTableKey, sColumnKey, bIsActive) => {
        if (bIsActive) {
            /** @desc Calls dispatcher function which handles the show/hide property of a dropdown when clicked outside */
            fnDispatch(isClickedOutside({
                tableKey: sTableKey,
                columnKey: sColumnKey,
                isActive: !bIsActive
            }));
        }
    };

    /** @private
     *  @param {string} sTableKey
     *  @param {string} sColumnKey
     *  @param {boolean} bIsActive */
    const _onDropdownClicked = (sTableKey, sColumnKey, bIsActive) => {
        /** @desc Calls dispatcher function which handles the show/hide property of a dropdown when clicked */
        fnDispatch(setDropdownActive({
            tableKey: sTableKey,
            columnKey: sColumnKey,
            isActive: !bIsActive
        }));
    };

    const _onHideColumn = () => {

    };

    /** @private
     *  @param   {object} oProperties
     *  @param   {string} oProperties.tableKey
     *  @param   {object} oProperties.column
     *  @param   {string} oProperties.column.key
     *  @param   {boolean} oProperties.column.isDropdownActive
     *  @returns {JSX.Element} */
    const _addSortableColumnHdr = (oProperties) => (
        <>
            <FontAwesomeIcon
                icon={FaDuotoneIcons["faSort"]}
                onClick={() => _onDropdownClicked(oProperties.tableKey, oProperties.column.key, oProperties.column.isDropdownActive)} />
            {_addDropdown(oProperties.tableKey, oProperties.column.key, oProperties.column.isDropdownActive)}
        </>
    );

    /** @private
     *  @param   {string} sTableKey
     *  @param   {string} sColumnKey
     *  @param   {boolean} bIsActive
     *  @returns {JSX.Element} */
    const _addDropdown = (sTableKey, sColumnKey, bIsActive) => (
        <Dropdown
            modelObj="TableCellConfig"
            float="left"
            isActive={bIsActive}
            isClickedOutside={() => _onClickOutside(sTableKey, sColumnKey, bIsActive)}
            onListItemClick={(oEvt) => {
                debugger
                _onHideColumn();
            }}/>
    );

    return (
        <StyledTableColumn
            style={oProperties?.customStyle ? oProperties.customStyle : {}}
            align={oProperties?.column?.align ? oProperties.column.align : oProperties.align}
            data-columnkey={oProperties?.column?.key}>
            {oProperties?.isCheckboxColumn
                ? <Checkbox onClick={oProperties.onCheckboxClicked}/>
                : <>
                    <span>{oProperties?.column?.title}</span>
                    {oProperties?.column?.sortable && _addSortableColumnHdr(oProperties)}
                </>}
        </StyledTableColumn>
    )
}