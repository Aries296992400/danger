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
          <echarts :option="tswxy" ></echarts>
        </Box2>
        <Box2 title="运输车实时监控" autoSize="true" titleSize="2" class="box-bottom" style="top:60%;right:50px;left:32%;">
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
import "echarts/lib/chart/bar";
import 'echarts/lib/component/title'; //引入标题组件
import 'echarts/lib/component/legend'; //引入图例组件
import 'echarts/lib/component/tooltip'; //引入图例组件
require('echarts/lib/chart/pie');
import 'echarts/lib/chart/graph'; // 关系图
import 'echarts/lib/chart/funnel'; // 漏斗图


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
      wxyfl:{
        title: {
          text: '',
          subtext: '由大数据中心提供支持',
          x:'center',
          y:'5px',
          subtextStyle: {//副标题文本样式{"color": "#aaa"}
          fontFamily: 'Arial, Verdana, sans...',
          fontSize: 25,
          fontStyle: 'normal',
          fontWeight: 'normal',
          color: '#ace8f2'
          },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: []
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            height: '85%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
              show: true,
              textStyle: {
                  color: '#80adb5'
              },
              formatter: (val) => {
                if(val == '0')
                  return val
                // 除1000
                val = val *1.0 / 1000
                return val + 'k'
              }
            }
        },
        yAxis: {
            type: 'category',
            data: ['一类', '二类', '三类', '四类', '五类', '六类', '七类', '八类', '九类'],
            axisLabel: {
              show: true,
              textStyle: {
                  // color: '#3f96a5'
                  color: '#80adb5'
              }
            }
        },
        series: [
            // {
            //     name: '2011年',
            //     type: 'bar',
            //     data: [18203, 23489, 29034, 104970, 131744, 630230]
            // },
            {
                name: '2020年',
                type: 'bar',
                data: [19325, 23438, 31000, 12194, 14141, 6887,19325, 23438, 31000],
                //配置样式
                itemStyle: {   
                    //通常情况下：
                    normal:{  
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            var colorList = ['#5cdcf2', '#7bacb5', '#3f96a5', '#a5e7f2', '#2c6873','#5cdcf2', '#7bacb5', '#3f96a5', '#a5e7f2'];
                            return colorList[params.dataIndex];
                            // return "#3f96a5";
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            }
        ]
      },
      tswxy:{
        title: {
         
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: []
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            height: '70%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
              show: true,
              textStyle: {
                  color: '#80adb5'
              },
              formatter: (val) => {
                if(val == '0')
                  return val
                // 除1000
                val = val *1.0 / 1000
                return val + 'k'
              }
            }
        },
        yAxis: {
            type: 'category',
            data: ['医废', '危废'],
            axisLabel: {
              show: true,
              textStyle: {
                  // color: '#3f96a5'
                  color: '#80adb5'
              }
            }
        },
        series: [
            // {
            //     name: '2011年',
            //     type: 'bar',
            //     data: [18203, 23489, 29034, 104970, 131744, 630230]
            // },
            {
                name: '2020年',
                type: 'bar',
                data: [19325, 23438],
                // 配置样式
                itemStyle: {   
                    //通常情况下：
                    normal:{  
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            var colorList = ['#5cdcf2', '#7bacb5'];
                            return colorList[params.dataIndex];
                            // return "#3f96a5";
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            }
        ]
      },
      cljk:{
        header: ['车牌', '危险等级', '始发地', '目的地', '监控时长'],
        data: [
          ['<span  style="color:black;background-color:yellow">渝A56921</span>', '<span style="color:white;background-color:black;">一级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">湖北</span>', '<span style="color:black;">1小时8分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝A54921</span>', '<span style="color:orign;background-color:black;">二级</span>', '重庆', '厦门', '3小时18分钟'],
          ['<span  style="color:black;background-color:yellow">渝B23421</span>', '<span style="color:yellow;background-color:black;">三级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">河南</span>', '<span style="color:black;">5小时8分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝S56921</span>', '<span style="color:green;background-color:black;">四级</span>', '重庆', '广州', '1小时0分钟'],
          ['<span  style="color:black;background-color:yellow">渝A56211</span>', '<span style="color:white;background-color:black;">五级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">广东</span>', '<span style="color:black;">40小时8分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝C56324</span>', '<span style="color:blue;background-color:black;">六级</span>', '重庆', '上海', '25小时11分钟'],
          ['<span  style="color:black;background-color:yellow">渝D53221</span>', '<span style="color:red;background-color:black;">七级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">广西</span>', '<span style="color:black;">22小时27分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝A12921</span>', '<span style="color:red;background-color:black;">八级</span>', '重庆', '北京', '12小时28分钟'],
          ['<span  style="color:black;background-color:yellow">渝A32121</span>', '<span style="color:red;background-color:black;">一级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">北京</span>', '<span style="color:black;">6小时44分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝E53221</span>', '<span style="color:red;background-color:black;">一级</span>', '重庆', '黑龙江', '2小时25分钟'],
          ['<span  style="color:black;background-color:yellow">渝F55421</span>', '<span style="color:red;background-color:black;">一级</span>', '<span style="color:black;">重庆</span>', '<span style="color:black;">拉萨</span>', '<span style="color:black;">4小时58分钟</span>'],
          ['<span  style="color:black;background-color:yellow">渝F66921</span>', '<span style="color:red;background-color:black;">一级</span>', '重庆', '海南', '7小时32分钟']
        ],
        index: false,
        columnWidth: [100,100,80,80],
        align: ['center','center','center','center','center'],
        oddRowBGC:"#6495ED",
        evenRowBGC:"#E1FFFF"
      },
      ssyj:{
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['重庆', '四川', '北京', '福建', '广东', '新疆', '黑龙江'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                      // color: '#3f96a5'
                      color: '#80adb5'
                  }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                  show: true,
                  textStyle: {
                      // color: '#3f96a5'
                      color: '#80adb5'
                  }
                }
            },
            
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
      },
      bjtj:{
        title:{
        text:'',
        },
        
        color:['#2cb7ff','#1785ef','#20c8ff','#2cb7ff','#1785ef'],
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "label": {
                    "backgroundColor": "red"
                },
                "lineStyle": {
                    "color": "#9eb2cb"
                } 
            }
        },
      
        "legend": {
            show:false,
            "top": "top",
            "left": "2%",
            "textStyle": {
                "color": "#000"
            },
            "itemHeight": 2,
            "data":  ['意向','方案','商务','即将成交','赢单']
        },
        "grid": {
            "top": 24,
            "left": "2%",
            "right": 20,
            "bottom": 30,
            "containLabel": true,
            "borderWidth": 0.1
        },

        series: [
            {
                top:0,
                type: 'funnel',
                left: '10%',
                width: '80%',
                gap: 16,
                minSize: 100,
                maxSize: 280,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}  ({c})'
                },
                data: [
                    {value: 1321, name: '温度报警'},
                    {value: 824, name: '天气报警'},
                    {value: 777, name: '疲劳驾驶报警'},
                    {value: 500, name: '疑似泄露报警'},
                    {value: 150, name: '其他报警'},
                  
                ]
            },
            
        ]
      },
      jkxt:{
        data: [78],
        shape: 'round'
      },
      isSpin: true,
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/9fc0c6eb94c8573dafbfe0e6cad0a633");
          o.setZoom(13);
        }
      },
      cityArray: ['重庆', '四川', '北京', '福建', '广东', '新疆', '黑龙江'],
      cityValueArray: [10, 52, 200, 334, 390, 330, 220],
      cpuNum:[78]
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
