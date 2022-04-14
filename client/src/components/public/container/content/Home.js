import React from 'react';
import { Link } from "react-router-dom";

/** @public
 *  @constructor
 *  @returns {JSX.Element} Home */
export const Home = () => {
    return (
        <div>
            <Link to="/signup">Registrierung</Link>
            <p>Automatisierte Diktat-Prüfung (Deutsch)</p>
            <p>Formular-Generierung Prüfung (z.B.: Geschichte, Sprachen, Wirtschaft, Informatik)</p>
            <p>Verwaltung der Schule (Klassen, Klassenlehrer, Fachlehrer, Schüler, Budget, Ausflüge,... )</p>

        </div>
    )
}