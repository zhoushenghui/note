//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

import store from './store'

import router from './router'
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
	created() {
		var axios = require("axios");
		var config1 = {
			method: "get",
			url: "https://todo.theappis.fun/todos",
			headers: {},
		};
		axios(config1)
			.then((response) => {
				this.$store.state.obj = response.data.data;
			})
			.catch(function (error) {
				console.log(error);
			});

		var config2 = {
			method: "get",
			url: "https://todo.theappis.fun/todos?complete=false",
			headers: {},
		};

		axios(config2)
			.then((response) => {
				this.$store.state.falseObj = response.data.data;
			})
			.catch(function (error) {
				console.log(error);
			});

		var config3 = {
		  method: "get",
		  url: "https://todo.theappis.fun/todos?complete=true",
		  headers: {},
		};

		axios(config3)
		  .then((response) => {
		    this.$store.state.trueObj = response.data.data;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	},

})
