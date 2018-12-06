var commonEnumValues = require('../common').enumValues;

var enumValues = commonEnumValues;

module.exports.enumValues = enumValues;

module.exports.maxCharacters = Math.max.apply(Math, Object.keys(enumValues).map(function (value) {
    return value.length
}));
