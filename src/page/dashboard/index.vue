<template>
  <div class="app">
    <transition name="slide-fade">
      <Spin v-if="isSpin" :data="isSpin" @changeSpin="changeSpin" />
      <div v-else class="content">
        <Amap></Amap>
        <Head></Head>
        <Menu />
        <Box2 title="危险源类别监控" class="box" style="top:13%;left:50px;">
          <echarts :option="option"></echarts>
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
  mounted() {},
  data() {
    return {
      option: {
        dataset: {
          source: [
            ["product", "nums"],
            ["Linux 7.x", 100],
            ["Linux 6.6.x", 200],
            ["Windows7", 120],
            ["Windows10", 240]
          ]
        },
        color: [
          "#d74e67",
          "#0092ff",
          "#eba954",
          "#21b6b9",
          "#60a900",
          "#01949b",
          " #f17677"
        ],
        grid: {
          left: "45%",
          top: "center",
          right: "1%",
          containLabel: true
        },
        xAxis: [
          {
            show: false
          },
          {
            show: false
          }
        ],
        yAxis: {
          type: "category",
          inverse: true,
          show: false
        },

        series: [
          {
            tooltip: {
              trigger: "item",
              formatter: "{b} : {c} ({d}%)"
            },
            type: "pie",
            center: ["20%", "50%"],
            radius: ["30%", "35%"],
            avoidLabelOverlap: false,

            label: {
              normal: {
                formatter: "{b}\n{d}%"
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            encode: {
              itemName: "product",
              value: "nums"
            }
          },
          //亮色条 百分比
          {
            show: true,
            type: "bar",
            barGap: "-100%",
            barWidth: "20%",
            z: 2,
            color: function(params) {
              // build a color map as your need.
              var colorList = [
                "#d74e67",
                "#0092ff",
                "#eba954",
                "#21b6b9",
                "#60a900",
                "#01949b",
                " #f17677"
              ];
              return colorList[params.dataIndex];
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#000",
                  fontSize: 25,
                  fontWeight: "bold"
                },
                position: "right"
              }
            },
            encode: {
              x: "nums"
            }
          },
          //年份
          {
            show: true,
            type: "bar",
            xAxisIndex: 1, //代表使用第二个X轴刻度
            barGap: "-100%",
            barWidth: "10%",
            itemStyle: {
              normal: {
                barBorderRadius: 200,
                color: "transparent"
              }
            },
            label: {
              normal: {
                show: true,
                position: [0, "-20"],
                formatter: "{b}",
                textStyle: {
                  fontSize: 14,
                  color: "#333"
                }
              }
            },
            encode: {
              y: "product"
            }
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
