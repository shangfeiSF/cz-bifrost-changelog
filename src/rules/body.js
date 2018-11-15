var CONSTANTS = require('../constants');

module.exports = function () {
    var bodyMaxLines = 2;
    var bodyMinLineLength = 8;
    var bodyMaxLineLength = 64;

    return {
        bodyMaxLines: bodyMaxLines,
        bodyMinLineLength: bodyMinLineLength,
        bodyMaxLineLength: bodyMaxLineLength,
        rules: {
            'body-leading-blank': [CONSTANTS.ERROR, CONSTANTS.ALWAYS],
            'body-max-line-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, bodyMaxLineLength]
        }
    };
};