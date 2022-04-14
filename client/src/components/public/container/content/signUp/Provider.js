import { useSignUpContext } from "../../../../../context/SignUpProvider";

import { progressNext } from "../../../../../helpers/container/content/SignUp";

/** @public
 *  @constructor
 *  @returns {JSX.Element} Provider */
export const Provider = () => {
    /** @desc Get context properties for handling signing up progress */
    const { progress, properties, onProgressNext } = useSignUpContext();

    /** @private
     *  @param {MouseEvent<HTMLButtonElement>} oEvt */
    const _onClickStep2 = (oEvt) => {
        oEvt.preventDefault();
        progressNext(onProgressNext, "provider", true, "user");
    }

    return (
        <fieldset className={progress.find(({ id }) => id === "provider").isActive ? "active" : String()}>
            <h1>Wähle deinen Provider</h1>
            <p>Durch das Erstellen eines Kontos erklärst du dich mit <br/>unseren <a href="/">Nutzungsbedingungen</a> einverstanden und <br/> bestätigst, dass du unsere <a href="/">Datenschutzerklärung</a> gelesen <br/>und verstanden hast.</p>
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