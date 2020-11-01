module.exports = {
    outputDir: 'dist',//构建输出目录
    assetsDir: 'assets',//静态资源目录
    lintOnSave: false,//是否开启ESLint
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}