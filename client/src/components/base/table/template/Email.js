import React from 'react';

import { StyledEmail } from '../../../../styles/base/table/template/Email.styles';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {string} oProperties.address
 *  @returns {JSX.Element} Email */
export const Email = (oProperties) => (
    <StyledEmail>
        {oProperties.address}
    </StyledEmail>
);