//设置全局加载的loading效果
import {Loading} from 'element-ui'
import axios from 'axios'

let loading     //loading实例
let reqCount=0      //请求个数

const http = axios.create();

//开始加载动画
function startLoading() {
    if (reqCount === 0) {
        loading = Loading.service({
            lock: true,
            text: "加载中...",
            background: "rgba(0, 0, 0, 0.7)",
            target: "body"
        })
    }
    reqCount++
}

//结束加载动画
function endLoading() {
    reqCount--
    if (reqCount <= 0) {
        loading.close()
    }
}

//请求数据拦截器
http.interceptors.request.use(request => {
    startLoading();
    return request
}, err => {
    return Promise.reject(err);
});

http.interceptors.response.use(response => {
    endLoading();
    return response
}, err => {
    endLoading();
    return Promise.reject(err);
});

export default http;
