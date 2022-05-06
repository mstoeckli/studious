import React from 'react';

import { StyledEmail } from '../../../../styles/base/table/template/Email.styles';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.value
 *  @returns {JSX.Element} Email */
export const Email = (oProperties) => (
    <StyledEmail href={`mailto:${oProperties.value}`}>
        {oProperties.value}
    </StyledEmail>
);