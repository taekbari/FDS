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

// 이벤트 버스 사용을 위한 변수 설정
const eventBus = new Vue();
// 데이터 상태 공유를 위한 변수 설정
// 로그인 했을 때 서버로부터 얻어온 token 값을 컴포넌트 간에 사용하기 위해
// token 변수 설정
const store = {
  state: {
    token: ''
  }
};
Object.defineProperties(Vue.prototype, {
  // Vue.prototype에 eventBus 객체 연결
  $eventBus: {
    get() {
      return eventBus;
    }
  },
  // Vue.prototype에 store 객체 연결
  $store: {
    get() {
      return store;
    }
  }
});

// 루트 객체에 라우터 연결(마운트)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
