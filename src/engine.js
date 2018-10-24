require('colors');

var wrap = require('word-wrap');
var map = require('lodash.map');
var longest = require('longest');
var inquirer = require('inquirer');
var rightPad = require('right-pad');

var subjectRules = require('./rules/subject');
var bodyRules = require('./rules/body');
var footerRules = require('./rules/footer');

var TYPES = require('./types');
var SCOPES = require('./scopes');

inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));

module.exports = function () {
    var types_length = longest(Object.keys(TYPES)).length + 1;
    var types = map(TYPES, function (item, key) {
        return {
            name: rightPad(key + ':', types_length) + ' ' + item.description,
            value: key
        };
    });

    var scopes_length = longest(Object.keys(TYPES)).length + 1;
    var scopes = map(SCOPES, function (item, key) {
        return {
            name: rightPad(key + ':', scopes_length) + ' ' + item.description,
            value: key
        };
    });

    return {
        prompter: function (cz, commit) {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'type',
                        message: ['Select the'.green, 'type'.magenta, 'of changes that you are committing:'.green].join(' '),
                        choices: types
                    },
                    {
                        type: 'list',
                        name: 'scope',
                        message: ['Select the'.green, 'scope'.magenta, 'of changes that you are committing:'.green].join(' '),
                        choices: scopes
                    },
                    {
                        type: 'input',
                        name: 'subject',
                        message: ['Write a short'.green, 'subject'.magenta, 'to describe the changes:\n'.green].join(' '),
                        validate: function (value) {
                            if (value.length < subjectRules.subjectMinLength) {
                                return (
                                    'The subject is too short and current length is ' +
                                    value.length +
                                    '! The min-length is ' +
                                    subjectRules.subjectMinLength +
                                    '.'
                                ).red;
                            }

                            if (value.length > subjectRules.subjectMaxLength) {
                                return (
                                    'The subject is too long and current length is ' +
                                    value.length +
                                    '! The max-length is ' +
                                    subjectRules.subjectMaxLength +
                                    '.'
                                ).red;
                            }

                            if (
                                subjectRules.rules['subject-case'] &&
                                subjectRules.rules['subject-case'][2] &&
                                subjectRules.rules['subject-case'][2].indexOf('sentence-case') > -1
                            ) {
                                if (value.charCodeAt(0) >= 'a'.charCodeAt(0) && value.charCodeAt(0) <= 'z'.charCodeAt(0)) {
                                    return 'The first English letter must be capitalized.'.red;
                                }
                            }

                            if (subjectRules.subjectFullStop && subjectRules.subjectFullStop.length) {
                                var pattern = new RegExp('^.*\\' + subjectRules.subjectFullStop + '$', 'g')

                                if (pattern.exec(value) === null) {
                                    return ('The subject must be end with "' + subjectRules.subjectFullStop + '"').red;
                                }
                            }

                            return true;
                        }
                    },
                    {
                        type: 'input',
                        name: 'bodyLine1',
                        message: ['Provide the'.green, 'body line 1'.magenta, 'to describe the changes:\n'.green].join(' '),
                        validate: function (value) {
                            if (value.length < bodyRules.bodyMinLineLength) {
                                return (
                                    'The body line 1 is too short and current length is ' +
                                    value.length +
                                    '! The min-line-length is ' +
                                    bodyRules.bodyMinLineLength +
                                    '.'
                                ).red;
                            }

                            if (value.length > bodyRules.bodyMaxLineLength) {
                                return (
                                    'The body line 1 is too long and current length is ' +
                                    value.length +
                                    '! The max-line-length is ' +
                                    bodyRules.bodyMaxLineLength +
                                    '.'
                                ).red;
                            }

                            return true;
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'isNeedBodyLine2',
                        message: 'Do you need body line 2 to describe the changes?'.yellow,
                        default: false
                    },
                    {
                        type: 'input',
                        name: 'bodyLine2',
                        message: ['Provide the'.green, 'body line 2'.magenta, 'to describe the changes:\n'.green].join(' '),
                        validate: function (value) {
                            if (value.length < bodyRules.bodyMinLineLength) {
                                return (
                                    'The body line 2 is too short and current length is ' +
                                    value.length +
                                    '! The min-line-length is ' +
                                    bodyRules.bodyMinLineLength +
                                    '.'
                                ).red;
                            }

                            if (value.length > bodyRules.bodyMaxLineLength) {
                                return (
                                    'The body line 2 is too long and current length is ' +
                                    value.length +
                                    '! The max-line-length is ' +
                                    bodyRules.bodyMaxLineLength +
                                    '.'
                                ).red;
                            }

                            return true;
                        },
                        when: function (answers) {
                            return answers.isNeedBodyLine2;
                        }
                    },
                    {
                        type: 'suggest',
                        name: 'footer',
                        message: ['Provide the'.green, 'icafeId'.magenta, 'of the changes:\n'.green].join(' '),
                        suggestions: ['icafe: fc-native-tbrd-'],
                        validate: function (value) {
                            if (value.length < footerRules.footerMinLineLength) {
                                return (
                                    'The footer is too short and current length is ' +
                                    value.length +
                                    '! The min-line-length is ' +
                                    footerRules.footerMinLineLength +
                                    '.'
                                ).red;
                            }

                            if (value.length > footerRules.footerMaxLineLength) {
                                return (
                                    'The footer is too long and current length is ' +
                                    value.length +
                                    '! The max-line-length is ' +
                                    footerRules.footerMaxLineLength +
                                    '.'
                                ).red;
                            }

                            return true;
                        },
                    }
                ])
                .then(function (answers) {
                    var wrapOptions = {
                        trim: true,
                        newline: '\n',
                        indent: '',
                    };

                    var scope = '(' + answers.scope.trim() + ')';

                    var head = answers.type.trim() + scope + ': ' + answers.subject.trim();

                    var bodyLine1 = wrap(answers.bodyLine1, wrapOptions);
                    var bodyLine2 = wrap(answers.bodyLine2, wrapOptions);

                    var footer = wrap(answers.footer, wrapOptions);

                    commit(head + '\n\n' + bodyLine1 + (bodyLine2 ? ('\n' + bodyLine2) : '') + '\n\n' + footer);
                });
        }
    };
};
