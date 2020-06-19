<template>
  <div class="app">
    <transition name="slide-fade">
      <Spin v-if="isSpin" :data="isSpin" @changeSpin="changeSpin" />
      <div v-else class="content">
        <Amap></Amap>
        <Head></Head>
        
      </div>
    </transition>
  </div>
</template>

<script>
import Spin from "../../components/uiTool/spin";
import Amap from "../../components/uiTool/amap";
import Head from "../../components/uiTool/bigscreen/head";
export default {
  name: "dashboard",
  components: {
    Spin,
    Amap,
    Head
  },
  props: {},
  data() {
    return {
      isSpin: true,
      mapEvents: {
        init(o) {
          o.setMapStyle("amap://styles/9fc0c6eb94c8573dafbfe0e6cad0a633"); //自定义的高德地图的样式，我选的是马卡龙
          o.setZoom(13);
        }
      },
      config: {
        data: [
          {
            name: "周口",
            value: 55
          },
          {
            name: "南阳",
            value: 120
          },
          {
            name: "西峡",
            value: 78
          },
          {
            name: "驻马店",
            value: 66
          },
          {
            name: "新乡",
            value: 80
          },
          {
            name: "信阳",
            value: 45
          },
          {
            name: "漯河",
            value: 1
          }
        ]
      },
      configFly: {
        points: [
          {
            name: "郑州",
            coordinate: [0.48, 0.35]
          },
          {
            name: "新乡",
            coordinate: [0.52, 0.23]
          },
          {
            name: "焦作",
            coordinate: [0.43, 0.29]
          },
          {
            name: "开封",
            coordinate: [0.59, 0.35]
          },
          {
            name: "许昌",
            coordinate: [0.53, 0.47]
          },
          {
            name: "平顶山",
            coordinate: [0.45, 0.54]
          },
          {
            name: "洛阳",
            coordinate: [0.36, 0.38]
          },
          {
            name: "周口",
            coordinate: [0.62, 0.55]
          },
          {
            name: "漯河",
            coordinate: [0.56, 0.56]
          },
          {
            name: "南阳",
            coordinate: [0.37, 0.66]
          },
          {
            name: "信阳",
            coordinate: [0.55, 0.81]
          },
          {
            name: "驻马店",
            coordinate: [0.55, 0.67]
          },
          {
            name: "济源",
            coordinate: [0.37, 0.29]
          },
          {
            name: "三门峡",
            coordinate: [0.2, 0.36]
          },
          {
            name: "商丘",
            coordinate: [0.76, 0.41]
          },
          {
            name: "鹤壁",
            coordinate: [0.59, 0.18]
          },
          {
            name: "濮阳",
            coordinate: [0.68, 0.17]
          },
          {
            name: "安阳",
            coordinate: [0.59, 0.1]
          }
        ],
        lines: [
          {
            source: "新乡",
            target: "郑州"
          },
          {
            source: "焦作",
            target: "郑州"
          },
          {
            source: "开封",
            target: "郑州"
          },
          {
            source: "许昌",
            target: "郑州"
          },
          {
            source: "平顶山",
            target: "郑州"
          },
          {
            source: "洛阳",
            target: "郑州"
          },
          {
            source: "周口",
            target: "郑州"
          },
          {
            source: "漯河",
            target: "郑州"
          },
          {
            source: "南阳",
            target: "郑州"
          },
          {
            source: "信阳",
            target: "郑州"
          },
          {
            source: "驻马店",
            target: "郑州"
          },
          {
            source: "济源",
            target: "郑州"
          },
          {
            source: "三门峡",
            target: "郑州"
          },
          {
            source: "商丘",
            target: "郑州"
          },
          {
            source: "鹤壁",
            target: "郑州"
          },
          {
            source: "濮阳",
            target: "郑州"
          },
          {
            source: "安阳",
            target: "郑州"
          }
        ]
      },
      configRound: {
        data: [
          {
            name: "周口",
            value: 55
          },
          {
            name: "南阳",
            value: 120
          },
          {
            name: "西峡",
            value: 78
          },
          {
            name: "驻马店",
            value: 66
          },
          {
            name: "新乡",
            value: 80
          }
        ]
      },
      configCapsule: {
        data: [
          {
            name: "南阳",
            value: 167
          },
          {
            name: "周口",
            value: 67
          },
          {
            name: "漯河",
            value: 123
          },
          {
            name: "郑州",
            value: 55
          },
          {
            name: "西峡",
            value: 98
          }
        ],
        unit: "单位"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1 {
  position: absolute;
  top: 150px;
  left: 50px;
  width: 500px;
  height: 300px;
  padding: 40px;
}
.box2 {
  position: absolute;
  top: 480px;
  left: 50px;
  width: 500px;
  height: 300px;
  padding-left: 100px;
}
.box3 {
  position: absolute;
  top: 810px;
  left: 50px;
  width: 500px;
  height: 300px;
  padding: 40px;
}
.box4 {
  position: absolute;
  top: 150px;
  right: 50px;
  width: 500px;
  height: 300px;
  padding: 40px;
}
.box5 {
  position: absolute;
  top: 480px;
  right: 50px;
  width: 500px;
  height: 300px;
  padding-left: 100px;
}
.box6 {
  position: absolute;
  top: 810px;
  right: 50px;
  width: 500px;
  height: 300px;
  padding: 40px;
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
