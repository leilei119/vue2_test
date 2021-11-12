module.exports = {
    // 为开发模式和发布模式指定不同的打包入口
   chainWebpack:config=>{
        // 发布模式
        config.when(process.env.NODE_ENV === 'production',config=>{
            // 发布模式入口文件
            config.entry('app').clear().add('./src/prod_env.js')

            // 发布模式加载cdn资源
            config.set('externals',{
                vue:'Vue',
                'vue-router':'VueRouter',
                axios:'axios',
                nprogress:'NProgress',
                vuex:'Vuex'
            })

            // 发布模式添加属性isProd 用于指定是发布模式
            config.plugin('html').tap(args=>{
                args[0].isProd = true
                return args
            })


        })
        // 开发环境入口文件
        config.when(process.env.NODE_ENV === 'development',config=>{
            // 开发模式入口文件
            config.entry('app').clear().add('./src/dev_env.js')

            // 开发模式添加属性isProd 用于指定是开发模式
            config.plugin('html').tap(args=>{
                args[0].isProd = false
                return args
            })
        })
        // 压缩图片
        config.module.rule('images').test(/\.(png|jpe?g|gif)(\?.*)?$/).use('image-webpack-loader')
        .loader('image-webpack-loader').options({
            bypassOnDebug:true
        }).end() 
   },
    // pages:{
    //     index:{
    //         // 入口
    //         entry:'src/main.js',
    //     }, 
    // },
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