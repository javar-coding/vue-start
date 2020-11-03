<template>
  <div>
    <el-card header="Get Demo" style="width: 50%;float: left">
      <el-form style="width: 50%" label-width="100px">
        <el-form-item label="get-参数-1">
          <el-input v-model="get_param1"/>
        </el-form-item>
        <el-form-item label="get-参数-2">
          <el-input v-model="get_param2"/>
        </el-form-item>
        <el-form-item label="get-参数-3">
          <el-input v-model="get_param3"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="get">get提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card header="Post Demo" style="width: 50%;float: left">
      <el-form style="width: 50%" label-width="100px">
        <el-form-item label="post-参数-1">
          <el-input v-model="post_param1"/>
        </el-form-item>
        <el-form-item label="post-参数-2">
          <el-input v-model="post_param2"/>
        </el-form-item>
        <el-form-item label="post-参数-3">
          <el-input v-model="post_param3"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="post">post提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { demo } from '@/api'
export default {
  name: 'RequestDemo',
  data () {
    return {
      get_param1: '',
      get_param2: '',
      get_param3: '',
      post_param1: '',
      post_param2: '',
      post_param3: ''
    }
  },
  methods: {
    get () {
      demo.getDemo({'get_param1': this.get_param1, 'get_param2': this.get_param2, 'get_param3': this.get_param3})
    },
    post () {
      demo.postDemo({'post_param1': this.post_param1, 'post_param2': this.post_param2, 'post_param3': this.post_param3})
    }
  }
}
</script>

<style scoped>

</style>
