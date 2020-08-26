/*
@name: vuex 主文件
@description: 用于存储通用状态
数据量较大可以使用modules进行分层分块
1.新建文件modules里面分层好的模块
2.在本页面引入 import admin from './modules/Admin'
3.在本页面modules方法里面注册引入的文件模块
modules: {
   admin,
}
@author: ZhiYuanWang
@time: 2020-08-26 11:35:09
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {},
    getters: {},


})
