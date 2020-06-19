import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import ant from 'ant-design-vue'
import router from './router'
import echarts from 'echarts'
import VueAMap from 'vue-amap';

import 'ant-design-vue/dist/antd.css';
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(dataV)
Vue.use(ant);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '0237256281494833ed2485a8e23b763c',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4',
  mapStyle:'amap://styles/9fc0c6eb94c8573dafbfe0e6cad0a633'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
