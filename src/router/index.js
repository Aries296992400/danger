import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const first = r => require.ensure([], () => r(require('@/page/beforeLogin/index')), 'first');
const login = r => require.ensure([], () => r(require('@/page/login/index')), 'login');
const dashboard = r => require.ensure([], () => r(require('@/page/dashboard/index')), 'dashboard');


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
	}

]

export default new Router({
	routes
})
