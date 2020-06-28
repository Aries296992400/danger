<template>
  <div class="app">
    <transition name="slide-fade">
      <div class="content">
        <Back></Back>
        <Head>
          <p>报警监控</p>
        </Head>
        <Menu />
        <Box2 title="一般危险源报警" autoSize="true" titleSize="2" class="boxD" style="top:13%;left:50px;">
          <echarts :option="wxyflyj" style="margin-top:10%;left:50px;"></echarts>
        </Box2>
        <Box2 title="特殊危险源报警" autoSize="true" titleSize="1" class="box" style="top:73%;left:50px;">
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
        </Box2>-->
        <Box2 title="报警地图" autoSize="true" titleSize="2" class="boxD" style="top:13%;right:50px;">
          <echarts2 :option="optionXyMap01"></echarts2>

        </Box2>
        <Box2 title="报警信息更新" autoSize="true" class="box" style="top:73%;right:50px;">
          <echarts :option="lineTest"></echarts>
        </Box2>
        <div class="topNum" style="top:16%;left:45%;border:2px solid #1adedd !important;">
          <div class="topNumTitle">{{this.key1}}</div>
          <div class="topNumSubTitle">今日已报警{{this.key1}}次</div>
        </div>
        <div class="topNum" style="top:46%;left:45%">
          <div class="topNumTitle">{{this.key2}}</div>
          <div class="topNumSubTitle">为{{this.key2}}个正在运输的司机护航</div>
        </div>
        <div class="topNum" style="top:76%;left:45%">
          <div class="topNumTitle">{{this.key3}}</div>
          <div class="topNumSubTitle">覆盖{{this.key3}}类报警监控</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Back from "../../components/uiTool/background";
import ChinaTest from "../../const/chinaTest";
import echarts2 from "../../components/uiTool/echarts2";

import Head from "../../components/uiTool/bigscreen/head";
import Box2 from "../../components/uiTool/bigscreen/box2";
import Menu from "../../components/menu/menu";
import echarts from "../../components/uiTool/echarts";
import ChinaTest2 from "../../const/chinaTest2";
import Option from "../../const/option";
import _StorageTools from "../../components/tool/_StorageTools";
var timer1;
var timer2;
export default {
  name: "dashboard",
  components: {
    Back,
    Head,
    Box2,
    Menu,
    echarts,
    echarts2
  },
  props: {},
  mounted() {
    var app=11;
    
    timer2=setInterval(() => {
      var axisData = new Date().toLocaleTimeString().replace(/^\D*/, "");
      var data0 = this.lineTest.series[0].data;
      var data1 = this.lineTest.series[1].data;
      data0.shift();
      data0.push(Math.round(Math.random() * 1000));
      data1.shift();
      data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

      this.lineTest.xAxis[0].data.shift();
      this.lineTest.xAxis[0].data.push(axisData);
      this.lineTest.xAxis[1].data.shift();
      this.lineTest.xAxis[1].data.push(app++);
    }, 5000);
    timer1=setInterval(() => {
      var key1=parseInt(_StorageTools.getItem("key1"))+parseInt(Math.random()*10)||0
      var key2=parseInt(_StorageTools.getItem("key2"))+parseInt(Math.random()*10)||0
      var key3=parseInt(_StorageTools.getItem("key3"))+parseInt(Math.random()*10)||0
      _StorageTools.setItem("key1",key1)
      _StorageTools.setItem("key2",key2)
      _StorageTools.setItem("key3",key3)
      this.key1=key1
      this.key2=key2
      this.key3=key3
    }, 2000);
  },
  destroyed() {
    clearInterval(timer1);
    clearInterval(timer2);
  },
  data() {
    return {
      ChinaTest: ChinaTest.optionXyMap01,
      optionXyMap01: ChinaTest2.optionXyMap01,
lineTest: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#283b56"
            }
          },
        //   formatter(params){
        //     console.log(params[0])
        //     return params;
        //  }
        },
        legend: {
          data: ["最新报警", "以往平均"]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            data: (function() {
              var now = new Date();
              var res = [];
              var len = 10;
              while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
                now = new Date(now - 2000);
              }
              return res;
            })(),
             axisLine:{
                lineStyle:{
                    color:'#02EEBF',
                    // width:8,//这里是为了突出显示加上的
                }
            } 

          },
          {
            type: "category",
            // boundaryGap: true,
            data: (function() {
              var res = [];
              var len = 10;
              while (len--) {
                res.push(10 - len - 1);
              }
              return res;
            })(),
          //    axisLine:{
          //               lineStyle:{
          //                   color:'#FF0000',
          //                   width:8,//这里是为了突出显示加上的
          //               }
          //           } 

          }
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            name: "报警数",
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2],
            axisLine:{
                lineStyle:{
                    color:'#02EEBF',
                    // width:8,//这里是为了突出显示加上的
                }
            } 
          },
          {
            // type: "value",
            // scale: true,
            // name: "预购量",
            // max: 1200,
            // min: 0,
            // boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: "最新报警",
            type: "bar",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: (function() {
              var res = [];
              var len = 10;
              while (len--) {
                res.push(Math.round(Math.random() * 1000));
              }
              return res;
            })(),
          },
          {
            name: "以往平均",
            type: "line",
            data: (function() {
              var res = [];
              var len = 0;
              while (len < 10) {
                res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                len++;
              }
              return res;
            })()
          }
        ]
      },
      key1: _StorageTools.getItem("key1"),
      key2: _StorageTools.getItem("key2"),
      key3: _StorageTools.getItem("key3"),
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
.topNum {
  position: fixed;
  width: 160px;
  height: 140px;
  color: white;
  align-items: center;
  border: 2px solid #08636f;
  border-radius: 4px;
  padding: 10px;
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
