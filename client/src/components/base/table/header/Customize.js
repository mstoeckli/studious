import React from 'react';
import { useTranslation } from "react-i18next";

import { StyledCustomize } from '../../../../styles/base/table/header/Customize.styles';

import { Button } from "../template/Button";

import { FormInput } from "../../forms/Input";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';
import * as FaSolidIcons from '@fortawesome/pro-solid-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @returns {JSX.Element} Customize */
export const Customize = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    return (
        <StyledCustomize>
            <header>
                <span>{t("Base.Table.QuickOptions.Customize.DropdownContent.title")}</span>
            </header>
            <article className="customize-manage">
                <span>Manage - Standard</span>
                <div className="customize-manage-content">
                    <FormInput
                        icon="faMountainSun"
                        placeholder="Meine Ansicht 1"/>
                    <div className="customize-manage-content-buttons">
                        <Button
                            text="Löschen"
                            disabled={true}
                            iconSrc="faTrash"
                            iconSolid={true} />
                        <Button
                            text="Klonen"
                            iconSrc="faClone"
                            iconSolid={true} />
                        <Button
                            text="Sichern"
                            disabled={true}
                            iconSrc="faSave"
                            iconSolid={true} />
                    </div>
                </div>
            </article>
            <article className="customize-view">
                <span>Views</span>
                <ul>
                    <li className="active-view" >
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faMountain"]} />
                            <span>Standard</span>
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={FaSolidIcons["faCheck"]} />
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faMountainSun"]} />
                            <span>My Custom View 1</span>
                        </div>
                        <div className="right">
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faMountainSun"]} />
                            <span>My Custom View 2</span>
                        </div>
                        <div className="right">
                        </div>
                    </li>
                </ul>
            </article>
            <article className="customize-shown">
                <span>Shown</span>
                <ul>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                            <span>Schule</span>
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faEye"]} />
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                            <span>Schul-Identifikation</span>
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faEye"]} />
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                            <span>Anmelden</span>
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faEye"]} />
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                            <span>Administrator</span>
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faEye"]} />
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                            <span>Beitrittsdatum</span>
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faEye"]} />
                        </div>
                    </li>
                </ul>
            </article>
            <article className="customize-hide">
                <span>Hide</span>
                <ul>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                            <span>Klassen-Lehrer</span>
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faEyeSlash"]} />
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                            <span>Fach-Lehrer</span>
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faEyeSlash"]} />
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faGripDotsVertical"]} />
                            <span>Studenten</span>
                        </div>
                        <div className="right">
                            <FontAwesomeIcon icon={FaDuotoneIcons["faEyeSlash"]} />
                        </div>
                    </li>
                </ul>
            </article>
        </StyledCustomize>
    );
}