import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy',
    // baseURL: 'http://106.54.54.237:8000/api/hy',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    // console.log(res.data)
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
  // .then(res => {
  //   resolve(res)
  // }).catch(err => {
  //   reject(err)
  // })
}
