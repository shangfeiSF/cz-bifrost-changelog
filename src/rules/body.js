var CONSTANTS = require('../constants');

var bodyMaxLines = 2;
var bodyMinLineLength = 8;
var bodyMaxLineLength = 64;

module.exports.bodyMaxLines = bodyMaxLines;
module.exports.bodyMinLineLength = bodyMinLineLength;
module.exports.bodyMaxLineLength = bodyMaxLineLength;

module.exports.rules = {
    'body-leading-blank': [CONSTANTS.ERROR, CONSTANTS.ALWAYS],
    'body-max-line-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, bodyMaxLineLength]
};