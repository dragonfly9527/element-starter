import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)
// 全局调整size和zIndex
//Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  el: '#app',
  render: h => h(App)
})
