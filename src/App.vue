<template>
  <div id="app">
    <!-- 头部 -->
    <div class="header_logo">
      <div class="header_left">
        <router-link to="/shouye"><img src="./assets/logo2.jpg" ></router-link>
        <!-- <span>蕾baby</span> -->
      </div>
      <!-- 头部导航 -->
      <el-menu mode="horizontal" background-color="rgb(157 84 231)" text-color="#fff" active-text-color="#e58c2f"
        router v-show="!isLogin">
        <el-menu-item index="/home">HOME</el-menu-item>
        <el-submenu index="1">
          <template slot="title">vue2.0</template>
          <el-menu-item index="1-1">安装</el-menu-item>
          <el-menu-item index="1-2">基本使用</el-menu-item>
          <el-menu-item index="1-3">tips</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">@vue/cli</template>
          <el-menu-item index="2-1">安装</el-menu-item>
          <el-menu-item index="2-2">基本使用</el-menu-item>
          <el-menu-item index="2-3">tips</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">vuex</template>
          <el-menu-item index="3-1">JS</el-menu-item>
          <el-menu-item index="3-2">JS</el-menu-item>
          <el-menu-item index="3-3">JS</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">AXIOS</template>
          <el-menu-item index="4-1">AXIOS</el-menu-item>
          <el-menu-item index="4-2">AXIOS</el-menu-item>
          <el-menu-item index="4-3">AXIOS</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">VUE2.0</template>
          <el-menu-item index="5-1">AXIOS</el-menu-item>
          <el-menu-item index="5-2">AXIOS</el-menu-item>
          <el-menu-item index="5-3">AXIOS</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">@VUE/CLI</template>
          <el-menu-item index="6-1">CLI</el-menu-item>
          <el-menu-item index="6-2">CLI</el-menu-item>
          <el-menu-item index="6-3">CLI</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">VUEX</template>
          <el-menu-item index="7-1">VUEX</el-menu-item>
          <el-menu-item index="7-2">VUEX</el-menu-item>
          <el-menu-item index="7-3">VUEX</el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">VueRouter</template>
          <el-menu-item index="7-1">VueRouter</el-menu-item>
          <el-menu-item index="7-2">VueRouter</el-menu-item>
          <el-menu-item index="7-3">VueRouter</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="header_right">
        <div v-show="!isLogin">
          <router-link to="/login">个人中心</router-link>
        </div>
        <div v-show="isLogin">
          <b>hi,{{isLogin}}<i class="iconfont icon-xiaolian"></i></b>&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link to='/login'>[退出]</router-link>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    // 通过session获取vuex里面的username 来断定显示隐藏
    isLogin(){
      if(sessionStorage.getItem('username')){
        this.$store.commit('NAMELOGIN',sessionStorage.getItem('username'))
      }else{
        this.$store.commit('NAMELOGIN',null)
      }
        return this.$store.getters.username
    }
  }
}
</script>
<style>
  /* 所有组件头部样式 */
  .header_logo{
    background-color: rgb(157 84 231);
    height: 70px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_left{
    width: 70px;
    height: 100%;
  }
  .header_left img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .header_right a,b{
    color: #ebeaee;
    font-size: 14px;
  }
  
</style>

