import { createContext, useContext, useState } from 'react';

/** @desc Create auth context for global usage */
const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

/** @public
 *  @constructor
 *  @param {JSX.Element} children */
export const AuthProvider = ({ children }) => {
    /** @desc Returns a stateful value, and a function to update it.
     *        -> Store signed in user
     *  @type {[sidebarToggle:boolean, setSidebarToggle:function]} */
    const [ user, setUser ] = useState(null);

    /** @public
     *  @param {object} oUser
     *  @param {string} oUser.userId
     *  @param {string} oUser.email */
    const onIsValid = (oUser) => setUser(oUser);

    /** @public
     *  @param {object} oUser
     *  @param {string} oUser.userId
     *  @param {string} oUser.email */
    const onSignIn = (oUser) => setUser(oUser);

    /** @public */
    const onSignOut = () => setUser(null);

    /** @desc Initialize context object for usage with "useAuth()" */
    const oValue = {
        user,
        onIsValid,
        onSignIn,
        onSignOut
    }

    return (
        <AuthContext.Provider value={oValue}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;