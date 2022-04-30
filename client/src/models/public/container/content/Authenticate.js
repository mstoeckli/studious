import { Trans } from 'react-i18next';

import Mail from '../../../../assets/pictures/logos/Mail.png';

/** @public
 *  @returns {[]} aSignUpProgress */
export const SignUpProgress = [{
    id: "provider",
    icon: "faRobot",
    title: <Trans i18nKey="Container.Content.Authenticate.SignUpProgress.Provider.title" />,
    isActive: true,
    isCompleted: false
}, {
    id: "user",
    icon: "faSignature",
    title: <Trans i18nKey="Container.Content.Authenticate.SignUpProgress.Administrator.title" />,
    isActive: false,
    isCompleted: false
}, {
    id: "password",
    icon: "faKey",
    title: <Trans i18nKey="Container.Content.Authenticate.SignUpProgress.Password.title" />,
    isActive: false,
    isCompleted: false
}, {
    id: "school",
    icon: "faGraduationCap",
    title: <Trans i18nKey="Container.Content.Authenticate.SignUpProgress.School.title" />,
    isActive: false,
    isCompleted: false
}, {
    id: "license",
    icon: "faFileCertificate",
    title: <Trans i18nKey="Container.Content.Authenticate.SignUpProgress.License.title" />,
    isActive: false,
    isCompleted: false
}];

/** @public
 *  @returns {[]} aSignInProgress */
export const SignInProgress = [{
    id: "school",
    icon: "faGraduationCap",
    title: <Trans i18nKey="Container.Content.Authenticate.SignInProgress.School.title" />,
    isActive: true,
    isCompleted: false
},{
    id: "user",
    icon: "faSignature",
    title: <Trans i18nKey="Container.Content.Authenticate.SignInProgress.User.title" />,
    isActive: false,
    isCompleted: false
}]

/** @public
 *  @returns {{}} oSignUpProperties */
export const SignUpProperties = {
    "provider": [{
        id: 3,
        title: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.Provider.title" />,
        image: Mail,
        imageAlt: "Mail"
    }],
    "user": [{
        id: 1,
        name: "email",
        type: "text",
        placeholder: "marc.stoeckli@example.ch",
        message: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.User.Email.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.User.Email.label" />,
        required: true,
        icon: "faEnvelope"
    }, {
        id: 2,
        name: "username",
        type: "text",
        placeholder: "mstoeckli",
        message: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.User.Username.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.User.Username.label" />,
        required: true,
        icon: "faUser"
    }],
    "password": [{
        id: 1,
        name: "password",
        type: "password",
        placeholder: "Gh3*2!k7",
        message: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.Password.Password.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.Password.Password.label" />,
        required: true,
        icon: "faKey"
    }, {
        id: 2,
        name: "confirmPassword",
        type: "password",
        placeholder: "Gh3*2!k7",
        message: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.Password.ConfirmPassword.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.Password.ConfirmPassword.label" />,
        required: true,
        icon: "faKey"
    }],
    "school": [{
        id: 1,
        name: "schoolKey",
        type: "text",
        message: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.School.SchoolKey.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.School.SchoolKey.label" />,
        required: true,
        readOnly: true,
        icon: "faIdBadge",
        isAddress: false,
    }, {
        id: 2,
        name: "schoolName",
        type: "text",
        placeholder: "Grundschule Musterhausen",
        message: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.School.SchoolName.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.School.SchoolName.label" />,
        required: true,
        icon: "faGraduationCap",
        isAddress: false
    }, {
        id: 3,
        name: "address",
        type: "text",
        placeholder: "Feldstrasse 31g, (5442) Fislisbach, Switzerland",
        message: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.School.Address.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.School.Address.label" />,
        required: true,
        icon: "faMapPin",
        isAddress: true
    }],
    "license": [{
        id: 1,
        name: "classTeacher",
        type: "number",
        placeholder: "10",
        message: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.License.ClassTeacher.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.License.ClassTeacher.label" />,
        required: true,
        icon: "faChalkboardUser"
    }, {
        id: 2,
        name: "subjectTeacher",
        type: "number",
        placeholder: "22",
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.License.SubjectTeacher.label" />,
        required: false,
        icon: "faRectangleHistoryCircleUser"
    },{
        id: 3,
        name: "students",
        type: "number",
        placeholder: "82",
        message: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.License.Students.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignUpProperties.License.Students.label" />,
        required: true,
        icon: "faScreenUsers"
    }]
}

export const SignInProperties = {
    "school": [{
        id: 1,
        name: "schoolKey",
        type: "text",
        placeholder: "8435",
        message: <Trans i18nKey="Container.Content.Authenticate.SignInProperties.School.SchoolKey.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignInProperties.School.SchoolKey.label" />,
        required: true,
        icon: "faIdBadge"
    }],
    "user": [{
        id: 2,
        name: "username",
        type: "text",
        placeholder: "mstoeckli",
        message: <Trans i18nKey="Container.Content.Authenticate.SignInProperties.User.Username.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignInProperties.User.Username.label" />,
        required: true,
        icon: "faUser"
    }, {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Gh3*2!k7",
        message: <Trans i18nKey="Container.Content.Authenticate.SignInProperties.User.Password.message" />,
        label: <Trans i18nKey="Container.Content.Authenticate.SignInProperties.User.Password.label" />,
        required: true,
        icon: "faKey"
    }]
}