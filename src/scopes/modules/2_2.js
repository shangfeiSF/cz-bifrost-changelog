var commonEnumValues = require('../common').enumValues;

var enumValues = Object.assign({}, commonEnumValues, {
    lego: {
        description: "Changes in [Lego].",
        title: "Lego"
    },
    cricus: {
        description: "Changes in [Cricus].",
        title: "Cricus"
    },
    cricusPb: {
        description: "Changes in [CricusPb].",
        title: "CricusPb"
    },
    chaotic: {
        description: "Changes in chaotic templates.",
        title: "Chaotic"
    }
});

module.exports.enumValues = enumValues;

module.exports.maxCharacters = Math.max.apply(Math, Object.keys(enumValues).map(function (value) {
    return value.length
}));
