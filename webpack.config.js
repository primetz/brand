const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        main: './src/main.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'public/js')
    }
};