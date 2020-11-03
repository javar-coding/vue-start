<template>
  <div class="navbar">
    <hamburger :is-active="false" class="hamburger-container"/>
    <breadcrumb />
    <div class="avatar-container">
      <div class="avatar-wrapper">
        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
          <div class="avatar-wrapper1">
            <img :src="avatar" class="user-avatar">
            <span class="user-name">{{userName}}</span>
            <i class="el-icon-caret-bottom" size="big"/>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >
              <span style="display:block;" @click="logout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    userName () {
      return this.$store.getters.userInfo.name
    },
    avatar () {
      const path = this.$store.getters.userInfo.avatar
      if (path === '../../../assets/account.jpg') {
        return require('../../../assets/account.jpg')
      }
      return path
    }
  },
  methods: {
    logout () {
      this.$confirm('是否退出系统')
        .then(() => {
          this.$store.dispatch('logout')
          this.$router.push({path: '/login'})
        })
        .catch(() => {
        })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    width: 130px;
    display: inline-block;
    position: absolute;
    right: 0px;
    background-color: #f7f7f7;
    .user-name {
      line-height: 50px;
      font-size: 16px;
      font-weight: bold;
      transform: translate(-6px,-10px);
      display: inline-block;
      margin-left: 10px;
    }
    .avatar-wrapper {
      cursor: pointer;
      position: relative;
      /*padding-top: 3px;*/
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        transform: translateY(5px);
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: 18px;
        top: 18px;
        font-size: 12px;
      }
    }
  }
}
</style>
