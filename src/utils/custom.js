/*
@name: 自定义指令
@description: 主要用于做权限模块按钮的显示于删除 需要在全局main.js引入 使用  v-permission ="{action:'add'}"
@author: ZhiYuanWang
@time: 2020-08-26 11:31:26
*/
// import Vue from 'vue'
// Vue.directive('permission',{
//     inserted(el,binding){
//         const action =binding.value.action;
//         const effect =binding.value.effect;
//         //判断，当前的路由所对应的组件中，如何判断用户是否具备action的权限
//         let abc=window.localStorage.getItem('reluAdus');
//         if(JSON.parse(abc).indexOf(action) == -1){
//             if(effect === 'disabled'){
//                 el.disabled =true;
//                 el.classList.add('is-disabled')
//             }else {
//                 el.parentNode.removeChild(el)
//             }
//         }
//     }
// });
