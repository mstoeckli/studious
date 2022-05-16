import React from 'react';
import { useTranslation } from "react-i18next";

import { StyledFilter } from '../../../../styles/base/table/header/Filter.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @returns {JSX.Element} Filter */
export const Filter = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    return (
        <StyledFilter>
            <header>
                <span>{t("Base.Table.QuickOptions.Filter.DropdownContent.title")}</span>
                <div>
                    <FontAwesomeIcon
                        className="apply"
                        icon={FaDuotoneIcons["faFilterList"]}
                        onClick={() => {}}/>
                    <FontAwesomeIcon
                        className="clear"
                        icon={FaDuotoneIcons["faFilterCircleXmark"]}
                        onClick={() => {}}/>
                </div>
            </header>
        </StyledFilter>
    );
}