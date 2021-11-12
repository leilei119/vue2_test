import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由懒加载模式  分组login
const Login = () => import(/* webpackChunkName: "login" */ '../pages/Login/Login.vue')
const Register = () => import(/* webpackChunkName: "login" */ '../pages/Login/Register.vue')
const UpdatePass = () => import(/* webpackChunkName: "login" */ '../pages/Login/UpdatePass.vue')
// import Login from '../pages/Login/Login.vue'
// import Register from '../pages/Login/Register.vue'
// import UpdatePass from '../pages/Login/UpdatePass.vue'

// 路由懒加载模式  分组home
const Home = () => import(/* webpackChunkName: "home" */ '../pages/home/Home.vue')
// import Home from '../pages/home/Home.vue'

// 路由懒加载模式  分组admin
const Personal = () => import(/* webpackChunkName: "admin" */ '../pages/admin/Personal.vue')
const Welcome = () => import(/* webpackChunkName: "admin" */ '../pages/admin/Welcome.vue')
const Student = () => import(/* webpackChunkName: "admin" */ '../pages/admin/Student/Student.vue')
const Us = () => import(/* webpackChunkName: "admin" */ '../pages/admin/Us.vue')
const Rights = () => import(/* webpackChunkName: "admin" */ '../pages/admin/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "admin" */ '../pages/admin/power/Roles.vue')
const User = () => import(/* webpackChunkName: "admin" */ '../pages/admin/user/User.vue')
const DataT = () => import(/* webpackChunkName: "admin" */ '../pages/admin/DataT.vue')

// import Personal from '../pages/admin/Personal.vue'
// import Welcome from '../pages/admin/Welcome.vue'
// import Student from '../pages/admin/Student/Student.vue'
// import Us from '../pages/admin/Us.vue'
// import Rights from '../pages/admin/power/Rights.vue'
// import Roles from '../pages/admin/power/Roles.vue'
// import User from '../pages/admin/user/User.vue'
// import DataT from '../pages/admin/DataT.vue'


Vue.use(VueRouter)

// 创建接收路由
const router = new VueRouter({
    routes:[
        // 一登录就是shouye组件
        {
            path:'/',
            redirect:'/home',
        },
        // 首页路由组件
        {
            name:'home',
            path:'/home',
            component:Home,
            meta:{
                isAuth:false,//不参与权限
                // title:'首页'//网页标题
            },
        },
        // 登录路由组件
        {
            name:'denglu',
            path:'/login',
            component:Login,
            meta:{
                isAuth:true,//参与权限
                title:'登录'//网页标题
            },
        },
        // 注册路由组件
        {
            name:'zhuce',
            path:'/register',
            component:Register,
            meta:{
                isAuth:false,//不参与权限
                title:'注册'//网页标题
            }
        },
        // 修改密码
        {
            name:'mima',
            path:'/uppass',
            component:UpdatePass,
            meta:{
                isAuth:false,//不参与权限
                title:'修改密码'//网页标题
            }
        },
        // 个人中心路由组件
        {
            name:'personal',
            path:'/personal',
            component:Personal,
            meta:{
                isAuth:true,//参与权限
                title:'个人中心'//网页标题
            },
            redirect:'/welcome',//一进入到个人中心就加载welcome组件
            children:[
                {
                    // 个人中心子路由组件-欢迎语
                    name:'welcome',
                    path:'/welcome',
                    component:Welcome,
                    meta:{
                        isAuth:true,//参与权限
                    },
                },
                {
                    // 个人中心子路由组件-学生成绩
                    name:'student',
                    path:'/student',
                    component:Student,
                    meta:{
                        isAuth:true,//参与权限
                    },
                },
                {
                    // 个人中心子路由组件-角色列表
                    name:'roles',
                    path:'/roles',
                    component:Roles,
                    meta:{
                        isAuth:true,//参与权限
                    },
                },
                {
                    // 个人中心子路由组件-权限列表
                    name:'rights',
                    path:'/rights',
                    component:Rights,
                    meta:{
                        isAuth:true,//参与权限
                    },
                },
                {
                    // 个人中心子路由组件-用户列表
                    name:'user',
                    path:'/user',
                    component:User,
                    meta:{
                        isAuth:true,//参与权限
                    },
                },
                {
                    // 个人中心子路由组件-数据统计
                    name:'datat',
                    path:'/datat',
                    component:DataT,
                    meta:{
                        isAuth:true,//参与权限
                    },
                },
                {
                    // 个人中心子路由组件-关于我们
                    name:'us',
                    path:'/us',
                    component:Us,
                    meta:{
                        isAuth:true,//参与权限
                    },
                },

            ]
        }
    ]
})

// 暴露前创建路由守卫:权限控制
router.beforeEach((to,form,next)=>{
    //to访问的组件是参与权限的
    if(to.meta.isAuth){
        //是登录页面--放行
        if(to.path==='/login' ){
            sessionStorage.removeItem('username')
            return next()
        } 
        // 不是就根据token有没有来判断是否放行
        const tokenStr=window.sessionStorage.getItem('username')
        // 存在token--放行
        if(tokenStr){
            next()
        } else{
            //没有token--跳转到登录页面
            return next('/login')
        }
    }else{
        //不参与权限的直接放行
        next()
    }
})

router.afterEach((to)=>{
    //修改网页标题
    if(to.meta.title){
        document.title = to.meta.title 
    }
})

// 暴露路由
export default router