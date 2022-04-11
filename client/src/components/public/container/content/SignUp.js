import React, { useContext } from 'react';

import { StyledSignUp } from '../../../../styles/public/container/content/SignUp.styles';

import { Provider } from './signUp/Provider';
import { User } from './signUp/User';
import { Password } from './signUp/Password';

import { Copyright } from "../../../core/Copyright";

import { useSignUpContext } from "../../../../context/SignUpProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaDuotoneIcons from '@fortawesome/pro-duotone-svg-icons';


/** @public
 *  @constructor
 *  @returns {JSX.Element} SignUp */
export const SignUp = () => {
    const { progress } = useSignUpContext();

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
            <form>
                <ul>
                    {progress.map((oProgress) => _addSignUpProgressItem(oProgress))}
                </ul>
                <Provider />
                <User />
                <Password />
            </form>
            <Copyright />
        </StyledSignUp>
    )
}