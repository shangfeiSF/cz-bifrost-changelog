var engine = require('./src/engine');

var headerRules = require('./src/rules/header');
var typeRules = require('./src/rules/type');
var scopeRules = require('./src/rules/scope');
var subjectRules = require('./src/rules/subject');
var bodyRules = require('./src/rules/body');
var footerRules = require('./src/rules/footer');

module.exports = engine();

module.exports.rules = {
    header: headerRules,
    type: typeRules,
    scope: scopeRules,
    subject: subjectRules,
    body: bodyRules,
    footer: footerRules
};