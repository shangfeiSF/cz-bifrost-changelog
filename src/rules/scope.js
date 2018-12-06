var commitizen = require('commitizen');

var CONSTANTS = require('../constants');
var SCOPES_MAP = require('../scopes');

module.exports = function () {
    var czConfig = commitizen.configLoader.load();

    var SCOPES = czConfig.moduleName && czConfig.moduleName.length && SCOPES_MAP[czConfig.moduleName]
        ? SCOPES_MAP[czConfig.moduleName]
        : require('../scopes/common');

    return {
        'scope-case': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, 'camel-case'],
        'scope-empty': [CONSTANTS.ERROR, CONSTANTS.NEVER],
        'scope-enum': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, Object.keys(SCOPES.enumValues)]
    }
};