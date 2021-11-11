export default {
    namespace:true,//开启命名空间
    actions : {
        // 登录成功赋值用commit和mutations对话
        setD(context,tablist){
            context.commit('SETD',tablist)
        },
        namelogin(context,username){
            context.commit('NAMELOGIN',username)
        }
    },
    mutations : {
        // 登录成功赋值
        SETD(state,tablist){
            sessionStorage.setItem('tabdata',tablist)
            state.tabList=tablist
        },
        // 根据用户名有没有 判断登录退出
        NAMELOGIN(state,username){
            if(username === null){
                // 退出:清空session里的东西
                // sessionStorage.setItem('username',null)
                // sessionStorage.setItem('tabdata',null)
                window.sessionStorage.clear()
                state.username = null
                state.tabList = []
            }else if(username){
                state.username = username
            }
            
        },
    },
    state : {
        tabList:[],//表格数据
        username:'',//用户名
    },
    getters : {
        username(state){
            return state.username

        }
    }
}
