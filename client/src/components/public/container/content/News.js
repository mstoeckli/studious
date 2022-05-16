import React from 'react';

import { Table } from '../../../base/Table'
import {Dialog} from "../../../base/messages/Dialog";

/** @public
 *  @constructor
 *  @returns {JSX.Element} News */
export const News = () => {
    return (
        <Table
            title="News"
            tableKey="news"
            columns={[]}
            rows={[]}
            // content={{
            //     jsxElement: [<div>Test 123</div>, <div>Test 456</div>]
            // }}
            quickOptionsVisibility={{
                create: true,
                dateCalendar: true
            }}
            pagination={{
                active: true,
                perPage: 14
            }}
            showHeader={true}
            // showLoader={showLoader}
            // showLineNumber={true}
            // showMultiSelect={true}
            onCheckboxClicked={() => {}}
            // headerCards={_getHeaderCards()}
        />
    )
}