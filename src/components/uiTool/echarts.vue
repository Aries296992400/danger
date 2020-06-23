<template>
  <div class="echarts">
    <chart :options="option" :auto-resize="true" style="width:100%;height:100%;"></chart>
  </div>
</template>

<script>
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import "echarts/lib/chart/bar";
import "echarts/lib/chart/graph"; // 关系图
import "echarts/lib/chart/funnel"; // 漏斗图
import "echarts/lib/component/title"; //引入标题组件
import "echarts/lib/component/legend"; //引入图例组件
import "echarts/lib/component/tooltip"; //引入图例组件
export default {
  name: "echarts",
  components: {},
  props: {
      option:String
  },
  data() {
    return {
       
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts {
  width: 100%;
  height: calc(100%);
  z-index: 9999;
}
</style>
