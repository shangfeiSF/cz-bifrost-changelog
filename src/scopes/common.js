var enumValues = {
    afd: {
        description: "Changes in [AFD Access Layer].",
        title: "Afd"
    },
    as: {
        description: "Changes in [FeedAs Access Layer].",
        title: "FeedAs"
    },
    bs: {
        description: "Changes in [FeedBs Access Layer].",
        title: "FeedBs"
    },
    gd: {
        description: "Changes in [Gd Access Layer].",
        title: "Gd"
    },
    lib: {
        description: "Changes in ./lib.",
        title: "Lib"
    },
    query: {
        description: "Changes in [Query Process] of [Data Generating Layer].",
        title: "Query"
    },
    ppr: {
        description: "Changes in [Postprocessor Process] of [Data Generating Layer].",
        title: "Postprocessor"
    },
    exp: {
        description: "Changes in [Experiment Process] of [Data Generating Layer].",
        title: "Experiment"
    },
    routes: {
        description: "Changes in [Rouets Config] of [Data Generating Layer].",
        title: "Routes"
    },
    templates: {
        description: "Changes in [Templates] of [Data Generating Layer].",
        title: "Templates"
    },
    response: {
        description: "Changes in [Response Layer].",
        title: "Response"
    },
    startup: {
        description: "Changes in [Startup Layer].",
        title: "Startup"
    },
    test: {
        description: "Changes in ./test",
        title: "Test"
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
