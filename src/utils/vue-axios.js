import Vue from 'vue'
import axios from 'axios'
/**
 * 进行跳转到登录页面
 */
// const goGitlab = () => {
//   const url = 'http://localhost:8848/user/login'
//   window.location.href = url
// }

// axios默认配置
axios.defaults.timeout = 120000 // 超时时间
axios.defaults.baseURL = './' // 请求前缀路径
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8' // 请求前缀路径

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
    config => {
        console.log("from interceptors");
        config.headers['tk'] = 'token test'

        return config
    },
    error => {
        return Promise.reject(error.response)
    }
)

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            const headers = response.headers
            if (headers['content-type'] === 'application/octet-stream') {
                return response
            }
            if (response.config.headers.totalReturn) {
                return response.data
            }
            if (response.data.success) {
                return response.data
            } else {
                Message.error(response.data.data)
                return false
            }
        }
    },
    error => {
        const code = error.response.status
        switch (code) {
            case 401:
                // goGitlab()
                return false
            case 404:
                return false
            default:
                return error.response
        }
    }
)

// Vue.prototype.axios = axios

export default axios
