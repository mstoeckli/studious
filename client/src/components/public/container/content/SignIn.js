import React, { useState, useEffect } from 'react';

import { StyledSignIn } from '../../../../styles/public/container/content/SignIn.styles';

import { School } from './signIn/School';
import { User } from './signIn/User';

import { Copyright } from "../../../core/Copyright";
import { MadeInSwitzerland } from "../../../core/MadeInSwitzerland";

import { useAuth } from '../../../../context/AuthProvider';
import { useSignInContext } from "../../../../context/SignInProvider";

import { signIn } from '../../../../assets/api/Authentication';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from "@fortawesome/pro-duotone-svg-icons";

/** @public
 *  @constructor
 *  @returns {JSX.Element} SignIn */
export const SignIn = () => {
    /** @desc Get signin provider context */
    const { values, progress } = useSignInContext();

    /** @desc Get signin function for signing in a user */
    const { onSignIn } = useAuth();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update error message after api call
     *  @type {[error:string, setError:function]} */
    const [ error, setError ] = useState(String());

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Show/Hide busy indicator/loader
     *  @type {[showLoader:boolean, setShowLoader:function]} */
    const [ showLoader, setShowLoader ] = useState(false);

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => setError(String()), [values]);

    /** @private
     *  @param {Event} oEvt */
    const _onSignIn = (oEvt) => {
        oEvt.preventDefault();

        /** @desc Show busy indicator/loader */
        setShowLoader(true);

        /** @desc Call api for singing in a user */
        signIn({
            key: values.schoolKey,
            username: values.username,
            password: values.password
        })
            .then(({ success, message, data }) => {
                if (!success) setError(message);
                /** @desc Update context provider after successful api call */
                else !data.success ? setError(data.message) : onSignIn({
                    userId: data.userId,
                    username: data.username,
                    email: data.email
                });

                /** @desc Hide busy indicator/loader */
                setShowLoader(false);
            })
            .catch((oErr) => setError(oErr.message));
    }

    /** @private
     *  @param   {object} oProgress
     *  @param   {string} oProgress.id
     *  @param   {string} oProgress.icon
     *  @param   {string} oProgress.title
     *  @param   {boolean} oProgress.isActive
     *  @param   {boolean} oProgress.isCompleted
     *  @returns {JSX.Element}  */
    const _addSignInProgressItem = (oProgress) => (
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
        <StyledSignIn>
            <div className="container">
                <form>
                    <ul>{progress.map((oProgress) => _addSignInProgressItem(oProgress))}</ul>
                    <School />
                    <User
                        errorMessage={error}
                        showLoader={showLoader}
                        onSignIn={_onSignIn}/>
                    <MadeInSwitzerland />
                    <Copyright />
                </form>
            </div>
        </StyledSignIn>
    )
}