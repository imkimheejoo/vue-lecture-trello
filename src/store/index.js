import Vue from  'vue'
import Vuex from 'vuex'
import * as api from '../api'

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
  },
  actions: {
    ADD_BOARD(_, {title}) {
      return api.board.create(title)
    }
  }
})

export default store
