import Vue from 'vue'
import router from './router' //index는 생략가능 .js도 생략가능
import App from "./App";
import store from "./store";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App) //요청 url에 따라 화면이 바뀌는 부분
})
