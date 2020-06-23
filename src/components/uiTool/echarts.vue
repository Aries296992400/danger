<template>
  <div class="echarts">
    <chart :options="option" :auto-resize="true" style="width:100%;height:100%;"></chart>
  </div>
</template>

<script>
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';

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
  height: 100%;
}
</style>
