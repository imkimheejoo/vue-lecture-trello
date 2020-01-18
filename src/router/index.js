import Vue from 'vue'
import App from '../App.vue'
import VueRouter from 'vue-router'

//이걸 추가해야 온전히 Vue-Router를 사용할 수 있음
Vue.use(VueRouter)

const Login = {template: '<div>Login Page</div>'}
const NotFound = {template: '<div>Page Not Found</div>'}

const router = new VueRouter({
  mode: 'history', // # 없애기 위해
  routes: [
    {path: '/', component: App},
    {path: '/login', component: Login},
    {path: '*', component: NotFound}
  ]
})
//모듈로 사용할 수 있게 exprot
export default router
