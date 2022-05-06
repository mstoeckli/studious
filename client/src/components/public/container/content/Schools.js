import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Table } from '../../../base/Table'
import { Identifier } from '../../../base/table/template/Identifier';
import { Number } from '../../../base/table/template/Number';
import { Button } from '../../../base/table/template/Button';
import { Email } from '../../../base/table/template/Email';
import { Status } from '../../../base/table/template/Status';

/** @public
 *  @constructor
 *  @returns {JSX.Element} Schools */
export const Schools = () => {
    /** @desc Returns global state value by redux toolkit
     *  @type {array} oColumns */
    const oColumns = useSelector((state) => state.tableColumns.value);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => _fetchProjects(), []);

    /** @private */
    const _fetchProjects = () => {
        // /** @desc Add skeleton component for displaying the user something happens.. */
        // setWaitFetchContent(_addSkeleton());

        // /** @private
        //  *  @desc    Call reducer function for fetching the projects
        //  *  @returns {Promise<*>} */
        // const _fetch = async () => await fnDispatch(await getProjects({
        //     filter: _getFilter(),
        //     sort: _getSorter()
        // }));

        // /** @param {object} oFetchedObj
        //  *  @param {object} oFetchedObj.meta
        //  *  @param {object} oFetchedObj.payload
        //  *  @param {string} oFetchedObj.type */
        // _fetch().then((oFetchedObj) => {
        //     // /** @desc Call refresh function inside child component "Pagination.js" for updating data */
        //     // if (paginationRefreshRef.current) paginationRefreshRef.current.refresh(oFetchedObj?.payload?.data ? oFetchedObj.payload.data : []);
        //     //
        //     // /** @desc Check if data was found, if not show component for no projects found */
        //     // if (!oFetchedObj?.payload || oFetchedObj.payload.data.length <= 0) setWaitFetchContent(<ProjectsNotFound />);
        // }).catch((oErr) => setWaitFetchContent(<ProjectsNotFound />));
    };

    return (
        <Table
            tableKey="Schools"
            favorite={false}
            searchable={true}
            filterable={true}
            groupable={false}
            groupColumn="school"
            // multiSelect={true}
            linesPerPage={2}
            paginationAlignment="right"
            // showLineNumber={true}
            onCheckboxClicked={() => {
                debugger
            }}
            content={<div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>}
            columns={oColumns["Schools"]}
            rows={[[{
                type: "Identifier",
                iconSrc: "faMapPin",
                title: "Grundschule Fislisbach",
                description: "Feldstrasse 31g, 5442 Fislisbach, Switzerland"
            }, {
                type: "Number",
                value: "5230"
            }, {
                type: "Button",
                value: "Anfrage",
                iconSrc: "faDiagramSubtask",
                onClick: (oEvt) => {}
            }, {
                type: "Email",
                value: "hanspeter.mueller@schule.ch"
            }, {
                type: "Text",
                value: "31.12.2022",
                iconSrc: "faCalendarDay"
            }, {
                type: "Number",
                value: 10,
                iconSrc: "faChalkboardUser"
            }, {
                type: "Number",
                value: 5,
                iconSrc: "faRectangleHistoryCircleUser",
            }, {
                type: "Number",
                value: 87,
                iconSrc: "faScreenUsers"
            }, {
                type: "Status",
                value: "Free",
                borderColor: "#d3366e",
                backgroundColor: "#d885a3",
                onClick: (oEvt) => {
                    debugger
                }
            }], [{
                type: "Identifier",
                iconSrc: "faMapPin",
                title: "Grundschule Fislisbach",
                description: "Feldstrasse 31g, 5442 Fislisbach, Switzerland"
            }, {
                type: "Number",
                value: "5230"
            }, {
                type: "Button",
                value: "Anfrage",
                iconSrc: "faDiagramSubtask",
                onClick: (oEvt) => {}
            }, {
                type: "Email",
                value: "hanspeter.mueller@schule.ch"
            }, {
                type: "Text",
                value: "31.12.2022",
                iconSrc: "faCalendarDay"
            }, {
                type: "Number",
                value: 10,
                iconSrc: "faChalkboardUser"
            }, {
                type: "Number",
                value: 5,
                iconSrc: "faRectangleHistoryCircleUser",
            }, {
                type: "Number",
                value: 87,
                iconSrc: "faScreenUsers"
            }, {
                type: "Status",
                value: "Free",
                borderColor: "#d3366e",
                backgroundColor: "#d885a3",
                onClick: (oEvt) => {
                    debugger
                }
            }]]}/>
    );
}