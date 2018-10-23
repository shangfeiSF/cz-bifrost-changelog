var CONSTANTS = require('../constants');

var footerMaxLines = 2;
var footerMinLineLength = 8;
var footerMaxLineLength = 64;

module.exports.footerMaxLines = footerMaxLines;
module.exports.footerMinLineLength = footerMinLineLength;
module.exports.footerMaxLineLength = footerMaxLineLength;

module.exports.rules = {
    'footer-leading-blank': [CONSTANTS.ERROR, CONSTANTS.ALWAYS],
    'footer-max-line-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, footerMaxLineLength]
};