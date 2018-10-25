var CONSTANTS = require('../constants');

var SCOPES = require('../scopes').enumValues;

module.exports.rules = {
    'scope-case': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, 'camel-case'],
    'scope-empty': [CONSTANTS.ERROR, CONSTANTS.NEVER],
    'scope-enum': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, Object.keys(SCOPES)]
};