import React, { useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { StyledCustomize } from '../../../../styles/base/table/header/Customize.styles';

import { cloneCustomize, deleteCustomize, updateCustomizeActivity } from "../../../../reducers/base/table/Configuration";

import { Button } from "../template/Button";

import { FormInput } from "../../forms/Input";

import { useAuth } from "../../../../context/AuthProvider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';
import * as FaSolidIcons from '@fortawesome/pro-solid-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.tableKey
 *  @param   {[object]} oProperties.views
 *  @param   {object} oProperties.resizing
 *  @param   {number} oProperties.resizing.headerHeight
 *  @param   {number} oProperties.resizing.tableHeight
 *  @param   {number} oProperties.resizing.headerHeightCustom
 *  @returns {JSX.Element} Customize */
export const Customize = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @desc Get user object to check if user is signed in */
    let { user } = useAuth();

    /** @desc Returns dispatcher function to call the actions inside the reducer
     *  @type {React.Dispatch} fnDispatch */
    const fnDispatch = useDispatch();

    /** @desc Determine active view information */
    const oActiveView = oProperties.views.find(({ active }) => active === true);

    const [ title, setTitle ] = useState(oActiveView.title);
    const [ columns, setColumns ] = useState(oActiveView.columns);

    const shownList = useRef(null);
    const hideList = useRef(null);

    const _onViewClick = (oEvt) => {
        debugger
        const sKey = oEvt.currentTarget.getAttribute("data-viewkey");

        /** @desc Resetting activity of custom view */
        fnDispatch(updateCustomizeActivity({
            key: oProperties.tableKey,
            activeKey: sKey
        }));

        const _oActiveView = oProperties.views.find(({ key }) => key === sKey);

        setTitle(_oActiveView.title);
        setColumns(_oActiveView.columns);

        debugger
    };

    /** @private
     *  @param {Event} oEvt */
    const _onDelete = (oEvt) => {
        /** @desc Resetting activity of custom view */
        fnDispatch(updateCustomizeActivity({
            key: oProperties.tableKey,
            activeKey: "S0"
        }));

        /** @desc Resetting activity of custom view */
        fnDispatch(deleteCustomize({
            key: oProperties.tableKey,
            deleteKey: oActiveView.key
        }));

        const _oActiveView = oProperties.views.find(({ key }) => key === "S0");

        setTitle(_oActiveView.title);
        setColumns(_oActiveView.columns);
    };

    /** @private
     *  @param {Event} oEvt */
    const _onClone = (oEvt) => {
        const aOrder = [];
        const aColumns = [];

        /** @desc Determine order and column for creating custom view */
        for (const child of [...shownList.current.children]) {
            const sKey = child.getAttribute("data-columnkey");
            aOrder.push(sKey);
            aColumns.push(columns.find(({ key }) => key === sKey));
        }

        /** @desc Resetting activity of custom view */
        fnDispatch(updateCustomizeActivity({
            key: oProperties.tableKey
        }));

        /** @desc Clone/Create custom view */
        const a = fnDispatch(cloneCustomize({
            key: oProperties.tableKey,
            view: {
                key: "C",
                title: title,
                active: true,
                columns: aColumns,
                order: aOrder
            }
        }));
        debugger
    };

    /** @private
     *  @param {Event} oEvt */
    const _onSave = (oEvt) => {

    };

    return (
        <StyledCustomize
            tableHeight={oProperties.resizing.tableHeight}>
            <header>
                <span>{t("Base.Table.QuickOptions.Customize.DropdownContent.title")}</span>
            </header>
            <article className="customize-manage">
                <span>Manage</span>
                <div className="customize-manage-content">
                    <FormInput
                        icon={oActiveView.key.charAt(0) === "S" ? "faMountain" : "faMountainSun"}
                        value={title}
                        placeholder="Meine Ansicht 1"
                        fnChange={(oEvt) => setTitle(oEvt.currentTarget.value)}/>
                    <div className="customize-manage-content-buttons">
                        <Button
                            text="Löschen"
                            disabled={oActiveView.key.charAt(0) === "S"}
                            iconSrc="faTrash"
                            iconSolid={true}
                            onClick={_onDelete}/>
                        <Button
                            text="Klonen"
                            iconSrc="faClone"
                            iconSolid={true}
                            onClick={_onClone}/>
                        <Button
                            text="Sichern"
                            disabled={oActiveView.key.charAt(0) === "S"}
                            iconSrc="faSave"
                            iconSolid={true} />
                    </div>
                    {user === null && <div className="customize-manage-content-info">
                        <span>Für eine übergreifende Browser-Sicherung der Personalisierung müssen sie sich bei studious anmelden!</span>
                    </div>}
                </div>
            </article>
            <article className="customize-view">
                <span>Views</span>
                <ul>
                    {oProperties.views.map((oView) => (
                        <li
                            data-viewkey={oView.key}
                            className={oView.active ? "active-view" : String()}
                            onClick={_onViewClick}>
                            <div className="left">
                                <FontAwesomeIcon icon={FaDuotoneIcons[oView.key.charAt(0) === "S" ? "faMountain" : "faMountainSun"]} />
                                <span>{oView.title}</span>
                            </div>
                            <div className="right">
                                {oView.active && <FontAwesomeIcon icon={FaSolidIcons["faCheck"]} />}
                            </div>
                        </li>
                    ))}
                </ul>
            </article>





            <article className="customize-shown">
                <div className="article-header">
                    <span>Shown</span>
                    <div>
                        <FontAwesomeIcon icon={FaDuotoneIcons["faLongArrowUp"]} />
                        <FontAwesomeIcon icon={FaDuotoneIcons["faLongArrowDown"]} />
                    </div>
                </div>
                <ul
                    ref={shownList}
                    onDragOver={(oEvt) => {
                        oEvt.preventDefault();
                        let oListItem = shownList.current.querySelector(".dragging");

                        const afterElement = [...oEvt.currentTarget.children].reduce((closest, child) => {
                            const box = child.getBoundingClientRect();
                            const offset = oEvt.clientY - box.top - box.height / 2;

                            if (offset < 0 && offset > closest.offset) {
                                return {
                                    offset,
                                    element: child
                                }
                            } return closest;

                        }, { offset: Number.NEGATIVE_INFINITY }).element;

                        if (afterElement === null) oEvt.currentTarget.appendChild(oListItem);
                        else oEvt.currentTarget.insertBefore(oListItem, afterElement);
                    }}>

                    {columns.filter(({ isHidden }) => isHidden === false).map((oColumn) => (
                        <li
                            data-columnkey={oColumn.key}
                            draggable={true}
                            onDragStart={(oEvt) => {
                                oEvt.currentTarget.style.background = "transparent"
                                oEvt.currentTarget.classList.add("dragging");
                            }}
                            onDragEnd={(oEvt) => {
                                oEvt.preventDefault();
                                oEvt.currentTarget.style.background = null;
                                oEvt.currentTarget.classList.remove("dragging");
                            }}>
                            <div className="left">
                                <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                                <span>{oColumn.title}</span>
                            </div>
                            <div className="right">
                                <FontAwesomeIcon
                                    icon={FaDuotoneIcons["faEye"]}
                                    onClick={(oEvt) => {
                                        debugger
                                        // fnDispatch(setHidden({
                                        //     key: oProperties.tableKey,
                                        //     columnKey: oColumn.key,
                                        //     isHidden: true
                                        // }));
                                        //
                                        // fnDispatch(setCustomizeAfterHidden({
                                        //     key: oProperties.tableKey
                                        // }));

                                    }}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>
            {columns.filter(({ isHidden }) => isHidden === true).length > 0 && <article className="customize-hide">
                <div className="article-header">
                    <span>hide</span>
                    <div>
                        <FontAwesomeIcon icon={FaDuotoneIcons["faLongArrowUp"]} />
                        <FontAwesomeIcon icon={FaDuotoneIcons["faLongArrowDown"]} />
                    </div>
                </div>
                <ul ref={hideList}>
                    {columns.filter(({ isHidden }) => isHidden === true).map((oColumn) => (
                        <li>
                            <div className="left">
                                <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                                <span>{oColumn.title}</span>
                            </div>
                            <div className="right">
                                <FontAwesomeIcon
                                    icon={FaDuotoneIcons["faEyeSlash"]}
                                    onClick={() => {
                                        // fnDispatch(setHidden({
                                        //     key: oProperties.tableKey,
                                        //     columnKey: oColumn.key,
                                        //     isHidden: false
                                        // }));
                                        //
                                        // fnDispatch(setCustomizeAfterHidden({
                                        //     key: oProperties.tableKey
                                        // }));
                                    }}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </article>}
        </StyledCustomize>
    );
}