var CONSTANTS = require('../constants');

var subjectMinLength = 8;
var subjectMaxLength = 64;
var subjectFullStop = '.';

module.exports.subjectMinLength = subjectMinLength;
module.exports.subjectMaxLength = subjectMaxLength;
module.exports.subjectFullStop = subjectFullStop;

module.exports.rules = {
    'subject-case': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, ['sentence-case', 'start-case', 'camel-case', 'pascal-case', 'kebab-case']],
    'subject-empty': [CONSTANTS.ERROR, CONSTANTS.NEVER],
    'subject-min-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, subjectMinLength],
    'subject-max-length': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, subjectMaxLength],
    'subject-full-stop': [CONSTANTS.ERROR, CONSTANTS.ALWAYS, subjectFullStop]
};