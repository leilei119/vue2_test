// 项目发布阶段需要用到的babel插件
const prodPlugins=[]
if(process.env.NODE_ENV === 'production'){
  // 发布阶段用这个移除console.log的插件
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    ...prodPlugins,//发布产品时候的插件数组
    '@babel/plugin-syntax-dynamic-import'//路由懒加载模式
  ]
}
