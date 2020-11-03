<template>
  <div class="wrapper">
    <vue-particles
      class= "particles"
      color="#FFD700"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#FFD700"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  @import  "../assets/variables.scss";
.wrapper {
  background-color: $indexBackgroundColor;
  background-image: url("../assets/index.jpeg");
  background-size: 100% 100%;
}
.particles {
  position: fixed;
  top: $navBarWidth;
  width: 100%;
}
</style>
