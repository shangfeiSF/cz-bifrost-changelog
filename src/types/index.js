var enumValues = {
    feature: {
        description: "A new feature.",
        title: "Feature"
    },
    fixBug: {
        description: "Fix the bug.",
        title: "fixBug"
    },
    codeStyle: {
        description: "Make the code more normative.",
        title: "CodeStyle"
    },
    mocks: {
        description: "Change the mocked data.",
        title: "Mocks"
    },
    docs: {
        description: "Update the documentations",
        title: "Documentations"
    },
    perf: {
        description: "Improves the performances of code.",
        title: "Performances"
    },
    refactor: {
        description: "Refactor the problematic code.",
        title: "Refactor"
    },
    revert: {
        description: "Revert the previous code.",
        title: "Revert"
    },
    merge: {
        description: "Merge the code.",
        title: "Merge"
    },
    test: {
        description: "Add test or make a test.",
        title: "Test"
    },
    chore: {
        description: "Changes in development tools",
        title: "Chore"
    },
    compile: {
        description: "Changes in compile process.",
        title: "Compile"
    }
};

module.exports.enumValues = enumValues;

module.exports.maxCharacters = Math.max.apply(Math, Object.keys(enumValues).map(function (vaulue) {
    return vaulue.length
}));
