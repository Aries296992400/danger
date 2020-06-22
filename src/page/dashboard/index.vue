<template>
  <div class="app">
    <transition name="slide-fade">
      <Spin v-if="isSpin" :data="isSpin" @changeSpin="changeSpin" />
      <div v-else class="content">
        <Amap></Amap>
        <Head></Head>
        <Menu />
        <Box2 title="危险源类别监控" class="box" style="top:13%;left:50px;">
          <echarts :option="option" ></echarts>
        </Box2>
        <Box2 title="特殊危险源监控" class="box" style="top:43%;left:50px;"></Box2>
        <Box2 title="疲劳驾驶预警" class="box" style="top:73%;left:50px;"></Box2>
        <Box2 title="地区天气预警" class="box" style="top:13%;right:50px;"></Box2>
        <Box2 title="疑似泄露预警" class="box" style="top:43%;right:50px;"></Box2>
        <Box2 title="行程时间分布" class="box" style="top:73%;right:50px;"></Box2>
      </div>
    </transition>
  </div>
</template>

<script>

import Spin from "../../components/uiTool/spin";
import Amap from "../../components/uiTool/amap";
import Head from "../../components/uiTool/bigscreen/head";
import Box2 from "../../components/uiTool/bigscreen/box2";
import Menu from "../../components/menu/menu";
import echarts from "../../components/uiTool/echarts";

export default {
  name: "dashboard",
  components: {
    Spin,
    Amap,
    Head,
    Box2,
    Menu,
    echarts
  },
  props: {},
  mounted() {
    
  },
  data() {
    return {
      option: {
        grid:{
          top:30,
          left:30,
          bottom:30,
          right:30
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true
      }
    ]
      },
      isSpin: true,
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/9fc0c6eb94c8573dafbfe0e6cad0a633");
          o.setZoom(13);
        }
      }
    };
  },
  methods: {
    changeSpin() {
      this.isSpin = !this.isSpin;
    }
  }
};
</script>

<style scoped>
.menuButton {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid black;
  font-size: 16px;
  padding-left: 20px;
  cursor: pointer;
}
.menu {
  color: #8ce6e9;
  font-size: 30px;
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.box {
  position: fixed;
  width: 25%;
  height: 26%;
}
.content {
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
