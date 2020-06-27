<template>
  <div class="content">
    <Back></Back>
    <Menu />
    <Head>
      <p>一类危险品监控</p>
    </Head>
    <Box2 title="一类危险品泄露预警统计" autoSize="true" titleSize="1" class="boxS" style="top:13%;left:50px">
      <echarts :option="zxt1" style="width:70%"></echarts>
      <dv-active-ring-chart :config="bt1" style="width:30%;height:300px" />
    </Box2>
    <Box2 title="一类危险品数据" autoSize="true" titleSize="1" class="boxSS" style="top:53%;left:50px">
      <div style="width:100%;height:50%;margin-top:-30%;margin-left:-5%">
        <echarts class="bt4" :option="bt21"></echarts>
        <echarts class="bt4" :option="bt22"></echarts>
      </div>
      <div style="width:100%;height:50%;margin-top:-30%;margin-left:-5%">
        <echarts class="bt4" :option="bt23"></echarts>
        <echarts class="bt4" :option="bt24"></echarts>
      </div>
      <div style="width:100%;height:50%;margin-top:-30%;margin-left:-5%">
        <echarts class="bt4" :option="bt25"></echarts>
        <echarts class="bt4" :option="bt26"></echarts>
      </div>
      <div style="width:100%;height:50%;margin-top:-30%;margin-left:-5%">
        <echarts class="bt4" :option="bt27"></echarts>
        <echarts class="bt4" :option="bt28"></echarts>
      </div>
    </Box2>
    <Box2 title="一类危险品运输分布图" autoSize="true" titleSize="1" class="boxSSS" style="top:13%;left:51%">
      <echarts2 :option="ChinaTest"></echarts2>
    </Box2>
  </div>
</template>

<script>
import Menu from "../../components/menu/menu";
import Back from "../../components/uiTool/background";
import Box2 from "../../components/uiTool/bigscreen/box2";
import Head from "../../components/uiTool/bigscreen/head";
import echarts from "../../components/uiTool/echarts";
import echarts2 from "../../components/uiTool/echarts2";
import Option from "../../const/option";
import ChinaTest from "../../const/chinaTest";
export default {
  name: "DangerMonitor",
  components: {
    Menu,
    Back,
    Box2,
    echarts,
    Head,
    echarts2
  },
  mounted() {
  },
  props: {},
  methods: {},
  data() {
    return {
      ChinaTest: ChinaTest.optionXyMap01,
      zxt1: Option.zxt1,
      bt1: Option.bt1,
      bt21: Option.bt21,
      bt22: Option.bt22,
      bt23: Option.bt23,
      bt24: Option.bt24,
      bt25: Option.bt25,
      bt26: Option.bt26,
      bt27: Option.bt27,
      bt28: Option.bt28,
      map1: Option.map1
    };
  }
};
</script>

<style scoped>
.box {
  position: fixed;
  width: 98%;
  height: 95%;
}
.boxS {
  position: fixed;
  width: 45%;
  height: 35%;
}
.boxSS {
  position: fixed;
  width: 45%;
  height: 45%;
}
.bt3 {
  float: left;
  width: 50%;
  height: 50%;
}
.boxSSS {
  position: fixed;
  width: 45%;
  height: 85%;
}
</style>
