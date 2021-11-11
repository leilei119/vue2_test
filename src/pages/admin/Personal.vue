<template>
  <!-- 个人中心 -->
  <el-container>
    <!-- 左侧树导航 -->
    <el-aside width="200px">
      <el-menu background-color="rgb(157 84 231)" text-color="#fff" active-text-color="#ffd04b" 
                :unique-opened="true" 
                router
                :default-active="$route.path">
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页</span>
        </el-menu-item>
        <el-menu-item index="/student">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">学生成绩</span>
        </el-menu-item>
        <el-submenu index="/rights">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>权限管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/roles"><i class="el-icon-discount"></i>角色列表</el-menu-item>
            <el-menu-item index="/rights"><i class="el-icon-discount"></i>权限列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/user">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user"><i class="el-icon-discount"></i>用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/datat">
          <i class="el-icon-tickets"></i>
          <span slot="title">数据统计</span>
        </el-menu-item>
        <el-menu-item index="/us">
          <i class="el-icon-tickets"></i>
          <span slot="title">关于我们</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 中间 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
    name:'Personal',
}
</script>

<style scoped>
  
</style>