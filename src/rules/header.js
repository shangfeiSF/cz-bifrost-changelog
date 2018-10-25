var CONSTANTS = require('../constants');

var scopeMaxCharacters = require('../scopes').maxCharacters;
var typeMaxCharacters = require('../types').maxCharacters;

var headerMinLength = 16;
var headerMaxLength = 64 + scopeMaxCharacters + typeMaxCharacters;

module.exports.headerMinLength = headerMinLength;
module.exports.headerMaxLength = headerMaxLength;

module.exports.rules = {
    'header-min-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, headerMinLength],
    'header-max-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, headerMaxLength]
};