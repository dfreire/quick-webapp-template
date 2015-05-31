var path = require('path');

var config = {
    entry: ['./js/main.jsx'],
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: [/\.jsx?$/],
            loaders: ['babel']
        }, {
            test: [/\.css$/, /\.scss$/],
            loader: 'style!css!sass'
        }]
    }
};

module.exports = config;
