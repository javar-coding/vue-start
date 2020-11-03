<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  padding: 0px 0px;
  position: relative;
  overflow: auto;
  font-size: 16px;
}

.app-main > div {
  position: relative;
  overflow: auto;
  height: 100vh;
  padding: 0px 0px 0px 0px;
}
</style>
