<template>
  <div class="app">
    <transition name="slide-fade">
      <Spin v-if="isSpin" :data="isSpin" @changeSpin="changeSpin" />
      <div v-else class="content">
        <Amap></Amap>
        <Head></Head>
        <Menu />
        <Box2 title="危险源分类监控" autoSize="true" titleSize="2" class="boxD" style="top:13%;left:50px;">
          <echarts :option="wxyfl" @click="onClick()"></echarts>
        </Box2>
        <Box2 title="特殊危险源监控" autoSize="true" titleSize="1" class="box" style="top:73%;left:50px;">
          <echarts :option="tswxy"></echarts>
        </Box2>
        <Box2
          title="运输车实时监控"
          autoSize="true"
          titleSize="2"
          class="box-bottom"
          style="top:60%;right:50px;left:32%;"
        >
          <!-- <dv-scroll-board :config="cljk" style="height:80%;color:white;" />   -->
          <echarts :option="ssyj"></echarts>
        </Box2>
        <Box2 title="实时警报统计" autoSize="true" class="boxD" style="top:13%;right:50px;">
          <echarts :option="bjtj" style="margin-top:20px"></echarts>
        </Box2>
        <Box2 title="监控平台使用状态" autoSize="true" class="box" style="top:73%;right:50px;">
          <dv-water-level-pond :config="jkxt" style="width:50%;height:80%" />
        </Box2>
        <!-- 几个数字 -->
        <div class="topNum" style="top:16%;left:30%;backgroud-color:red;">
          <div class="topNumTitle">253</div>
          <div class="topNumSubTitle">成功避免了253次事故</div>
        </div>
        <div class="topNum" style="top:16%;left:40%">
          <div class="topNumTitle">965</div>
          <div class="topNumSubTitle">保障965次危险品运输</div>
        </div>
        <div class="topNum" style="top:16%;left:50%">
          <div class="topNumTitle">85</div>
          <div class="topNumSubTitle">覆盖85家危运公司</div>
        </div>
        <div class="topNum" style="top:16%;left:60%">
          <div class="topNumTitle">302</div>
          <div class="topNumSubTitle">实时追踪302条运输线路</div>
        </div>
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
import Option from "../../const/option";
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
  mounted() {},
  data() {
    return {
      wxyfl: Option.wxyfl,
      tswxy: Option.tswxy,
      cljk: Option.cljk,
      ssyj: Option.ssyj,
      bjtj: Option.bjtj,
      jkxt: {
        data: [78],
        shape: "round"
      },
      isSpin: true,
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/9fc0c6eb94c8573dafbfe0e6cad0a633");
          o.setZoom(13);
        }
      },
    };
  },
  methods: {
    changeSpin() {
      this.isSpin = !this.isSpin;
    },
    onClick(event, instance, echarts) {
      console.log(event);
      console.log(instance);
      console.log(echarts);
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
.boxD {
  position: fixed;
  width: 25%;
  height: 56%;
}
.box-bottom {
  position: fixed;
  width: 35%;
  height: 40%;
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
.topNum {
  position: fixed;
  width: 10%;
  height: 26%;
  color: white;
  align-items: center;
}
.topNumTitle {
  font-size: 30px;
  align-items: center;
  text-align: center;
}
.topNumSubTitle {
  font-size: 15px;
  align-items: center;
  text-align: center;
}
</style>
