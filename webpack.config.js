const path = require('path');

module.exports = {
    entry: "./app/js/entry.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
             { test: /\.css$/, loader: "style!css"},
        ]
    }
};