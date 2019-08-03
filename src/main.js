import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Split from './components/Split/Split.vue'
// 表单验证组件
import './validate.js';
// 注册全局组件
Vue.component('Split',Split)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
	template: '<App/>',
	router
});