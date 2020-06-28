<template>
  <div class="content">
    <Back></Back>
    <Menu />
    <Head>
          <p>危险品运输车辆概况</p>
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
    <Box2 title="危险品运输相关数据" autoSize="true" titleSize="1" class="boxSS" style="top:57%;left:50px">
        <div class="d2">
          危险品实时温度
          <dv-water-level-pond :config="wd" style="width:30%;height:20%;margin:0 auto;margin-top:5%" />
          <echarts style="height:80%;margin-top:-3%" :option="sswd"></echarts>
        </div>
        <div class="d2">
          <p style="width:120%;">传感器报警</p>
          <echarts style="height:80%;margin-top:8%;width:120%" :option="cgqbj"></echarts>
        </div>
        
    </Box2>
    <Box2 title="本次运输车辆轨迹图" autoSize="true" titleSize="1" class="boxSSS" style="top:13%;left:51%">
            <echarts2 :option="ChinaTest"></echarts2>

    </Box2>
    <Box2 title="实时车况" autoSize="true" titleSize="1" class="boxSSSS" style="top:70%;left:51%">
      <div class="d2" style="text-align: center; font-size:15px;">
          <p style="font-size:20px;">本次行程概况</p>
          <div style="text-align: center; font-size:15px;border:1px solid #80adb5;margin-top:-2%">
            行程：重庆->杭州<br/>
            始发时间：2020.5.8 8:00<br/>
            预计到达时间：2020.5.10 18:00<br/>
            疲劳驾驶策略：A级
            预警策略：B级<br/>
            危险品：油漆
            危险级别：一级<br/>
          </div>
        </div>
      <div class="d2" style="text-align: center; font-size:15px;margin-left:5%;">
        <p style="font-size:20px;">司机打卡信息</p>
          <div style="text-align: center; font-size:10px;border:1px solid #80adb5;margin-top:-2%">
            2020.5.8 12:00-12:15<br/>
            事由：<span style="border:1px solid red;font-weight:bold;color:red">疲劳驾驶休息</span><br/>
            打卡地点：德婺高速休息区<br/>
          </div>
          <div style="text-align: center; font-size:10px;border:1px solid #80adb5;margin-top:2%">
            2020.5.8 9:00-9:15<br/>
            事由：<span style="border:1px solid red;font-weight:bold;color:red">疲劳驾驶休息</span><br/>
            打卡地点：重庆温新路<br/>
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
import echarts2 from "../../components/uiTool/echarts2";

import ChinaTest4 from "../../const/chinaTest4";

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
  props: {},
  methods: {},
  data(){
    return {
      ChinaTest: ChinaTest4.optionXyMap01,
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
          data: [35],
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
