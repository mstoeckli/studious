import React from 'react';

import { Table } from '../../../base/Table'
import {Dialog} from "../../../base/messages/Dialog";

/** @public
 *  @constructor
 *  @returns {JSX.Element} News */
export const News = () => {
    return (
        <>
            <Table
                tableKey="News"
                searchable={true}
                filterable={true}
                pagination={true}
                content={<div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d ipsum dolor sit amet.</div>}
                contentInitialVisibility={false}
                columns={[]}
                rows={[]} />
            {/*{Object.keys(error).length !== 0 && error.constructor === Object && <Dialog*/}
            {/*    title={error.title}*/}
            {/*    description={error.description}*/}
            {/*    messageType="E"*/}
            {/*    showSupport={true} />}*/}
        </>
    )
}