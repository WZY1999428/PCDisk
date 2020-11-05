import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'
import store from './store/index.js'
import qs from 'qs'

Vue.prototype.axios = axios;

Vue.prototype.qs = qs

Vue.config.productionTip = false
new Vue({
	render: h => h(App),
	router:router,
	store:store
}).$mount('#app')
