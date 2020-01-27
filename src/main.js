// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import izitoast from 'izitoast'

import Modal from "./components/others/Modal"

Vue.config.productionTip = false

var eventBus= new Vue();

Vue.prototype.$eventBus= eventBus;
Vue.prototype.$axios=axios;
Vue.prototype.$izitoast=izitoast;

Vue.component("modal" ,Modal);

router.beforeEach((to,from,next)=>{

	axios.defaults.headers.common['Authorization'] = "Token "+ localStorage.getItem("token");

	next();


});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
