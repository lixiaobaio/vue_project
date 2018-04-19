// 入口文件
//导入Vue的包
import Vue from "vue";

//导入路由的包
import VueRouter from 'vue-router';
//安装vue—router
Vue.use(VueRouter);

/* //导入vue-resource
import VueResource from "vue-resource";
//安装
Vue.use(VueResource)
 */

//按需导入mint-ui组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入MUI样式
import './lib/mui/css/mui.min.css'
//导入扩展图标
import './lib/mui/css/icons-extra.css'

//导入自己定义的router
import router from "./router.js";


//首先导入app根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router 
})