<template>
  <div class="back">
    <video autoplay loop muted="muted" class="video">
      <source src="../../assets/123.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.back {
  width: 100%;
  height: 100%;
}
</style>
