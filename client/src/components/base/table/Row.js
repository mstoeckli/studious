import React from 'react';

import { StyledTableRow } from '../../../styles/base/table/Row.styles';

import { Identifier } from './template/Identifier';
import { Number } from './template/Number';
import { Button } from './template/Button';
import { Email } from './template/Email';
import { Status } from './template/Status';
import { Text } from './template/Text';
import { Icon } from './template/Icon';
import { Checkbox } from './template/Checkbox';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string=} oProperties.tableKey
 *  @param   {string=} oProperties.attrColumnKey
 *  @param   {object=} oProperties.customStyle
 *  @param   {string=} oProperties.align -> left/center/right
 *  @param   {number=} oProperties.colSpan
 *  @param   {{type:string, title:string, description:string, disabled:boolean, customStyle:object, value:*, iconSrc:string, onClick:function, borderColor:string, backgroundColor:string, flexDirection:string}} oProperties.row
 *  @returns {JSX.Element} TableRow */
export const TableRow = (oProperties) => {
    /** @private
     *  @param   {object} args
     *  @param   {string} args.title
     *  @param   {string} args.description
     *  @param   {string=} args.iconSrc
     *  @param   {string=} args.flexDirection -> row/column
     *  @returns {JSX.Element} */
    const _getTemplateIdentifier = ({ title, description, iconSrc, flexDirection = "row" }) => (
        <Identifier
            iconSrc={iconSrc}
            title={title}
            description={description}
            flexDirection={flexDirection} />
    );

    /** @private
     *  @param   {object} args
     *  @param   {number} args.value
     *  @param   {string=} args.iconSrc
     *  @returns {JSX.Element} */
    const _getTemplateNumber = ({ value, iconSrc }) => (
        <Number
            iconSrc={iconSrc}
            numberValue={value} />
    );

    /** @private
     *  @param   {object} args
     *  @param   {string} args.value
     *  @param   {string=} args.iconSrc
     *  @returns {JSX.Element} */
    const _getTemplateText = ({ value, iconSrc }) => (
        <Text
            text={value}
            iconSrc={iconSrc} />
    );

    /** @private
     *  @param   {object} args
     *  @param   {function} args.onClick
     *  @returns {JSX.Element} */
    const _getTemplateCheckbox = ({ onClick }) => (
        <Checkbox onClick={onClick} />
    );

    /** @private
     *  @param   {object} args
     *  @param   {string} args.value
     *  @param   {string=} args.iconSrc
     *  @param   {boolean=} args.disabled
     *  @param   {object=} args.customStyle
     *  @param   {function} args.onClick
     *  @returns {JSX.Element} */
    const _getTemplateButton = ({ value, iconSrc, disabled, customStyle, onClick }) => (
        <Button
            text={value}
            iconSrc={iconSrc}
            disabled={disabled}
            customStyle={customStyle}
            onClick={onClick}/>
    );

    /** @private
     *  @param   {object} args
     *  @param   {string} args.value
     *  @returns {JSX.Element} */
    const _getTemplateEmail = ({ value }) => (
        <Email value={value}/>
    )

    /** @private
     *  @param   {object} args
     *  @param   {string} args.value
     *  @param   {string=} args.iconSrc
     *  @param   {string=} args.borderColor
     *  @param   {string=} args.backgroundColor
     *  @param   {function=} args.onClick
     *  @returns {JSX.Element} */
    const _getTemplateStatus = ({ value, iconSrc = "faTags", borderColor = "#d3366e", backgroundColor =  "#d885a3", onClick }) => (
        <Status
            text={value}
            iconSrc={iconSrc}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            onClick={onClick}/>
    );

    /** @private
     *  @param   {object} args
     *  @param   {string} args.iconSrc
     *  @param   {function} args.onClick
     *  @returns {JSX.Element} */
    const _getTemplateIcon = ({ iconSrc, onClick }) => (
        <Icon
            iconSrc={iconSrc}
            onClick={onClick} />
    );

    /** @private
     *  @param {string} sType
     *  @param {{title:string, description:string, value:*, iconSrc:string, onClick:function, borderColor:string, backgroundColor:string}} oRow */
    const _getTemplate = (sType, oRow) => ({
        Identifier: _getTemplateIdentifier(oRow),
        Text: _getTemplateText(oRow),
        Number: _getTemplateNumber(oRow),
        Checkbox: _getTemplateCheckbox(oRow),
        Button: _getTemplateButton(oRow),
        Email: _getTemplateEmail(oRow),
        Status: _getTemplateStatus(oRow),
        Icon: _getTemplateIcon(oRow)
    })[sType];

    return (
        <StyledTableRow
            style={oProperties?.customStyle ? oProperties.customStyle : {}}
            align={oProperties?.align ? oProperties.align : "left"}
            data-columnkey={oProperties.attrColumnKey}
            colSpan={oProperties?.colSpan ? oProperties.colSpan : 0}>
            {_getTemplate(oProperties.row.type, oProperties.row)}
        </StyledTableRow>
    );
}