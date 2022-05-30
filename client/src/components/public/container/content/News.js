import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Table } from '../../../base/Table';
import { Dialog } from "../../../base/messages/Dialog";

import { delay } from '../../../../helpers/Helper';

import { useAuth } from '../../../../context/AuthProvider';

import { Codes } from '../../../../models/core/messages/Codes';
import { Columns } from '../../../../models/base/table/Columns';

import { find } from '../../../../assets/api/School';

/** @public
 *  @constructor
 *  @returns {JSX.Element} News */
export const News = () => {
    /** @desc In a suspense-enabled app, the navigate function is aware of when your app is suspending.
     *        -> Used for changing the content after successful sign up */
    const oNavigate = useNavigate();

    /** @desc Get user object to check if user is signed in */
    const { user, onSignOut } = useAuth();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Used for displaying schools as table rows
     *  @type {[rows:array, setRows:function]} */
    const [ rows, setRows ] = useState([]);
    const aRows = []

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Used for refreshing data while fetching
     *  @type {[reload:boolean, setReload:function]} */
    const [ reload, setReload ] = useState(false)

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

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Used for displaying error dialog while fetching data from database
     *  @type {[error:{title:string, description:string}, setError:function]} */
    const [ error, setError ] = useState({});

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => _fetchSchools(), []);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        if (reload) {
            /** @desc Fetching school information */
            _fetchSchools();
        } setReload(false);
    }, [reload]);

    /** @private */
    const _fetchSchools = () => {
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
        _fetch()
            .then(async ({ success, data, url, message }) => {
                /** @desc Custom delay call to slow down for a smoother user handling */
                await delay(1000);

                if (success) {
                    if (data.success) {
                        for (const oSchool of data.schools) {
                            /** @desc Determine administrator email */
                            const { email } = oSchool.users.find(({ _id }) => _id === oSchool.admin);

                            /** @desc Update dashboard card information active schools/teachers and students */
                            _updateCounterInfo(oSchool);

                            /** @desc Add school information */
                            aRows.push(_addRow(oSchool, email));
                        } setRows(aRows);
                    } else _setError({ message: `${data.message} - ${url}` });
                } else _setError({ message: `${message} - ${url}` });

                /** @desc Hide busy indicator/loader */
                setShowLoader(false);
            })
            .catch((oErr) => _setError(oErr));
    };

    /** @private
     *  @param {object} oErr
     *  @param {string} oErr.message */
    const _setError = ({ message }) => {
        /** @desc Hide busy indicator/loader */
        setShowLoader(false);
        setError((oError) => {
            return {
                ...oError,
                title: `${Codes["database-access"].key} - ${Codes["database-access"].text}`,
                description: message
            }
        });
    }

    // /** @private
    //  *  @returns {[object]} */
    // const _getHeaderCards = () => ([{
    //     icon: "faGraduationCap",
    //     title: "Schulen",
    //     info: counterInfo.schools,
    //     backgroundColor: "#98d1bf",
    //     borderColor: "#61cfac"
    // }, {
    //     icon: "faChalkboardUser",
    //     title: "Lehrer",
    //     info: counterInfo.teachers,
    //     backgroundColor: "#98b9d1",
    //     borderColor: "#5d9ecd"
    // }, {
    //     icon: "faUserGraduate",
    //     title: "Schüler",
    //     info: counterInfo.students,
    //     backgroundColor: "#d198a5",
    //     borderColor: "#cf5d77"
    // }]);

    /** @desc TODO: -SCHOOLS1: Implement partner project button */
    // {
    //     type: "Button",
    //         value: "Anfrage",
    //     iconSrc: "faDiagramSubtask",
    //     onClick: (oEvt) => {}
    // },

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
        value: user && oSchool.key === user.schoolKey ? "Abmelden" : "Anmelden",
        iconSrc: "faSignIn",
        disabled: user && oSchool.key !== user.schoolKey,
        customStyle: user && oSchool.key === user.schoolKey ? { backgroundColor: "var(--color-error)", borderColor: "var(--border-color-error)" } : {},
        onClick: async () => {
            if (!user) oNavigate("/signin", { state: { schoolKey: oSchool.key }})
            else {
                /** @desc Show busy indicator/loader */
                setShowLoader(true);
                document.cookie = "accessToken" + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                await onSignOut();

                setReload(true);
            }
        }
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
        <>
            <Table
                title="Schulen"
                tableKey="news"
                columns={Columns["Schools"]}
                rows={rows}
                content={{
                    jsxElement: [<div>Partner-Projekte:</div>, <div>Test 456</div>]
                }}
                quickOptionsVisibility={{
                    create: false,
                    dateCalendar: true
                }}
                pagination={{
                    active: true,
                    alignment: "right"
                }}
                showHeader={true}
                showLoader={showLoader}
                onCheckboxClicked={() => {}} />
            {Object.keys(error).length !== 0 && error.constructor === Object && <Dialog
                title={error.title}
                description={error.description}
                messageType="E"
                showSupport={true} />}
        </>
    );
}


