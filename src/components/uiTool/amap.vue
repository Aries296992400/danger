<template>
  <div class="amap">
    <el-amap style="width:100%;height:100%;" :events="mapEvents"></el-amap>
  </div>
</template>

<script>
export default {
  name: "amap",
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
.amap {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
