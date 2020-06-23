<template>
  <div class="background">
    
  </div>
</template>

<script>
export default {
  name: "background",
  components: {},
  props: {},
  data() {
    return {
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/9fc0c6eb94c8573dafbfe0e6cad0a633"); //自定义的高德地图的样式，我选的是马卡龙
          o.setZoom(13);
          o.setCenter([106.586719,29.564574])
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("../../assets/back.jpg") no-repeat;
  /* background-color: red; */
  background-size: 100% 100%;
}
</style>
