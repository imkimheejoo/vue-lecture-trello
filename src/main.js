import Vue from 'vue'
import App from './App.vue'

const Login = {template: '<div>Login Page</div>'}

const routes = {
  '/':App,
  '/login': Login
}

new Vue({
  el: '#app',
  computed: {
    VueComponent() {
      return routes[window.location.pathname] ||
        {
          template: '<div>Page Not Found</div>'
        }
    }
  },
  render(h) {
    return h(this.VueComponent)
  } //화면을 그리는 함수
})
