<template>
    <div class="home">
        <el-container class="home-container">
            <!--       侧边栏区域        -->
            <el-aside :width="isCollapsed ? '64px': '200px'">
                <div class="logo">
                    <div class="logo_img">
                        <img src="../../assets/img/logo-ip.png" alt="">
                    </div>
                    <div class="logo_text" v-show="isLogoText">
                        可立刻
                    </div>
                </div>
                <!--       导航区         -->
                <el-menu
                        background-color="#304156"
                        text-color="#fff"
                        active-text-color="#409EFF"
                        :unique-opened="true"
                        :collapse="isCollapsed"
                        :collapse-transition="false"
                        :router="true"
                        :default-active="headIndex"
                >
                    <!--  主菜单  -->
                    <el-menu-item :index="'/'+ item.path" v-for="item in list" :key="item.id"   @click="addTab(item)">
                        <i :class="icon[item.id]" id="icon"></i>
                        <span class="text">{{item.name}}</span>
                    </el-menu-item>

                    <el-submenu :index="'/'+ item.path" v-for="item in navList" :key="item.id" >
                    <!--     一级菜单模板区 -->
                    <template slot="title">
                        <i :class="icon[item.id]" id="icon"></i>
                        <span class="text">{{item.name}}</span>
                    </template>
                    <!--       二级菜单区域      -->
                    <el-menu-item :index=" '/'+ item1.path" v-for="item1 in item.children" :key="item1.id"   @click="addTab(item1)">
                        <template slot="title">
                            <i :class="childrenIcon[item1.id]" id="icon"></i>
                            <span class="text">{{item1.name}}</span>
                        </template>
                    </el-menu-item>
                </el-submenu>
                </el-menu>

            </el-aside>
            <el-container>
                <!--       头部区域         -->
                <el-header>
                    <div class="header">
                        <div class="header-left">
                            <span class="iconfont icon-shouqi" @click="up" style="display: block" v-if="flag"></span>
                            <span class="iconfont icon-zhankai" @click="up" style="display: block" v-else></span>
                            <span class="iconfont icon-shuaxin" @click="refresh"></span>
                        </div>
                        <div class="header-right" @mousemove="move" @mouseleave="leave">
                            <el-dropdown>
                                <ul class="exit" @click="details">
                                    <li>
                                        <p class="p_img">
                                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598422913380&di=2f26279cfe227e086ae4b9a26c16345b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F11%2F20161111030031_2Pxru.jpeg"
                                                 alt="">
                                        </p>
                                        <p class="name_title">
                                            王志远
                                        </p>
                                        <p class="icon_top_bottom">
                                            <span class="el-icon-caret-top" v-if="isShowIcon"></span>
                                            <span class="el-icon-caret-bottom" v-else></span>
                                        </p>
                                        <ol class="exit_btn">
                                            <li>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item class="exit_Btn">
                                                        <p @click="updPass()">修改密码</p>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item class="exit_Btn">
                                                        <p @click="starTtab()">启动页签</p>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item class="exit_Btn">
                                                        <p @click="tab()">关闭页签</p>
                                                    </el-dropdown-item>
                                                    <el-dropdown-item class="exit_Btn">
                                                        <p @click="exit()">退出</p>
                                                    </el-dropdown-item>
                                                </el-dropdown-menu>
                                            </li>
                                        </ol>
                                    </li>
                                </ul>
                            </el-dropdown>
                        </div>
                    </div>
                </el-header>
                <!--         面包屑导航           -->
                <div class="crumbs" v-show="isTab">
                    <el-tabs v-model="editableTabsValue" type="border-card"  closable @tab-remove="removeTab" @tab-click="goRouter">
                        <el-tab-pane
                                v-for="(item, index) in editableTabs"
                                :key="item.id"
                                :label="item.name"
                                :name="item.path"
                        >
                        <div class="tab"><span @click="details">总览</span> / <span>{{item.name}}</span></div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <!--       主体区域         -->
                <el-main>
                    <transition name="fade-transform" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
        <myPassword :isShowPassword.sync="isShowPassword"/>
        <myExit :isExit.sync="isExit"/>
    </div>
</template>

