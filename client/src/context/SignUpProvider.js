import { createContext, useContext, useState } from 'react';

import { AuthProperties, SignUpProgress } from '../models/public/container/content/Authenticate';

/** @desc Create auth context for global usage */
const SignUpContext = createContext({});
export const useSignUpContext = () => useContext(SignUpContext);

/** @public
 *  @constructor
 *  @param {JSX.Element} children */
export const SignUpProvider = ({ children }) => {

    const [ progress, setProgress ] = useState(SignUpProgress);
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
        name: String(),
        country: String(),
        city: String(),
        street: String(),
        schoolPatternMatches: {
            name: false,
            country: false,
            city: false,
            street: false
        }
    });

    const onAddValue = ( sKey, sValue) => {
        debugger
        setValues((oValues) => {
            debugger

            return {...oValues, [sKey]: sValue}
        })
    };

    const onProgressNext = (oCurrent, oNext) => _onProgressChange(oCurrent, oNext);

    const onProgressBack = (oCurrent, oPrevious) => _onProgressChange(oCurrent, oPrevious);

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

    const oValue = {
        values,
        progress,
        onAddValue,
        onProgressNext,
        onProgressBack,
        properties: AuthProperties,
    }

    return (
        <SignUpContext.Provider value={oValue}>
            {children}
        </SignUpContext.Provider>
    )
};

export default SignUpContext;
