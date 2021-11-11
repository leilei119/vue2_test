<template>
  <div class="login">
    <div class="login_box animate__animated animate__zoomInDown">
      <!-- 头像区域 -->
      <div class="login_img">
        <img src="../../assets/logo.jpg">
      </div>
      <!-- 表单区 -->
      <el-form status-icon label-width="0px" class="forms" 
        :model="loginForm" 
        :rules="loginFormRules"
        ref="loginFormRef">
        <el-form-item prop='name'>
          <el-input prefix-icon="iconfont icon-yonghu2" placeholder="请输入登录名称"
            v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item prop='password'>
          <el-input type="password" prefix-icon="iconfont icon-mima2"  placeholder="请输入登录密码"
            v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()" style="width:100%;background-color:#823ee8;">登录</el-button>
        </el-form-item>
        <el-form-item class="dz">
          <router-link to="/uppass">修改密码</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link :to="{name:'zhuce'}">注册</router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    data() {
      return {
        // 登录表单的数据绑定对象
        loginForm:{
          name:'chenpu',
          password:'111111'
        },
        // 验证规则对象
        loginFormRules:{
          // 验证用户名
          name:[
            // 必填            错误提示                   光标离开校验
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'change' }
          ],
          // 验证密码
          password:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      // 登录校验
      login(){
        // element:对整个表单进行预验证validate()参数是回调函数:是否校验成功/未通过校验的字段
        this.$refs.loginFormRef.validate(async valid=>{
          // 1.根据预验证判断是否发起请求
          if(! valid) return
          // 2.发送ajax请求 返回promise 用async await   {data:res}解构赋值获得data
          const {data:res} = await this.$axios.post('login',this.loginForm)
          // 3.登陆失败:提示
          if(!res.success) return this.$mess.error(res.message)
          // 4.登陆成功:提示
          this.$mess.success(res.message)
          // 5.登陆成功:存储用户信息
          window.sessionStorage.setItem('username',this.loginForm.name)
          // 6.vuex操作数据:将用户名放入vuex
          this.$store.commit('NAMELOGIN',this.loginForm.name)
          this.$store.commit('SETD',res.data)
          // 7.登陆成功:跳转路由到个人中心首页 
          this.$router.push({
            name:'personal',
          })
          
        })
      }
    },
    // 组件内路由守卫,进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      // 已登录状态回到登录界面,就是退出
      next(vm=>{
        vm.$store.commit('NAMELOGIN',null)
      })
    }
    
}
</script>

<style scoped>
  .login{
    height: 100%;

  }
  .login_box{
    width: 450px;
    height: 350px;
    background-color: #fff;
    opacity: 0.9;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px rgb(223, 121, 5);
  }
  .login_img{
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgb(108, 6, 148);
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .login_img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 10px rgb(108, 6, 148);
  }
  .forms{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .dz{
    display: flex;
    justify-content: flex-end;
  }
  .dz a{
    color: #5c5d65;
  }
</style>