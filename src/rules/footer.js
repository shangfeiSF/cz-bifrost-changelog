var CONSTANTS = require('../constants');

module.exports = function () {
    var footerMaxLines = 2;
    var footerMinLineLength = 8;
    var footerMaxLineLength = 64;

    return {
        footerMaxLines: footerMaxLines,
        footerMinLineLength: footerMinLineLength,
        footerMaxLineLength: footerMaxLineLength,
        rules: {
            'footer-leading-blank': [CONSTANTS.ERROR, CONSTANTS.ALWAYS],
            'footer-max-line-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, footerMaxLineLength]
        }
    };
};