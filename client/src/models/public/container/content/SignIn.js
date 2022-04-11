import Google from '../../../../assets/pictures/logos/Google.png';
import Twitter from '../../../../assets/pictures/logos/Twitter.svg';
import Mail from '../../../../assets/pictures/logos/Mail.png';

export const SignUpProgress = [{
    id: "provider",
    icon: "faRobot",
    title: "Provider",
    isActive: true,
    isCompleted: false
}, {
    id: "user",
    icon: "faSignature",
    title: "Benutzer",
    isActive: false,
    isCompleted: false
}, {
    id: "password",
    icon: "faKey",
    title: "Passwort",
    isActive: false,
    isCompleted: false
}];

export const AuthProperties = {
    "provider": [{
        id: 1,
        title: "Weiter mit Google",
        image: Google,
        imageAlt: "Google"
    }, {
        id: 2,
        title: "Weiter mit Twitter",
        image: Twitter,
        imageAlt: "Twitter"
    },{
        id: 3,
        title: "Weiter mit E-Mail",
        image: Mail,
        imageAlt: "Mail"
    }],
    "user": [{
        id: 1,
        name: "email",
        type: "text",
        placeholder: "hans.muster@codemize.ch",
        message: "Invalid email address",
        label: "E-Mail Adresse",
        required: true,
        icon: "faEnvelope"
    }, {
        id: 2,
        name: "username",
        type: "text",
        placeholder: "hmuster",
        message: "Invalid username",
        label: "Benutzername",
        required: true,
        icon: "faUser"
    }],
    "password": [{
        id: 1,
        name: "password",
        type: "password",
        placeholder: "Gh3*2!k7",
        message: "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character",
        label: "Passwort",
        required: true,
        icon: "faKey"
    }, {
        id: 2,
        name: "confirmPassword",
        type: "password",
        placeholder: "Gh3*2!k7",
        message: "Password does not match",
        label: "Passwort wiederholen",
        required: true,
        icon: "faKey"
    }]
}