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
    title: "Administrator",
    isActive: false,
    isCompleted: false
}, {
    id: "password",
    icon: "faKey",
    title: "Passwort",
    isActive: false,
    isCompleted: false
}, {
    id: "school",
    icon: "faGraduationCap",
    title: "Schule",
    isActive: false,
    isCompleted: false
}, {
    id: "license",
    icon: "faFileCertificate",
    title: "Lizenzen",
    isActive: false,
    isCompleted: false
}, {
    id: "abo",
    icon: "faCoins",
    title: "Abonnement",
    isActive: false,
    isCompleted: false
}];

export const AuthProperties = {
    "provider": [{
        id: 3,
        title: "Weiter mit E-Mail",
        image: Mail,
        imageAlt: "Mail"
    }],
    "user": [{
        id: 1,
        name: "email",
        type: "text",
        placeholder: "marc.stoeckli@example.ch",
        message: "Invalid email address",
        label: "E-Mail Adresse",
        required: true,
        icon: "faEnvelope"
    }, {
        id: 2,
        name: "username",
        type: "text",
        placeholder: "mstoeckli",
        message: "Username should be 4-20 characters and does not include any special characters and has to be one word",
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
    }],
    "school": [{
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Grundschule Musterhausen",
        message: "Input must not be empty",
        label: "Name der Schule",
        required: true,
        icon: "faGraduationCap"
    }, {
        id: 2,
        name: "country",
        type: "text",
        placeholder: "Schweiz",
        message: "Input must not be empty",
        label: "Land",
        required: true,
        icon: "faEarthEurope"
    }, {
        id: 2,
        name: "postalCode",
        type: "text",
        placeholder: "5442",
        message: "Input must not be empty",
        label: "Postleitzahl",
        required: true,
        icon: "faInputNumeric"
    }, {
        id: 2,
        name: "city",
        type: "text",
        placeholder: "Musterhausen",
        message: "Input must not be empty",
        label: "Ortschaft",
        required: true,
        icon: "faMapPin"
    }, {
        id: 3,
        name: "address",
        type: "text",
        placeholder: "Feldstrasse 31",
        message: "Input must not be empty",
        label: "Adresse",
        required: true,
        icon: "faMapPin"
    }],
    "license": [{
        id: 1,
        name: "teacher",
        type: "number",
        placeholder: "10",
        message: "Input must not be empty",
        label: "Anzahl Lehrer-Lizenzen",
        required: true,
        icon: "faChalkboardUser"
    }, {
        id: 2,
        name: "students",
        type: "number",
        placeholder: "82",
        message: "Input must not be empty",
        label: "Anzahl Schüler-Lizenzen",
        required: true,
        icon: "faScreenUsers"
    }]
}