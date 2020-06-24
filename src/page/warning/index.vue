<template>
  <div class="app">
    <transition name="slide-fade">
      <div class="content">
        <Back></Back>
        <Head>
          <p>预警监控</p>
        </Head>
        <Menu />
        <Box2 title="一般危险源预警" autoSize="true" titleSize="2" class="boxD" style="top:13%;left:50px;">
          <echarts :option="wxyflyj" style="margin-top:10%;left:50px;"></echarts>
        </Box2>
        <Box2 title="特殊危险源预警" autoSize="true" titleSize="1" class="box" style="top:73%;left:50px;">
          <echarts :option="tswxyflyj" style="margin-top:10%;left:50px;"></echarts>
        </Box2>
        <!-- <Box2
          title="运输车实时监控"
          autoSize="true"
          titleSize="2"
          class="box-bottom"
          style="top:60%;right:50px;left:32%;"
        >
          <echarts :option="ssyj"></echarts>
        </Box2> -->
        <Box2 title="预警地图" autoSize="true" titleSize="2" class="boxD" style="top:13%;right:50px;">
          
        </Box2>
        <Box2 title="预警信息更新" autoSize="true" class="box" style="top:73%;right:50px;">
          <echarts :option="yjxxbt" style="width:1000px;height:1000px"></echarts>
        </Box2>
        <div class="topNum" style="top:16%;left:45%;border:2px solid #1adedd !important;">
          <div class="topNumTitle">725</div>
          <div class="topNumSubTitle">今日已预警725次</div>
        </div>
        <div class="topNum" style="top:46%;left:45%">
          <div class="topNumTitle">358</div>
          <div class="topNumSubTitle">为358个正在运输的司机护航</div>
        </div>
        <div class="topNum" style="top:76%;left:45%">
          <div class="topNumTitle">23</div>
          <div class="topNumSubTitle">覆盖23类预警监控</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

import Back from "../../components/uiTool/background"

import Head from "../../components/uiTool/bigscreen/head";
import Box2 from "../../components/uiTool/bigscreen/box2";
import Menu from "../../components/menu/menu";
import echarts from "../../components/uiTool/echarts";
import Option from "../../const/option";
export default {
  name: "dashboard",
  components: {
    Back,
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
      wxyflyj: Option.wxyflyj,
      tswxyflyj: Option.tswxyflyj,
      yjxxbt: Option.yjxxbt,
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
  }
};
</script>

<style scoped>

.topNum {
  position: fixed;
  width: 160px;
  height: 140px;
  color: white;
  align-items: center;
  border:2px solid #08636f;
  border-radius: 4px;
  padding:10px;
  cursor: pointer;
}
.topNumTitle {
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  text-align: center;
  line-height: 70px;

}
.topNumSubTitle {
  font-size: 15px;
  align-items: center;
  text-align: center;
}
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
  width: 40%;
  height: 26%;
}
.boxD {
  position: fixed;
  width: 40%;
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

</style>
