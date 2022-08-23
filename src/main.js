import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.mixin({
  data: function () {
    return {
      title:"AWS User Group Calicut"
    }
  }}


  
)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
