import Vue from 'vue'
import router from './router' //index는 생략가능 .js도 생략가능
import App from "./App";

new Vue({
  el: '#app',
  router,
  render: h => h(App) //요청 url에 따라 화면이 바뀌는 부분
})