<script>
    import  myPassword from './ChangePassword/ChangePassword'
    import myExit from './Exit/Exit'
    export default {
        name: "Home",
        components:{
            myPassword,
            myExit,

        },
        data() {
            return {
                //折叠
                isCollapsed: false,
                //logo字隐藏切换
                isLogoText: true,
                //侧边栏展开收齐按钮
                flag: true,
                //侧边栏数据
                isShowIcon: false,//退出图标切换
                isShowPassword: false,//修改密码
                isExit:false,//退出
                isTab:true,//关闭面包屑导航
                editableTabsValue: 'browse', //面包屑导航
                editableTabs: [{ //页签
                    id: "99",
                    name: "首页",
                    path: "browse",
                }],
                //侧边栏
                list: [
                    {
                        id: '7',
                        name: '首页',
                        path: 'browse'
                    },
                ],
                navList: [
                    {
                        id: '8',
                        name: '权限设置',
                        path: 'permissions',
                        children: [
                            {
                                id: '9',
                                name: '角色设置',
                                path: 'role'
                            },
                            {
                                id: '10',
                                name: '权限管理',
                                path: 'admin'
                            }
                        ]
                    }
                ],
                //一级侧边栏字体图标
                icon: {
                    '7': 'iconfont icon-genjinguanli',
                    '8': 'iconfont icon-quanxianshezhi1'
                },
                //二级侧边栏菜单
                childrenIcon: {
                    '9': 'iconfont icon-menu-pass-Emp',
                    '10': 'iconfont icon-quanxianshezhi',
                },
                headIndex: '/browse'
            }
        },
        methods: {
            goRouter(e) {
                let path = '/'+this.editableTabs[e.index].path;
                this.headIndex = path;
                this.$router.push(path)
            },
            exit() {
                this.isExit=true
            },
            up() {
                this.isCollapsed = !this.isCollapsed;
                this.isLogoText = !this.isLogoText;
                this.flag = !this.flag
            },
            move() {
                this.isShowIcon = true
            },
            leave() {
                this.isShowIcon = false
            },
            updPass(){
                this.isShowPassword=true
            },
            refresh(){
                this.$router.go(0)
            },
            details(){
               this.$router.push('/browse')
            },
            addTab(targetName) { //添加
                let show = false;
                this.editableTabs.forEach(item => {
                    if(item.name  == targetName.name) {
                        this.editableTabsValue = targetName.path;
                        show = true
                    }
                });
                if(show) { return}
                this.editableTabs.push({
                    id: targetName.id,
                    name: targetName.name,
                    path: targetName.path,
                });
                this.editableTabsValue = targetName.path;
            },
            removeTab(targetName) { //删除
                if (this.editableTabs.length == 1) {
                    return
                }
                this.editableTabs.forEach((item,index) => {
                    if(item.path  == targetName) {
                        if(index != 0){
                            this.editableTabs.splice(index,1)
                        }else{
                            return
                        }
                        if (this.editableTabs.length == 0) {
                            return
                        }
                        if(index == 0){
                            let path = '/'+this.editableTabs[0].path;
                            this.headIndex = path;
                            this.editableTabsValue = this.editableTabs[0].path;
                            this.$router.push(path)
                        }else{
                            let path = '/'+this.editableTabs[index-1].path;
                            this.headIndex = path;
                            this.editableTabsValue = this.editableTabs[index-1].path;
                            this.$router.push(path)

                        }
                    }
                });
            },
            starTtab(){ //启动
                this.isTab=true;
            },
            tab(){ //关闭页签
                this.isTab=false;
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .home>>>#tab-browse > span{
        display: none;
    }
    .home>>>#tab-browse:hover{
        padding: 0 20px;
    }
    .home {
        width: 100%;
        height: 100%;
    }

    .el-header {
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    }

    .el-aside {
        background-color: #304156;
    }

    .home>>>.el-main {
        background-color: #f0f2f5;
        padding: 0 !important;
    }

    .el-menu {
        border-right: none;
    }

    .el-submenu__icon-arrow {
        display: none;
    }

    .home-container {
        height: 100% !important;
    }

    .header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .icon-shouqi {
        cursor: pointer;
    }
    .icon-shuaxin{
        cursor: pointer;
        margin-left: 50px;
        font-size: 18px;
        font-weight: bolder;
    }
    .icon-zhankai {
        cursor: pointer;
    }

    .header-right {
        cursor: pointer;
    }

    .logo {
        width: 100%;
        height: 60px;
        display: flex;
        background: #2b2f3a;
        color: #fff;
        align-items: center;
        justify-content: center;
    }

    .logo_img {
        width: 32px;
        height: 32px;
    }

    .logo_img > img {
        width: 100%;
        height: 32px;
    }

    .logo_text {
        margin-left: 20px;
        font-size: 16px;
        font-weight: bold;
    }

    .header-left {
        display: flex;
        height: 60px;
        align-items: center;
    }

    #icon {
        font-weight: 400;
        color: #ffffff;
    }

    .text {
        margin-left: 15px;
    }

    .exit {
        height: 60px;
    }

    .exit > li {
        display: flex;
        height: 60px;
        align-items: center;
    }

    .p_img {
        width: 40px;
    }

    .p_img > img {
        width: 100%;
        border-radius: 3px;
    }

    .name_title {
        margin-left: 10px;
    }

    .icon_top_bottom {
        margin-left: 5px;
    }

    .exit_Btn {
        width: 110px;
        text-align: center;
    }

    .crumbs {
        width: 100%;
    }
    .crumbs>>>.el-tabs__nav-prev{
        margin-left: 8px;
    }
    .crumbs>>>.el-tabs__nav-next{
        margin-right: 8px;
    }
    .crumbs>>>.el-tabs__header{
        margin: 0;
    }
    .crumbs>>>.el-tabs__nav-wrap.is-scrollable {
        padding: 0 30px;
        box-sizing: border-box;
    }
    .crumbs>>>.el-tabs--border-card>.el-tabs__header .el-tabs__item{
        border-right: 1px #eee solid;
    }
</style>
