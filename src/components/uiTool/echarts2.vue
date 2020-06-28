<template>
  <div class="echarts">
    <chart :options="option" :auto-resize="true" style="width:100%;height:100%;"></chart>
  </div>
</template>

<script>
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/graph";
import "echarts/lib/chart/funnel";
import "echarts/lib/chart/map";
import "echarts/lib/chart/effectScatter";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/lines";

import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/geo";
import "echarts/lib/component/grid";
import "echarts/lib/component/timeline";
import "echarts/lib/component/visualMap";


export default {
  name: "echarts2",
  components: {},
  props: {
    option: String
  },
  mounted() {
    
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts {
  width: 100%;
  height: calc(80%);
  z-index: 9999;
}
</style>
