<template>
  <div class="content">
    <Back></Back>
    <Menu />
    <Head>
          <p>渝A55682</p>
          <p>预警报警</p>
    </Head>
    <Box2 title="司机和车" autoSize="true" titleSize="1" class="boxS" style="top:13%;left:50px">
        <div class="d4">
          <img style="width:100%;height:60%;margin-top:25%;margin-left:-2%;" src="../../assets/sj.jpg" />
        </div>
        <div class="d4">
          <div style="width:100%;height:80%;margin-top:7%;margin-left:-2%;"> 
            <p>车牌：渝A55682</p>
            <p>司机：王兵</p>
            <p>驾驶证：B2</p>
            <p>年龄：32</p>
            <p>性别：男</p>
            <p>车型：厢式货车</p>
            <p>本次运输危险品：油漆</p>
            <p>本次运输重量：1吨</p>
          </div>
        </div>
        <div class="d4">
          <p style="margin-top:15%;">司机运输情况统计</p>
          <dv-active-ring-chart :config="sjxx" style="width:100%;height:250px;margin-top:-10%;" />
        </div>
         

    </Box2>
    <Box2 title="报警和预警" autoSize="true" titleSize="1" class="boxSS" style="top:57%;left:50px">
        <div style="width:100%;height:50%;margin-top:-30%;margin-left:-5%">
          <echarts class="bt4" :option="bt211"></echarts>
          <echarts class="bt4" :option="bt221"></echarts> 
        </div>
        <div style="width:100%;height:50%;margin-top:-30%;margin-left:-5%">
          <echarts class="bt4" :option="bt231"></echarts>
          <echarts class="bt4" :option="bt241"></echarts> 
        </div>
        <div style="width:100%;height:50%;margin-top:-30%;margin-left:-5%">
          <echarts class="bt4" :option="bt251"></echarts>
          <echarts class="bt4" :option="bt261"></echarts> 
        </div>
        <div style="width:100%;height:50%;margin-top:-30%;margin-left:-5%">
          <echarts class="bt4" :option="bt271"></echarts>
          <echarts class="bt4" :option="bt281"></echarts> 
        </div>
        
    </Box2>
    <Box2 title="本次运输预警报警轨迹图" autoSize="true" titleSize="1" class="boxSSS" style="top:13%;left:51%">
      <echarts :option="map1"></echarts>
    </Box2>
    <Box2 title="实时参数" autoSize="true" titleSize="1" class="boxSSSS" style="top:70%;left:51%">
      <div class="d4" style="text-align: center; font-size:15px;">
        <p style="font-size:15px;">危险品实时温度</p>
        <div style="text-align: center; font-size:15px;margin-top:-2%">
          <dv-water-level-pond :config="wd" style="width:100%;height:80%" />
        </div>
      </div>
      <div class="d4" style="text-align: center; font-size:15px;margin-left:2%">
        <p style="font-size:15px;">车内实时温度</p>
        <div style="text-align: center; font-size:15px;margin-top:-2%">
          <dv-water-level-pond :config="clwd" style="width:100%;height:80%" />
        </div>
      </div>
      <div class="d4" style="text-align: center; font-size:15px; margin-left:2%">
        <p style="font-size:15px;">车外实时温度</p>
        <div style="text-align: center; font-size:15px;margin-top:-2%">
          <dv-water-level-pond :config="cwwd" style="width:100%;height:80%" />
        </div>
      </div>
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
  methods: {},
  data(){
    return {
        bt211:Option.bt211,
        bt221:Option.bt221,
        bt231:Option.bt231,
        bt241:Option.bt241,
        bt251:Option.bt251,
        bt261:Option.bt261,
        bt271:Option.bt271,
        bt281:Option.bt281,
        clzltj:Option.clzltj,
        cctj:Option.cctj,
        sgfsdtj:Option.sgfsdtj,
        ssck:Option.ssck,
        sswd:Option.sswd,
        ssjbtj:Option.ssjbtj,
        sjxx:Option.sjxx,
        zxt1:Option.zxt1,
        cgqbj:Option.cgqbj,
        wd: {
          data: [20],
          shape: "round",
          formatter:"{value}°C"
        },
        clwd: {
          data: [28],
          shape: "round",
          formatter:"{value}°C"
        },
        cwwd: {
          data: [33],
          shape: "round",
          formatter:"{value}°C"
        },
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
  height: 90%;
  text-align: center;
}
</style>
