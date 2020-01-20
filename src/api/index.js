//backend api호춣하는 로직이 담겨있음

import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
  router.push('/login')
}

const request = (method, url, data) => {
  //객체형식으로도 전달 가능
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      const {status} = result.response
      if (status === UNAUTHORIZED) return onUnauthorized()
      throw Error(result)
    })
}

export const board = {
  fetch() {
    return request('get', '/boards')
  }
}
