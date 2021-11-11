<template>
  <div>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/personal' }">个人中心</el-breadcrumb-item>
      <el-breadcrumb-item>学生成绩</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- 搜索区域 -->
      <el-row :gutter="20">
        <!-- 搜索框 -->
        <el-col :span="9">
          <el-input placeholder="请输入内容" v-model="keySerch">
            <el-button slot="append" icon="el-icon-search" @click="serch"></el-button>
          </el-input>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="6">
          <el-button type="primary">添加信息</el-button>
        </el-col>
      </el-row>
      
      <!-- 表格 -->
      <el-table :data="tableLists.slice((currentpagenum-1)*pagesize,currentpagenum*pagesize)" stripe border > 
        <el-table-column type="index"></el-table-column>
        <el-table-column label="学科"  prop='subject'></el-table-column>
        <el-table-column label="成绩"  prop="results"></el-table-column>
        <el-table-column label="操作"  >
          <!-- 插槽 -->
          <template slot-scope>
            <el-tooltip effect="dark" content="修改" placement="top" enterable>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="删除" placement="top" enterable>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="设置" placement="top" enterable>
              <el-button type="warning" icon="el-icon-setting" circle></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 @size-change监听pagesize当前页数改变的事件  @current-change监听页码值改变的事件
                page-sizes 下拉框选择的值 current-page当前展示第几页 page-size每页展示多少条数据 
                total 一共多少数据 layout页面显示那些控件-->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :page-sizes="[2, 3, 4]"
        :current-page="currentpagenum"
        :page-size="1"
        :total="tableLists.length"
        layout="total, sizes, prev, pager, next, jumper"
      >
      </el-pagination>
    </el-card>
  </div>
  
    
</template>

<script>
export default {
    name:'Student',
    data() {
      return {
        tableLists:[],//成绩列表
        keySerch:'',//搜索词
        // 当前的页数 当前展示第几页
        currentpagenum:1,
        // 每页显示多少条数据
        pagesize:2,
      }
    },
    created () {
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      } 

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    },
    mounted() {
      // 吧vuex中的数据赋值给tableLists
      this.tableLists=this.$store.state.login.tabList
    },
    methods: {
      // 监听每页显示多少条改变的事件 pagesize
      handleSizeChange(newsize){
        // console.log(`每页 ${newsize} 条`);
        this.currentpagenum = 1;
        // 吧newsize最新的每页展示的数据条数  赋值给currentpage
        this.pagesize = newsize
      },
      // 监听页码值改变的事件
      handleCurrentChange(newpage){
        // console.log(`当前页: ${newpage}`)
        // 吧最新页码赋给currentpagenum
        this.currentpagenum = newpage
      },
      // 点击搜索
      serch(){
        
      }
    },
}
</script>

<style scoped>
</style>