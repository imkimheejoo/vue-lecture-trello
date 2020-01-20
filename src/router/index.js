import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Board from "../components/Board";
import Card from "../components/Card";

//이걸 추가해야 온전히 Vue-Router를 사용할 수 있음
Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token') //없으면 undefined 값이 저장
  //로그인이 완료되면 현재페이지로 돌아오게 하려면 rPath=${encodeURIComponent(to.path)}
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history', // # 없애기 위해
  routes: [
    {path: '/', component: Home, beforeEnter: requireAuth},
    {path: '/login', component: Login},
    {
      path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [
        {path: 'c/:cid', component: Card, beforeEnter: requireAuth} //주소 맨 앞에 /없음
      ]
    },
    {path: '*', component: NotFound}
  ]
})
//모듈로 사용할 수 있게 export
export default router
