/*
@name: axios模块区域
@description: 主要用于设置全局的loding动画 请求拦截器响应拦截器等其他操作
@author: ZhiYuanWang
@time: 2020-08-26 11:18:15
*/
import axios from 'axios'
//报错状态的返回信息
import {errorCode} from './errorCode'
//全局弹框
import {Message} from 'element-ui'
//线性进度条loding动画
import NProgress from "nprogress"
import "nprogress/nprogress.css"

// 全局的 axios 默认值
axios.defaults.baseURL = '/api';

//全局配置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// 在异常处理中，我们可以 根据error.response.status返回的状态码进行操作，比如接口返回401作权限操作等
const err = (error) => {
    if (error.response) {
        if (error.response.status !== 200) {
            // 接口接口返回的状态码，获取对应的提示消息
            const errorMessage = errorCode(error.response);
            console.log(errorMessage);
            return
        }
    }
    return Promise.reject(error)
};

// 请求拦截中，我们可以对请求头作处理，比如所有的请求都加一个token等
axios.interceptors.request.use(config => {
    // let token =store.state.access_token;
    // if (token) {
    //     config.headers['Access-Token'] = token// 让每个请求携带自定义 token 请根据实际情况自行修改
    // }
    NProgress.start();
    return config; //加载动画的时候把config return 回去
},error => {
    return Promise.reject(error)
});
// 返回数据拦截中，我们可以对数据做一些小小的处理，比如后端所有接口返回的数据是这种类型:{data: {...}}，那我们就可以把data这一层给过滤掉
axios.interceptors.response.use((response) => {
    // if(response.data.code ==='100010'){
    //     router.push('/login');
    //     window.localStorage.clear();
    //     window.location.reload()
    // }
    NProgress.done();
    return response.data
},error => {
    //错误提醒
    NProgress.done();
    Message.error('崩溃了重新刷新......');
    return Promise.reject(error)
});

export default axios;
