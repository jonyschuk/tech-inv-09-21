const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                react: 'react@http://localhost:3001/remoteEntry.js' // points to child app - watch ports!
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
}; 