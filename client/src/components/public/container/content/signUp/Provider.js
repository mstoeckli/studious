import React from "react";
import { Trans, useTranslation } from 'react-i18next';

import { useSignUpContext } from "../../../../../context/SignUpProvider";

import { progressNext } from "../../../../../helpers/container/content/SignUp";

/** @public
 *  @constructor
 *  @returns {JSX.Element} Provider */
export const Provider = () => {
    /** @desc Get context properties for handling signing up progress */
    const { progress, properties, onProgressNext } = useSignUpContext();

    /** @desc Returns the translation function for reading from the locales files
     *  @type {function} t */
    const { t } = useTranslation();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep2 = (oEvt) => {
        oEvt.preventDefault();
        progressNext(onProgressNext, "provider", true, "user");
    }

    return (
        <fieldset className={progress.find(({ id }) => id === "provider").isActive ? "active" : String()}>
            <h1>{t('Container.Content.SignUp.Provider.title')}</h1>
            <p>{<Trans i18nKey="Container.Content.SignUp.Provider.description" t={t} components={[<a href="/" />, <a href="/" />]} />}</p>
            {properties["provider"].map((oButton) => (
                <button
                    className="signup-provider"
                    onClick={_onClickStep2}>
                    <img src={oButton.image} alt={oButton.imageAlt} />
                    <span>{oButton.title}</span>
                </button>
            ))}
        </fieldset>
    )
};