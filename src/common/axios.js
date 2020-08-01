// 引入 axios
import axios from "axios"
// 配置公共的axios
axios.defaults.baseURL = process.env.VUE_APP_URL

// 请求拦截器
axios.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应的拦截器
axios.interceptors.response.use(function (response) {
    // 返回数据中的data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

//导出自定义axios
export default axios
