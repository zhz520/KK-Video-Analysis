import axios from 'axios'

let loading = null
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    loading = ElLoading.service({
      lock: true,
      text: '拼命加载中',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    loading.close()
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    loading.close()
    return Promise.reject(error)
  }
)

export default axios
