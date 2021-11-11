import Vue from 'vue'
import App from './App.vue'
// 引入vuex 对Vue应用中多个组件的共享状态进行集中式的管理(读/写)
import store from './vuex/index'
// 引入路由 实现单页面(SPA)应用
import router from './router/index'
// 导入全局样式表
import './assets/css/global.css'
// 引入animate.css
import 'animate.css'
// 按需引入element
import { Divider,CarouselItem,Carousel,Button,Form,FormItem,Input,Message,
         DatePicker,Table,TableColumn,MessageBox,Radio,RadioGroup,Menu,MenuItem,Submenu,
         MenuItemGroup,Container,Main,Aside,Breadcrumb,BreadcrumbItem,Card,Row,Col,Tooltip,
         Pagination  } from 'element-ui'
// 导入axios  发送网络请求
import axios from 'axios'


Vue.component('el-button',Button)
Vue.component('el-form',Form)
Vue.component('el-form-item',FormItem)
Vue.component('el-input',Input)
Vue.component('el-date-picker',DatePicker)
Vue.component('el-table',Table)
Vue.component('el-table-column',TableColumn)
Vue.component('el-radio',Radio)
Vue.component('el-radio-group',RadioGroup)
Vue.component('el-menu',Menu)
Vue.component('el-menu-item',MenuItem)
Vue.component('el-submenu',Submenu)
Vue.component('el-carousel',Carousel)
Vue.component('el-carousel-item',CarouselItem)
Vue.component('el-divider',Divider)
Vue.component('el-menu-item-group',MenuItemGroup)
Vue.component('el-container',Container)
Vue.component('el-main',Main)
Vue.component('el-aside',Aside)
Vue.component('el-breadcrumb',Breadcrumb)
Vue.component('el-breadcrumb-item',BreadcrumbItem)
Vue.component('el-card',Card)
Vue.component('el-row',Row)
Vue.component('el-col',Col)
Vue.component('el-tooltip',Tooltip)
Vue.component('el-pagination',Pagination)


// 配置请求的根路径
axios.defaults.baseURL = 'http://webapi.tjchiyingkeji.com:1314/api/'
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 挂载到原型对象上,让所有组件都能访问到this.$http
Vue.prototype.$axios=axios
Vue.prototype.$mess=Message 
Vue.prototype.$prompt=MessageBox

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  },
}).$mount('#app')
