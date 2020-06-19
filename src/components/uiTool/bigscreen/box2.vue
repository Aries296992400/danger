<template>
  <div class="box1">
    <div class="back"></div>
    <div class="title">
      {{title}}
      <div class="titleImg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "box2",
  components: {},
  props: {
      title:String
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleImg {
  width: 200px;
  height: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 15px;
  margin: auto;
  background: url("../../../assets/title.png");
  background-size: contain;
}
.title {
  position: absolute;
  width: 200px;
  left: 0;
  right: 0;
  margin: auto;
  top: 15px;
  text-align: center;
  color: #8ce6e9;
}
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../../assets/box2.png") center center / 100% 100% no-repeat;
  background-size: contain;
  z-index: 999;
}
.box1 {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
