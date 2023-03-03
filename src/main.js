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
  },
  methods:{
    animation() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log("hey")
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      });
      const hiddenElement = document.querySelectorAll(".hidden");
      hiddenElement.forEach(el=>observer.observe(el)) 
    },
    
  },
  created(){
    console.log("created")
    this.animation()
  }
}


  
)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
