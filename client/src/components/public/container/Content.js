import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { StyledContent } from '../../../styles/public/container/Content.styles';

import { PrivateRoute } from '../../../routes/PrivateRoute';

import { Home } from './content/Home';
import { SignIn } from "./content/SignIn";
import { SignUp } from "./content/SignUp";
import { Schools } from "./content/Schools";

import { useContentContext } from '../../../context/ContentProvider';
import { SignUpProvider } from '../../../context/SignUpProvider';
import { SignInProvider } from '../../../context/SignInProvider';

/** @public
 *  @constructor
 *  @param   {object} oProperties
 *  @param   {number} oProperties.iSidebarWidthPx
 *  @param   {string} oProperties.contentKey
 *  @returns {JSX.Element} Content */
export const Content = ({ contentKey, iSidebarWidthPx }) => {
    /** @desc Get content provider context */
    const { values, setSidebarWidthPx } = useContentContext();

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
            oNavigate(`${contentKey === "home" ? "/" : `/${contentKey}`}`);
            setActiveContentKey(contentKey);
        } setSidebarWidthPx(iSidebarWidthPx);
    }, [contentKey, iSidebarWidthPx, oNavigate]);

    return (
        <StyledContent
            style={{ width: `calc(100% - ${values.sidebarWidthPx}px)` }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={
                    <SignInProvider>
                        <SignIn />
                    </SignInProvider>
                } />
                <Route path="/signup" element={
                    <SignUpProvider>
                        <SignUp />
                    </SignUpProvider>
                } />
                <Route path="/schools" element={<Schools />} />
            </Routes>
        </StyledContent>
    )
}