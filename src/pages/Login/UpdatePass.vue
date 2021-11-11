<template>
  <div class="uppass">
    <!-- 修改密码 -->
    <div class="uppass_box  animate__animated animate__zoomInDown">
      <el-form status-icon label-width="100px" :model="upForm" :rules='upFormRules' ref="upFormRef">
        <el-form-item label="用户名" prop="name">
          <el-input placeholder="请输入用户名" v-model="upForm.name"></el-input>
        </el-form-item>
        <el-form-item label="旧密码" prop="oldpassword">
          <el-input type="password" placeholder="请输入旧密码" v-model="upForm.oldpassword"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newpassword">
          <el-input type="password"  placeholder="请输入新密码" v-model="upForm.newpassword"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="enterpassord">
          <el-input type="password"  placeholder="请确认密码" v-model="upForm.enterpassord"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submit">修改</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    name:'UpdatePass',
    data() {
      
      // 验证新密码
      let newpassword = (rule, value, callback) => {{
          if(value === this.upForm.oldpassword) return callback(new Error('新密码不能与原密码相同'))
          if (this.upForm.newpassword !== '') {
            this.$refs.upFormRef.validateField('enterpassord');
          }
          callback();
        }
      };
      // 验证确认密码
      let enterpassord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.upForm.newpassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        upForm:{
          name:'',
          oldpassword:'',
          newpassword:'',
          enterpassord:''
        },
        // 校验
        upFormRules:{
          name:[
            { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3到 10 个字符', trigger: 'change' }
          ],
          oldpassword:[
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'change' }
          ],
          newpassword:[
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { validator:newpassword,trigger: 'blur'},
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'change' }
          ],
          enterpassord:[
            { validator:enterpassord,trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      // 修改
      submit(){
        // element 预校验
        this.$refs.upFormRef.validate(async valid=>{
          // 校验未通过
          if(!valid) return
          //通过调 接口
          const {data:res} = await this.$axios.post('changepw',this.upForm)
          if(!res.success) return this.$mess.error(res.message)
          this.$mess.success(res.message)
          console.log(res);
          this.$router.push('/login')
        })
      },
      // 重置
      reset(){
        this.$refs.upFormRef.resetFields()
      },
    },
}
</script>

<style scoped>
  .uppass {
    height: 100%;
  }
  .uppass_box{
    width: 50%;
    padding: 15px;
    background-color: #fcf6ffe6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
</style>>
