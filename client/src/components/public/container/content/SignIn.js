import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledSignIn } from '../../../../styles/public/container/content/SignIn.styles';

import { signIn } from "../../../../assets/api/Authentication";
import { useAuth } from '../../../../context/AuthProvider';

import { FormInput } from '../../../base/forms/Input';
import { FormButton } from '../../../base/forms/Button';

import { Copyright } from "../../../core/Copyright";

import { RegexExp } from '../../../../constants/RegexExp';
import { PrefixId } from '../../../../constants/PrefixComponent';



import img5 from '../../../../assets/pictures/img_13.png';

/** @public
 *  @constructor
 *  @returns {JSX.Element} SignIn */
export const SignIn = () => {
    const { onSignIn } = useAuth();

    const [ values, setValues ] = useState({
        email: String(),
        password: String()
    });

    const [ error, setError ] = useState(String());

    const [ loading, setLoading ] = useState(false);

    const oNavigate = useNavigate();

    const onChange = (oEvt) => setValues({ ...values, [oEvt.target.name]: oEvt.target.value });



    return (
        <StyledSignIn>

        </StyledSignIn>
        // <StyledSignIn>
        //     <div className="content">
        //         <div className="content-auth">
        //             <div className="content-auth-mail">
        //                 <form onSubmit={(oEvt) => {
        //
        //                     oEvt.preventDefault();
        //                     debugger
        //                     signIn({
        //                         email: values.email,
        //                         password: values.password
        //                     })
        //                     .then(({ success, message, data }) => {
        //                         if (!success) setError(message);
        //                         else {
        //                             onSignIn({
        //                                 userId: data.userId,
        //                                 email: data.email
        //                             });
        //                             oNavigate(-1);
        //                         }
        //                     })
        //                     .catch((oErr) => {
        //                         debugger
        //                     })
        //
        //                 }}>
        //                     {SignInProps["auth-mail"].map((oInput) => (
        //                         <FormInput
        //                             key={`${PrefixId("signin-email", oInput.id)}`}
        //                             {...oInput}
        //                             value={values[oInput.name]}
        //                             pattern={RegexExp(oInput.name)}
        //                             fnChange={onChange}/>
        //                     ))}
        //                     <FormButton
        //                         text="Anmelden"
        //                         disabled={loading}/>
        //                 </form>
        //             </div>
        //         </div>
        //         <span className={error === String() ? "auth-mail-error auth-mail-error-none" : "auth-mail-error auth-mail-error-block"}>
        //             {error}
        //         </span>
        //         <div className="content-resetpw">
        //
        //         </div>
        //         <div className="content-copyright">
        //             <Copyright />
        //         </div>
        //     </div>
        // </StyledSignIn>
    )
}