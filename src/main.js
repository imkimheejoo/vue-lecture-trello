import Vue from 'vue'
import router from './router' //index는 생략가능 .js도 생략가능

new Vue({
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})
