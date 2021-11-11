module.exports = {
    /*
        vue.config.js配置文件
        使用vue inspect > output.js可以查看Vue脚手架的默认配置
        使用vue.config.js可以对脚手架进行个性化定制,详情见:https://cli.vuejs.org/zh
    */
    pages:{
        index:{
            // 入口
            entry:'src/main.js',
        },
    },
    lintOnSave:false,
    // 打包dist:配置不生成map文件。
    productionSourceMap: false
    // 配置代理
    // devServer: {
    //     proxy: {
    //         '/api': {//匹配所有以api开头的请求路径
    //         target: 'http://webapi.tjchiyingkeji.com:1314',//请求的后台api路径
    //         pathRewrite:{'^/api':''},//路径重写,匹配以api开头的路径 
    //         ws: true,//支持websocket
    //         changeOrigin: true
    //         }
    //     }
    // }
}