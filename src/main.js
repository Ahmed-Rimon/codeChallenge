import Vue from 'vue'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'jquery/src/jquery.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
