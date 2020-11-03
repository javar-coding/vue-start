<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      mode="vertical"
    >
      <div class="title">
        {{ systemName }}
      </div>
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" v-if="!route.hide"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'
import {SYSTEM_NAME} from '@/libs/constant.js'

export default {
  data () {
    return {
      systemName: SYSTEM_NAME
    }
  },
  components: {SidebarItem},
  computed: {
    routes () {
      let routes = this.$router.options.routes.map(
        ({children = [], hidden = false, path, mark, ...menus}) => {
          return {
            hidden: hidden,
            path,
            ...menus,
            children: children.map(({path, hidden = false, mark, ...childrenPages}) => {
              return {path, hidden: hidden, ...childrenPages}
            })
          }
        })
      return routes
    }
  }
}
</script>
<style scoped>
  .title{
    font-size: 20px;
    line-height: 50px;
    color: aliceblue;
    text-align: center
  }
</style>
<style>
  #app .hideSidebar .sidebar-container {
    width: 70px !important;
  }
  #app .hideSidebar .main-container {
    margin-left: 70px !important;
  }
</style>
