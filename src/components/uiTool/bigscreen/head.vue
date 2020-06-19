<template>
  <div class="head_content">
    <div class="head">
      <dv-decoration-8 class="head_left" />
      <div class="head_center">
        <p>数据展示仓</p>
        <p>危险源车辆运输监控管理平台</p>
      </div>
      <dv-decoration-8 :reverse="true" class="head_right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "head",
  components: {},
  props: {},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head_center p:nth-child(1) {
  font-size: 30px;
  margin: 0;
}
.head_center p:nth-child(2) {
  font-size: 19px;
  line-height: 50px;
  margin: 0;
}
.head_center {
  width: 300px;
  height: 50px;
  position: absolute;
  left: 0;
  right: 0;
  top: -20px;
  margin: auto;
  color: #8eeaed;
  text-align: center;
}
.head_right {
  width: 600px;
  float: right;
  height: 50px;
  margin-right: 80px;
}
.head_left {
  width: 600px;
  float: left;
  height: 50px;
  margin-left: 80px;
}
.head {
  width: 100%;
  height: 90px;
  margin-top: 50px;
  position: relative;
}
.head_content {
  width: 100%;
  height: 90px;
  position: fixed;
}
</style>
