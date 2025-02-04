import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  data(){
    return{
      savedCards: []
    }
  },
  render: h => h(App)
}).$mount('#app')
