import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledSignUp } from '../../../../styles/public/container/content/SignUp.styles';

import { Provider } from './signUp/Provider';
import { User } from './signUp/User';
import { Password } from './signUp/Password';
import { School } from './signUp/School';
import { License } from './signUp/License';

import { Copyright } from "../../../core/Copyright";
import { MadeInSwitzerland } from "../../../core/MadeInSwitzerland";

import { useSignUpContext } from "../../../../context/SignUpProvider";

import { signUp } from '../../../../assets/api/Authentication';
import { createSchool } from '../../../../assets/api/School';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';

/** @public
 *  @constructor
 *  @returns {JSX.Element} SignUp */
export const SignUp = () => {
    /** @desc Get signup provider context */
    const { values, progress } = useSignUpContext();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update error message after api call
     *  @type {[error:string, setError:function]} */
    const [ error, setError ] = useState(String());

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Show/Hide busy indicator/loader
     *  @type {[showLoader:boolean, setShowLoader:function]} */
    const [ showLoader, setShowLoader ] = useState(false);

    /** @desc In a suspense-enabled app, the navigate function is aware of when your app is suspending.
     *        -> Used for changing the content after successful sign up */
    const oNavigate = useNavigate();

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => setError(String()), [values]);

    /** @private
     *  @param {Event} oEvt */
    const _onSignUp = (oEvt) => {
        oEvt.preventDefault();

        /** @desc Show busy indicator/loader */
        setShowLoader(true);

        /** @desc Call api for singing up a user */
        signUp({
            email: values.email,
            username: values.username,
            password: values.password
        })
        .then((oUser) => _createSchool(oUser.data.userId))
        .catch((oErr) => setError(oErr.message));
    };

    /** @private
     *  @param   {number} iUserId
     *  @returns {Promise<*>} */
    const _createSchool = (iUserId) => createSchool({
        key: values.schoolKey,
        name: values.schoolName,
        address: values.address,
        latitude: values.latitude,
        longitude: values.longitude,
        classTeacher: values.classTeacher,
        subjectTeacher: values.subjectTeacher,
        students: values.students,
        admin: iUserId,
        users: [iUserId]
    })
    .then(() => {
        /** @desc Hide busy indicator/loader and go forward to sign in page */
        setShowLoader(false);
        oNavigate("/signin");
    })
    .catch((oErr) => setError(oErr.message));

    /** @private
     *  @param   {object} oProgress
     *  @param   {string} oProgress.id
     *  @param   {string} oProgress.icon
     *  @param   {string} oProgress.title
     *  @param   {boolean} oProgress.isActive
     *  @param   {boolean} oProgress.isCompleted
     *  @returns {JSX.Element}  */
    const _addSignUpProgressItem = (oProgress) => (
        <li
            className={progress.find(({ id }) => id === oProgress.id).isActive ? "active": String()}
            id={oProgress.id}>
            <FontAwesomeIcon
                className={progress.find(({ id }) => id === oProgress.id).isCompleted ? "completed" : progress.find(({ id }) => id === oProgress.id).isActive ? "active" : String()}
                icon={FaDuotoneIcons[oProgress.icon]} />
            <h4>{oProgress.title}</h4>
        </li>
    );

    return (
        <StyledSignUp>
            <div className="container">
                <form>
                    <ul>{progress.map((oProgress) => _addSignUpProgressItem(oProgress))}</ul>
                    <Provider />
                    <User />
                    <Password />
                    <School />
                    <License
                        errorMessage={error}
                        showLoader={showLoader}
                        onSignUp={_onSignUp}/>
                    <MadeInSwitzerland />
                    <Copyright />
                </form>
            </div>
        </StyledSignUp>
    )
}