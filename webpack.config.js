var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    watch: true,
    entry: __dirname + '/src/index.js',
    output: {
        publicPath: '/',
        filename: './dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'stage-0']
            }
        }, {
            test: /\.css$/,
            use: ["style-loader", {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        importLoaders: 1,
                        camelCase: true
                    }
                }
            }]
        }]
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'index.html' })
    ]
};
