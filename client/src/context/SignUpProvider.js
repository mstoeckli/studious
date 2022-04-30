import { createContext, useContext, useState } from 'react';

import { SignUpProperties, SignUpProgress } from '../models/public/container/content/Authenticate';

/** @desc Create auth context for global usage */
const SignUpContext = createContext({});
export const useSignUpContext = () => useContext(SignUpContext);

/** @public
 *  @constructor
 *  @param {JSX.Element} children */
export const SignUpProvider = ({ children }) => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Current signup progress for displaying to the user
     *  @type {[progress:{id:string, icon:string, title:string, isActive:boolean, isCompleted:boolean}, setProgress:function]}*/
    const [ progress, setProgress ] = useState(SignUpProgress);

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Defines the initial signup values
     *  @type {[values:{}, setValues:function]} */
    const [ values, setValues ] = useState({
        email: String(),
        username: String(),
        userPatternMatches: {
            email: false,
            username: false
        },
        password: String(),
        confirmPassword: String(),
        securityPatternMatches: {
            password: false,
            confirmPassword: false
        },
        schoolKey: 0,
        schoolName: String(),
        address: String(),
        latitude: 0,
        longitude: 0,
        schoolPatternMatches: {
            address: false,
            schoolName: false,
            route: false,
            street_number: false,
            postal_code: false,
            locality: false,
            country: false
        },
        classTeacher: 0,
        subjectTeacher: 0,
        students: 0,
        licensePatternMatches: {
            classTeacher: false,
            subjectTeacher: false,
            students: false
        }
    });

    /** @public
     *  @param {string} sKey
     *  @param {*} value */
    const onAddValue = ( sKey, value) => {
        setValues((oValues) => {
            return {...oValues, [sKey]: value}
        });
    };

    /** @public
     *  @param {object} oCurrent
     *  @param {string} oCurrent.id
     *  @param {boolean} oCurrent.isCompleted
     *  @param {boolean} oCurrent.isActive
     *  @param {object} oNext
     *  @param {string} oNext.id
     *  @param {boolean} oNext.isCompleted
     *  @param {boolean} oNext.isActive */
    const onProgressNext = (oCurrent, oNext) => _onProgressChange(oCurrent, oNext);

    /** @public
     *  @param {object} oCurrent
     *  @param {string} oCurrent.id
     *  @param {boolean} oCurrent.isCompleted
     *  @param {boolean} oCurrent.isActive
     *  @param {object} oPrevious
     *  @param {string} oPrevious.id
     *  @param {boolean} oPrevious.isCompleted
     *  @param {boolean} oPrevious.isActive */
    const onProgressBack = (oCurrent, oPrevious) => _onProgressChange(oCurrent, oPrevious);

    /** @private
     *  @param {object} oCurrent
     *  @param {string} oCurrent.id
     *  @param {boolean} oCurrent.isCompleted
     *  @param {boolean} oCurrent.isActive
     *  @param {object} oNewProgress
     *  @param {string} oNewProgress.id
     *  @param {boolean} oNewProgress.isCompleted
     *  @param {boolean} oNewProgress.isActive */
    const _onProgressChange = (oCurrent, oNewProgress) => {
        setProgress((aProgress) => {
            return aProgress.map((oProgress) => {
                if (oProgress.id === oCurrent.id) return {
                    ...oProgress,
                    isCompleted: oCurrent.isCompleted,
                    isActive: oCurrent.isActive
                };

                if (oProgress.id === oNewProgress.id) return {
                    ...oProgress,
                    isActive: oNewProgress.isActive,
                    isCompleted: oNewProgress.isCompleted
                }; return oProgress;
            });
        });
    }

    /** @desc Defines the provider value object for returning data and functions */
    const oValue = {
        values,
        progress,
        onAddValue,
        onProgressNext,
        onProgressBack,
        properties: SignUpProperties,
    }

    return (
        <SignUpContext.Provider value={oValue}>
            {children}
        </SignUpContext.Provider>
    )
};

export default SignUpContext;
