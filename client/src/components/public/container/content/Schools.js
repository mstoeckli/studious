import React from 'react';

import { Table } from '../../../base/Table'

/** @public
 *  @constructor
 *  @returns {JSX.Element} Schools */
export const Schools = () => {
    return (
        <Table
            title="Schulen"
            sorting={true}
            searchable={true}
            grouping={true}
            groupColumn="school"
            multiSelect={true}
            showNumberLine={true}
            showContent={false} />
    )
}