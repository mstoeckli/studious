import React, { useEffect } from 'react';

import { isValid } from "./assets/api/Authentication";
import { useAuth } from "./context/AuthProvider";

import { HomePage } from './pages/HomePage';

/** @public
 *  @constructor */
function App() {
    /** @desc Get validity function for validate JWT token */
    const { onIsValid } = useAuth();

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        /** @desc Check server-side validity */
       isValid()
       .then(({ success, message, data }) => {
           if (success) onIsValid({
               userId: data.userId,
               email: data.email
           });
       })
    }, [])

    return (
        <div id="app">
            <HomePage />
        </div>
    );
}

export default App;