import React from 'react';
import { Link } from "react-router-dom";

/** @public
 *  @constructor
 *  @returns {JSX.Element} Home */
export const Home = () => {
    return (
        <Link to="/signup">Registrierung</Link>
    )
}