/*
@name: 路由文件
@description: 主要用于配置页面路由/创建动态路由 路由守卫拦截
@author: ZhiYuanWang
@time: 2020-08-26 10:43:10
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//重写路由
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        //登录
        {
            path: '/login',
            component: () => import('../views/Login/Login'),
        },
        {
            path: '/mainStructure',
            component: () => import('../views/MainStructure/MainStructure'),
            redirect: '/browse',
            children: [
                //总览
                {
                    path: '/browse',
                    component: () => import('../views/Browse/Browse'),
                },
                //客户管理
                {
                    path: '/customer',
                    component: () => import('../views/Customer/Customer'),
                    meta: {
                        title: '客户管理'
                    }
                },
                //跟进管理
                {
                    path: '/followup',
                    component: () => import('../views/Followup/Followup'),
                    meta: {
                        title: '跟进管理'
                    }
                },
                //日志管理
                {
                    path: '/log',
                    component: () => import('../views/Log/Log'),
                    meta: {
                        title: '日志管理'
                    }
                },
                //统计管理
                {
                    path: '/statistical',
                    component: () => import('../views/Statistical/Statistical'),
                    meta: {
                        title: '统计管理'
                    }
                },
                //员工管理
                {
                    path: '/employees',
                    component: () => import('../views/Organization/Employees/Employees'),
                    meta: {
                        title: '员工管理'
                    }
                },
                //角色设置
                {
                    path: '/role',
                    component: () => import('../views/Jurisdiction/Role/Role'),
                    meta: {
                        title: '角色设置'
                    }
                },
                //权限管理
                {
                    path: '/admin',
                    component: () => import('../views/Jurisdiction/Admin/Admin'),
                    meta: {
                        title: '权限管理'
                    }
                },
            ],
        },
        //---------------------------------------------------    4 0 4       ----------------------------------------------
        {
            path: "/404",
            component: () => import('../views/Error/404.vue'),
        },
        {
            path: "*", // 此处需特别注意置于最底部
            redirect: "/404"
        }
    ]
});

//路由守卫
// router.beforeEach((to, from, next) => {
//     // to 将要进入的路由
//     // from 代表从那个路径跳转而来
//     // next 放行
//     if (to.path === '/login') {
//         return next()
//     } else {
//         const token = store.state.access_token;
//         if (!token) {
//             return next('/login');
//         } else {
//             next()
//         }
//     }
// });
export default router
