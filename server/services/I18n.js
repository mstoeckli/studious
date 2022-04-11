const { I18n } = require('i18n');

/** @desc Initialize localization */
const i18n = new I18n({
    locales : ["de", "en"],
    defaultLocale: "en",
    autoReload : true,
    directory : __dirname + '/../locales'
});

module.exports = i18n;