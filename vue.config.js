module.exports = {
    devServer: {
        // host: "localhost",
        // port: '8080',
        // https: false,
        // hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000', //API服务器的地址
                secure: false,
                ws: true, //代理websockets
                changeOrigin: true,
                pathRewrite: {
                    '': ''
                },

            }
        }
    }
}