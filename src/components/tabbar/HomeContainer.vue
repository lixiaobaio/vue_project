<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="item in LunbotuList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item> -->
            <mt-swipe-item>
                <img src="/src/images/slide_01.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="/src/images/slide_02.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="/src/images/slide_03.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="/src/images/slide_04.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
    /*  data(){
        return{
            LunbotuList:[]
        };
    }, */
    /* created () {
        this.getLunbotu()
    }, */
    /* methods: {
        getLunbotu(){
            // 获取轮播图数据的方法
            this.$http.get('http://vue.studyit.io/api/getlunbo').then(result =>{
                if(result.body.status===0){
                    this.LunbotuList = result.body.message
                }else{
                    Toast("轮播图加载失败")
                }
            })
        }
    } */
};
</script>

<style lang="less" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        &:nth-child(1) {
            background-color: red;
        }
        &:nth-child(2) {
            background-color: blue;
        }
        &:nth-child(3) {
            background-color: cyan;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
        width: 60px;    
    }
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>

