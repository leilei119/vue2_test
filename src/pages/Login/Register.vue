<template>
  <div class="register">
    <!-- 注册 -->
    <div class="register_box  animate__animated animate__zoomInDown">
      <h2>注册账号</h2>
      <el-form status-icon label-width="100px" :rules="regiFormRules" :model="regiForm" ref="regiFormRef">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="regiForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" >
          <el-radio-group v-model="regiForm.sex">
            <el-radio  label="男"></el-radio>
            <el-radio  label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="regiForm.age" type="age" ></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input  v-model="regiForm.phone" ></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="cardid">
          <!-- onkeyup这句话就是说只能输入汉字 输入别的会直接删除掉 -->
          <el-input  v-model="regiForm.cardid" onkeyup="this.value=this.value.replace(/[^\X0-9]/g, '')"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="regiForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="register">注册</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入身份验证js
import isCardid from '../../assets/js/cardValidity'
export default {
    name:'Register',
    data() {
      // 年龄验证
      let checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入您的年龄'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数值'));
          } else if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }, 1000);
      }
      // 定义规则 电话验证
      let phone = (rule, value, callback) => {
        let reg = /^1[345789]\d{9}$/;
        if (value != '' && reg.test(value)) {
            callback()
        } else {
            callback(new Error('请输入正确的手机号'))
        }
      }
      // 验证身份证
      let cardid =(rule, value, callback)=>{
        var errorMsg  = isCardid(value)
        if (errorMsg != "") {
          callback(new Error(errorMsg));
        }    
      }
      return {
        regiForm:{
          name:'',
          sex:'',
          password:'',
          cardid:'',
          phone:'',
          age:''
        },
        // 校验对象
        regiFormRules:{
          name:[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'change' }
          ],
          password:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'change' },
          ],
          age: [
            { required: true,validator:checkAge,trigger: 'blur'}
          ],
          sex:[
            { required: true, message: '请选择性别', trigger: 'blur' },
          ],
          cardid:[
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { validator: cardid, trigger: 'blur' }
          ],
          phone:[
            { required: true, validator:phone,trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      // 注册
      register(){
        // element预验证
        this.$refs.regiFormRef.validate(async valid=>{
          if(!valid) return
          // 验证通过发起注册的请求
          await this.$axios.post('/register',this.regiForm).then(res=>{
            // 成功提示
            this.$mess.success(res.data.message)
            // 跳回到登录组件
            this.$router.push('/login')
          }).catch(error=>{
            this.$mess.Error(error)
          })
          // console.log(res);
          // // 注册失败--提示
          // if(!res.success) return this.$mess.Error(res.message)
          // // 注册成功--提示
          // this.$mess.success(res.message)
          
        })
      },
      // 重置
      reset(){
        this.$$refs.regiFormRef.resetFields()
      }
    },
}
</script>

<style scoped>
  .register {
    height: 100%;
  }
  .register_box {
    width: 50%;
    background-color: #f5f5f5;
    border-radius: 10px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    opacity: 0.9;
  }
  h2 {
    font-size: revert;
    padding-bottom: 10px;
    text-align: center;
  }
  .btns {
    display: Flex;
    justify-content: end;
  }
  .riqi{
    width: 100%;
  }
</style>