import React from 'react';

import { Table } from '../../../base/Table'

/** @public
 *  @constructor
 *  @returns {JSX.Element} News */
export const News = () => {
    return (
        <Table
            title="News"
            sorting={true}
            searchable={false}
            grouping={true}
            groupColumn="school"
            multiSelect={true}
            showNumberLine={true}
            showContent={false} />
    )
}