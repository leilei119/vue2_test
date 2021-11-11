<template>
  <div class="home">
    <!-- 主体 -->
    <div class="home_content">
      <div class="lunbo">
        <el-carousel  type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-divider content-position="left">走马灯</el-divider>
      <div>html</div>
      <el-divider content-position="left">HTML</el-divider>
      
    </div>
  </div>
</template>

<script>
export default {
    name:'Home',
    data() {
      return {
      }
    },
}
</script>

<style scopd>
  .home{
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .el-divider {
    background-color: #9d54e7;
    /* margin: 0; */
  }

  .el-divider__text {
    background-color: #9d54e7;
    padding: 7px 16px;
    color: #ffe4f6;
}
</style>