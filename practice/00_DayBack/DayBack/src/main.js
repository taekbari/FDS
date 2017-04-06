import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Service from './Service.vue'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'white'
})

let eventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get() {
      return eventBus;
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#service',
  render: h => h(Service)
})
