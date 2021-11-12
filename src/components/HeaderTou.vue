<template>
     <!-- 头部 -->
    <div class="header_logo">
      <div class="header_left">
        <img src="../assets/images/logo2.jpg" >
      </div>
      <!-- 头部导航 -->
      <el-menu mode="horizontal" background-color="rgb(157 84 231)" text-color="#fff" active-text-color="#e58c2f"
        router>
        <el-submenu index="1">
          <template slot="title">HTML</template>
          <el-menu-item index="2-1">HTML</el-menu-item>
          <el-menu-item index="2-2">HTML</el-menu-item>
          <el-menu-item index="2-3">HTML</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">CSS</template>
          <el-menu-item index="2-1">css过度动画</el-menu-item>
          <el-menu-item index="2-2">css阴影</el-menu-item>
          <el-menu-item index="2-3">css边框</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">JS</template>
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
        <router-link to="/login">登录</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link :to="{name:'zhuce'}">注册</router-link>
      </div>
    </div>
</template>

<script>
export default {
    name:'HeaderTou'
}
</script>

<style scoped>
</style>