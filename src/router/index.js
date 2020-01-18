import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";

//이걸 추가해야 온전히 Vue-Router를 사용할 수 있음
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // # 없애기 위해
  routes: [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '*', component: NotFound}
  ]
})
//모듈로 사용할 수 있게 exprot
export default router
