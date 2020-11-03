<template>
  <div class="login">
    <el-card class="card" shadow="always">
      <h3 class="title" style="text-align: center">系统登录</h3>
      <el-form label-width="20%">
        <el-form-item label="用户名">
          <el-input v-model="form.userAccount" placeholder="用户名" style="width: 80%"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password placeholder="密码" style="width: 80%"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="margin-left: 60%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        userAccount: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.form.userAccount === undefined || this.form.userAccount === '') {
        this.$message.error('用户名不能为空')
        return
      }
      if (this.form.password === undefined || this.form.password === '') {
        this.$message.error('密码不能为空')
        return
      }
      this.$store.dispatch('login', { name: this.form.userAccount, password: this.form.password })
      this.$router.push({path: '/index'})
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background-image: url("../../assets/index.jpeg");
  background-size: 100% 100%;
  height:  100%;
  width: 100%;
  .card {
    position: fixed;
    top: 20%;
    left: 65%;
    height: 300px;
    width: 400px;
  }
}
</style>
