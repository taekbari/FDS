import Vue from 'vue';
import App from './App.vue';
import Login from './Login.vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import Service from './Service.vue';

// vue-router 사용을 위한 설정
Vue.use(VueRouter);
// vue-material 사용을 위한 설정
Vue.use(VueMaterial);

// 라우트 정의
// 경로와 컴포넌트를 연결한다.
const routes = [
  {
    path: '/', component: Login
  },
  {
    path: '/service', component: Service,
  }
];

// 라우터 객체 생성하고 정의해 놓은 라우트 설정
const router = new VueRouter({
  mode: 'history',
  routes
});

// 이벤트 버스 사용을 위한 설정
const eventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get() {
      return eventBus;
    }
  }
});

// 루트 객체에 라우터 연결(마운트)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
