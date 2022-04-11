import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../context/AuthProvider';

/** @public
 *  @constructor
 *  @desc    Initialize and return a private routing object for handling private pages
 *  @param   {any} children
 *  @returns {*|JSX.Element} PrivateRoute */
export const PrivateRoute = ({ children }) => {
    /** @desc Get user object to check if user is signed in */
    const { user } = useAuth();
    return user ? children : <Navigate to="/signin" />;
}