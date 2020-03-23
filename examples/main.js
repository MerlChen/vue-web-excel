import Vue from 'vue'
import App from './App.vue'
import vueExcel from './../packages/index'

Vue.use(vueExcel);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount('#app');