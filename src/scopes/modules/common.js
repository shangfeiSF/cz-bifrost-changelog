var enumValues = {
    action: {
        description: "Changes in actions.",
        title: "Action"
    },
    conf: {
        description: "Changes in conf.",
        title: "Conf"
    },
    lib_render: {
        description: "Changes in any render method of lib.",
        title: "Lib Render"
    },
    lib_helpers: {
        description: "Changes in the helpers of lib.",
        title: "Lib Helpers"
    },
    lib_utils: {
        description: "Changes in the utils of lib.",
        title: "Lib Utils"
    },
    lib_others: {
        description: "Changes in others of lib.",
        title: "Lib Others"
    },
    public: {
        description: "Changes in public.",
        title: "Public"
    },
    adaptors: {
        description: "Changes in src/adaptors.",
        title: "Adaptors"
    },
    logger: {
        description: "Changes in src/logger.",
        title: "Logger"
    },
    utils: {
        description: "Changes in src/utils.",
        title: "Utils"
    },
    boot_index: {
        description: "Changes in src/boot or src/index.",
        title: "Boot or Index"
    },
    bin: {
        description: "Changes about command in ./bin",
        title: "Bin"
    },
    fis: {
        description: "Changes in the config of fis.",
        title: "Fis"
    },
    compile: {
        description: "Affect compiled code.",
        title: "Compile"
    },
    ians: {
        description: "I am not sure the scope!",
        title: "I am not sure."
    }
};

module.exports.enumValues = enumValues;

module.exports.maxCharacters = Math.max.apply(Math, Object.keys(enumValues).map(function (value) {
    return value.length
}));
