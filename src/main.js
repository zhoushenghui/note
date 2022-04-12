//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

import store from './store'

import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
//引入Vue的生产提示
Vue.config.productionTip = false;


//创建vm
new Vue({
	el: "#app",
	render: h => h(App),
	store,
	router,
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})
