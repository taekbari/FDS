import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import Service from './Service.vue';

Vue.use(VueMaterial);

let eventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get() {
      return eventBus;
    }
  }
});

new Vue({
  el: '#service',
  render: h => h(Service)
})
