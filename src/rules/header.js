var commitizen = require('commitizen');

var CONSTANTS = require('../constants');
var SCOPES_MAP = require('../scopes');
var TYPES = require('../types');

module.exports = function () {
    var czConfig = commitizen.configLoader.load();

    var SCOPES = czConfig.moduleName && czConfig.moduleName.length && SCOPES_MAP[czConfig.moduleName]
        ? SCOPES_MAP[czConfig.moduleName]
        : require('../scopes/common');

    var headerMinLength = 16;
    var headerMaxLength = 64 + SCOPES.maxCharacters + TYPES.maxCharacters;

    return {
        headerMinLength: headerMinLength,
        headerMaxLength: headerMaxLength,
        rules: {
            'header-min-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, headerMinLength],
            'header-max-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, headerMaxLength]
        }
    };
};