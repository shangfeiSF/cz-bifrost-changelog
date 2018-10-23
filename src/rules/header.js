var CONSTANTS = require('../constants');

var headerMinLength = 16;
var headerMaxLength = 64;

module.exports.headerMinLength = headerMinLength;
module.exports.headerMaxLength = headerMaxLength;

module.exports.rules = {
    'header-min-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, headerMinLength],
    'header-max-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, headerMaxLength]
};