import axios from "axios"

const ISDEVELOPMODE = process.env.NODE_ENV !== 'production'
const django_api_url = 'http://localhost:8888'
const base_url = ISDEVELOPMODE ? django_api_url : ''

export default{
  auth: {
    login(user) {
      return axios({
        method: 'post',
        url: `${base_url}/api/token/`,
        data: user
      })
    },
    tokenVerify(token) {
      return axios({
        method: 'post',
        url: `${base_url}/api/token/verify/`,
        data: token
      })
    },
    register(user) {
      return axios({
        method: 'post',
        url: `${base_url}/api/register/`,
        data: user
      })
    }
  },
  game: {
    gamepool(data) {
      return axios({
        method: 'post',
        url: `${base_url}/api/gamepool/`,
        data: data
      })
    }
  }
}