import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Table } from '../../../base/Table';

import { find } from '../../../../assets/api/School';

/** @public
 *  @constructor
 *  @returns {JSX.Element} Schools */
export const Schools = () => {
    /** @desc Returns global state value by redux toolkit
     *  @type {array} oColumns */
    const oColumns = useSelector((state) => state.tableColumns.value);

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Used for displaying schools as table rows
     *  @type {[rows:array, setRows:function]} */
    const [ rows, setRows ] = useState([]);

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Show/Hide busy indicator/loader
     *  @type {[showLoader:boolean, setShowLoader:function]} */
    const [ showLoader, setShowLoader ] = useState(false);

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Used for displaying dashboard information about active schools/teachers and students
     *  @type {[counterInfo:{schools:number, teachers:number, students:number}, setCounterInfo:function]} */
    const [ counterInfo, setCounterInfo ] = useState({
        schools: 0,
        teachers: 0,
        students: 0
    });

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => _fetchProjects(), []);

    /** @private */
    const _fetchProjects = () => {
        /** @desc Show busy indicator/loader */
        setShowLoader(true);

        /** @desc Resetting counter information before re-selecting */
        _resetCounterInfo();

        /** @private
         *  @returns {Promise<*>} */
        const _fetch = async () => await find();

        /** @param {object} oFetchedObj
         *  @param {boolean} oFetchedObj.success
         *  @param {array} oFetchedObj.schools */
        _fetch().then(({ success, data, message }) => {
            if (success) {
                if (data.success) {
                    const aRows = [];
                    for (const oSchool of data.schools) {
                        /** @desc Determine administrator email */
                        const { email } = oSchool.users.find(({ _id }) => _id === oSchool.admin);

                        /** @desc Update dashboard card information active schools/teachers and students */
                        _updateCounterInfo(oSchool);

                        /** @desc Add school information */
                        aRows.push(_addRow(oSchool, email));
                    }

                    setRows(aRows);

                    /** @desc Hide busy indicator/loader */
                    setShowLoader(false);
                }
            } else {

            }
        })
        // .catch((oErr) => setError(oErr.message));



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

    /** @private
     *  @returns {array} */
    const _getHeaderCards = () => ([{
        icon: "faGraduationCap",
        title: "Schulen",
        info: counterInfo.schools,
        backgroundColor: "#98d1bf",
        borderColor: "#61cfac"
    }, {
        icon: "faChalkboardUser",
        title: "Lehrer",
        info: counterInfo.teachers,
        backgroundColor: "#98b9d1",
        borderColor: "#5d9ecd"
    }, {
        icon: "faUserGraduate",
        title: "Schüler",
        info: counterInfo.students,
        backgroundColor: "#d198a5",
        borderColor: "#cf5d77"
    }]);

    /** @private
     *  @param   {object} oSchool
     *  @param   {string} oSchool.name
     *  @param   {string} oSchool.address
     *  @param   {number} oSchool.key
     *  @param   {number} oSchool.classTeacher
     *  @param   {number} oSchool.subjectTeacher
     *  @param   {number} oSchool.students
     *  @param   {string} sEmail
     *  @returns {array} */
    const _addRow = (oSchool, sEmail) => ([{
        type: "Identifier",
        iconSrc: "faMapPin",
        title: oSchool.name,
        description: oSchool.address
    }, {
        type: "Number",
        value: oSchool.key
    }, {
        type: "Button",
        value: "Anfrage",
        iconSrc: "faDiagramSubtask",
        onClick: (oEvt) => {}
    }, {
        type: "Email",
        value: sEmail
    }, {
        type: "Text",
        value: "31.12.2022",
        iconSrc: "faCalendarDay"
    }, {
        type: "Number",
        value: oSchool.classTeacher,
        iconSrc: "faChalkboardUser"
    }, {
        type: "Number",
        value: oSchool.subjectTeacher,
        iconSrc: "faRectangleHistoryCircleUser",
    }, {
        type: "Number",
        value: oSchool.students,
        iconSrc: "faScreenUsers"
    }, {
        type: "Status",
        value: "Free",
        borderColor: "#d3366e",
        backgroundColor: "#d885a3",
        onClick: (oEvt) => {}
    }]);

    /** @private
     *  @param {object} oSchool
     *  @param {number} oSchool.classTeacher
     *  @param {number} oSchool.subjectTeacher
     *  @param {number} oSchool.students */
    const _updateCounterInfo = ({ classTeacher, subjectTeacher, students }) => {
        setCounterInfo((oCounterInfo) => {
            return {
                ...oCounterInfo,
                schools: oCounterInfo.schools + 1,
                teachers: oCounterInfo.teachers + (classTeacher + subjectTeacher),
                students: oCounterInfo.students + students
            }
        });
    };

    /** @private */
    const _resetCounterInfo = () => {
        setCounterInfo((oCounterInfo) => {
            return {
                ...oCounterInfo,
                schools: 0,
                teachers: 0,
                students: 0
            }
        });
    };

    return (
        <Table
            tableKey="Schools"
            searchable={true}
            filterable={true}
            pagination={true}
            showLineNumber={true}
            showLoader={showLoader}
            // linesPerPage={2}
            content={<div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed d ipsum dolor sit amet.</div>}
            contentInitialVisibility={false}
            headerCards={_getHeaderCards()}
            columns={oColumns["Schools"]}
            rows={rows}/>
    );
}