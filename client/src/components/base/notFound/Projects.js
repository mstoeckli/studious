import { StyledProjectsNotFound } from '../../../styles/base/notFound/Projects.styles';

/** @public
 *  @constructor
 *  @returns {JSX.Element} ProjectsNotFound */
export const ProjectsNotFound = () => {
    /** @private
     *  @returns {JSX.Element} */
    const _addIllustration = () => (
        <div className="illustration">
            <div className="circle" />
            <div className="clip">
                <div className="paper">
                    {_addIllustrationFace()}
                </div>
            </div>
        </div>
    );

    /** @private
     *  @returns {JSX.Element} */
    const _addIllustrationFace = () => (
        <div className="face">
            <div className="eyes">
                <div className="eye eye-left" />
                <div className="eye eye-right" />
            </div>
            <div className="rosyCheeks rosyCheeks-left" />
            <div className="rosyCheeks rosyCheeks-right" />
            <div className="mouth" />
        </div>
    );

    return (
        <StyledProjectsNotFound>
            <div className="error-code">
                <div className="number">4</div>
                {_addIllustration()}
                <div className="number">4</div>
            </div>
            <span className="title">Oops. It looks like the database fall asleep or ... </span>
            <span className="description">... you got lost while filtering the data </span>
        </StyledProjectsNotFound>
    )
}