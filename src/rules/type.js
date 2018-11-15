var CONSTANTS = require('../constants');
var TYPES = require('../types');

module.exports = function () {
    return {
        rules: {
            'type-case': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, 'camel-case'],
            'type-empty': [CONSTANTS.ERROR, CONSTANTS.NEVER],
            'type-enum': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, Object.keys(TYPES.enumValues)]
        }
    }
};