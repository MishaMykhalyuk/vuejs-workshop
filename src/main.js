import Vue from 'vue'
import App from './components/App'
import store from './store/index.js'
// Vue.config.productionTip = false

const app =  new Vue({
  el: '#app',
  data: {},
  components: { App },
  store
})

window.app = app
