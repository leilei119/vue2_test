import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
Vue.use(Vuex)


// 创建暴露vuex
export default new Vuex.Store({
    modules:{
        login
    }
})