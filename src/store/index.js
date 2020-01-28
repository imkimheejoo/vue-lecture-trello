import Vue from  'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //미들웨어

const store  = new Vuex.Store({
  //AddBoard Component에 관련된 상태를 만든것 -> isAddBoard는 Home에서도 쓰이고 AddBoard에서도 쓰이기 때문
  state: {
    isAddBoard: false
  },
  mutations: {
    SET_IS_ADD_BOARD(state, toggle) {
      state.isAddBoard = toggle
    }
  }
})

export default store
