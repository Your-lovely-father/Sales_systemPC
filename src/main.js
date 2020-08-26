/*
@name: 入口文件
@description: 主要用于引用一些全局的样式等等
@author: ZhiYuanWang
@time: 2020-08-26 11:12:30
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//全局的自定义指令
import './utils/custom'

//清楚默认样式
import './assets/css/common.css'

//字体图标
import './assets/font/iconfont.css'

//图片格式化
import Tool from './assets/js/tool'
Vue.prototype.$Tool=Tool;

//rem 换算
// import '@/utils/flexable'

//Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//全局弹框
import {Message} from 'element-ui'
Vue.prototype.$message=Message;

//Vant 移动端框架全局引入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
