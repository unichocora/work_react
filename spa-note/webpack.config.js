const ExtractTextPlugin = require('extract-text-webpack-plugin');
    

module.exports = {
    entry: [
        './src/main.js', './src/main.css'
    ],
    output: {path:'/home/ubuntu/workspace/spa-note/public',filename:'bundle.js'},
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css-loader!postcss-loader'
                ),
            },
        ],
    },
    devServer: {
        host: '0.0.0.0',
        contentBase: './public',
        port: 8080,
        inline: true,
        historyApiFallback:true,
        disableHostCheck: true,
    },
    plugins:[
        new ExtractTextPlugin('bundle.css'),
    ],
    devtool:'source-map',
};