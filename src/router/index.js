import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const first = r => require.ensure([], () => r(require('@/page/beforeLogin/index')), 'first');
const login = r => require.ensure([], () => r(require('@/page/login/index')), 'login');
const dashboard = r => require.ensure([], () => r(require('@/page/dashboard/index')), 'dashboard');

const alert = r => require.ensure([], () => r(require('@/page/alert/index')), 'alert');
const carMonitor = r => require.ensure([], () => r(require('@/page/carMonitor/index')), 'carMonitor');
const dangerMonitor = r => require.ensure([], () => r(require('@/page/dangerMonitor/index')), 'dangerMonitor');
const specilDangerMonitor = r => require.ensure([], () => r(require('@/page/specilDangerMonitor/index')), 'specilDangerMonitor');
const warning = r => require.ensure([], () => r(require('@/page/warning/index')), 'warning');



const routes = [
	{
		path: '/',
		meta:{index:0},
		component: first
	},
	{
		path: '/login',
		meta:{index:0},
		component: login
	},
	{
		path: '/dashboard',
		meta:{index:0},
		component: dashboard
	},
	{
		path: '/alert',
		meta:{index:0},
		component: alert
	},
	{
		path: '/carMonitor',
		meta:{index:0},
		component: carMonitor
	},
	{
		path: '/dangerMonitor',
		meta:{index:0},
		component: dangerMonitor
	},
	{
		path: '/specilDangerMonitor',
		meta:{index:0},
		component: specilDangerMonitor
	},
	{
		path: '/warning',
		meta:{index:0},
		component: warning
	},
]

export default new Router({
	routes
})
