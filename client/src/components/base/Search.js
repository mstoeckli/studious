import { useTranslation } from "react-i18next";

import { StyledSearch } from '../../styles/base/Search.styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from "@fortawesome/pro-duotone-svg-icons";

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.placeholder
 *  @param   {string} oProperties.value
 *  @param   {function=} oProperties.onChange
 *  @param   {function=} oProperties.onSearch
 *  @param   {string=} oProperties.customStyle
 *  @returns {JSX.Element} Search */
export const Search = (oProperties) => {
    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    return (
        <StyledSearch style={oProperties.customStyle ? oProperties.customStyle : {}}>
            <FontAwesomeIcon
                icon={FaDuotoneIcons["faSearch"]}
                onClick={(oEvt) => oProperties?.onSearch(oEvt.currentTarget.nextElementSibling.value)} />
            <input
                type="text"
                placeholder={oProperties.placeholder ? oProperties.placeholder : t("Base.Search.placeholder")}
                value={oProperties?.value}
                onChange={(oEvt) => oProperties?.onChange(oEvt.currentTarget.value)} />
            <FontAwesomeIcon
                className="clear"
                icon={FaDuotoneIcons["faDeleteLeft"]}
                onClick={(oEvt) => {
                    /** @desc Clear input value */
                    oEvt.currentTarget.previousSibling.value = String();
                    oProperties?.onSearch(oEvt.currentTarget.previousSibling.value)
                }} />
        </StyledSearch>
    )
}