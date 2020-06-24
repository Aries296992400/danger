<template>
  <div class="content">
    <Back></Back>
    <Menu />
    <Head>
          <p>危险品运输车辆监控</p>
    </Head>
    <Box2 title="危险品运输车辆历史统计" autoSize="true" titleSize="1" class="boxS" style="top:13%;left:50px">
        <div class="d4">
          <echarts :option="clzltj"></echarts>
        </div>
        <div class="d4">
          <echarts :option="cctj"></echarts>
        </div>
        <div class="d4">
          <echarts :option="sgfsdtj"></echarts>
        </div>
         

    </Box2>
    <Box2 title="危险品运输车辆实时统计" autoSize="true" titleSize="1" class="boxSS" style="top:57%;left:50px">
        <div class="d2">
          <echarts :option="sscctj"></echarts>
        </div>
        <div class="d2">
          <echarts :option="ssjbtj"></echarts>
        </div>
        
    </Box2>
    <Box2 title="运输车辆轨迹图" autoSize="true" titleSize="1" class="boxSSS" style="top:13%;left:51%">
      <echarts :option="map1"></echarts>
    </Box2>
    <Box2  title="实时车况" autoSize="true" titleSize="1" class="boxSSSS" style="top:70%;left:51%">
      <dv-scroll-board @click="GoToPage(`carDetail`)" :config="ssck" class="aab"  style="color:white;height:90%" />  
    </Box2>
  </div>
</template>

<script>
import Menu from "../../components/menu/menu";
import Back from "../../components/uiTool/background"
import Box2 from "../../components/uiTool/bigscreen/box2";
import Head from "../../components/uiTool/bigscreen/head";
import echarts from "../../components/uiTool/echarts";
import Option from "../../const/option";


export default {
  name: "DangerMonitor",
  components: {
    Menu,
    Back,
    Box2,
    echarts,
    Head
  },
  props: {},
  data(){
    return {
        clzltj:Option.clzltj,
        cctj:Option.cctj,
        sgfsdtj:Option.sgfsdtj,
        ssck:Option.ssck,
        sscctj:Option.sscctj,
        ssjbtj:Option.ssjbtj
    }
  },
  methods:{
    GoToPage(url) {
      console.log(url);
      this.$router.push(`/${url}`);
    }
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
  height: 40%;
}
.boxSS {
  position: fixed;
  width: 45%;
  height: 40%;
}
.bt3 {
  float: left;
  width: 50%;
  height: 50%;
}
.boxSSS {
  position: fixed;
  width: 45%;
  height: 55%;
}
.boxSSSS {
  position: fixed;
  width: 45%;
  height: 27%;
}
.d4 {
  align-items: center;
  justify-items: center;
  align-content: center;
  color: white;
  width: 33%;
  height: 100%;
  text-align: center;
}
.d2 {
  align-items: center;
  justify-items: center;
  align-content: center;
  color: white;
  width: 50%;
  height: 100%;
  text-align: center;
}
</style>
