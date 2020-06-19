<template>
  <div class="app">
    <div class="back"></div>
    <div class="spin">
      <dv-decoration-9 style="width:150px;height:150px;color:#8eeaed;">{{num}}%</dv-decoration-9>
      <p style="margin-top:15px;color:#8eeaed">加载中{{dot}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spin",
  components: {},
  props: {
    isSpin: Boolean
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      dot: "。",
      num: 1
    };
  },
  methods: {
    init() {
      var timer1 = setInterval(() => {
        if (this.dot.length >= 3) {
          this.dot = "。";
        } else {
          this.dot += "。";
        }
      }, 300);

      var timer = setInterval(() => {
        this.num += 3;
        if (this.num >= 100) {
          clearInterval(timer1);
          clearInterval(timer);
          this.$emit("changeSpin")
        }
      }, 50);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spin {
  width: 150px;
  height: 170px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
}
.back {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #282c34;
}
.app {
  width: 100%;
  height: 100%;
}
</style>
