import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import ant from 'ant-design-vue'
import router from './router'
import echarts from 'echarts'

import 'ant-design-vue/dist/antd.css';
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(dataV)
Vue.use(ant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
