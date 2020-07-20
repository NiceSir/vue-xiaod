import axios from 'axios'

const http = axios.create({
  //请求超时时间
  timeout: 3000
})

http.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log(err)
  }
)

http.interceptors.response.use(
  response => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
  },
  err => console.log(err)
)

export default http
