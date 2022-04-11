import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { StyledContent } from '../../../styles/public/container/Content.styles';

import { PrivateRoute } from '../../../routes/PrivateRoute';

import { SignIn } from "./content/SignIn";
import { SignUp } from "./content/SignUp";

import { SignUpProvider } from '../../../context/SignUpProvider';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {number} oProperties.iSidebarWidthPx
 *  @param   {string} oProperties.contentKey
 *  @returns {JSX.Element} Content */
export const Content = ({ contentKey, iSidebarWidthPx }) => {
    /** @desc In a suspense-enabled app, the navigate function is aware of when your app is suspending.
     *        -> Used for changing the content after clicking element in the sidebar */
    const oNavigate = useNavigate();

    /** @desc Returns a stateful value, and a function to update it.
     *        -> Update active content key for handling the routing of nested routes
     *  @type {[activeContentKey:string, setActiveContentKey:function]} */
    const [ activeContentKey, setActiveContentKey ] = useState(contentKey)

    /** @desc Perform side effects in function components -> Similar to componentDidMount and componentDidUpdate */
    useEffect(() => {
        if (activeContentKey !== contentKey) {
            oNavigate(`/${contentKey}`);
            setActiveContentKey(contentKey);
        }
    }, [contentKey, oNavigate]);

    return (
        <StyledContent
            style={{ width: `calc(100% - ${iSidebarWidthPx}px)` }}>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={
                    <SignUpProvider>
                        <SignUp />
                    </SignUpProvider>
                } />
            </Routes>
        </StyledContent>
    )
}