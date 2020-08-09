<template>
    <div class="m-life">
        <el-row>
            <ul class="nav">
                <li><router-link to = "/s" class="takeout">美团外卖</router-link></li>
                <li><router-link to = "/s" class="movie">猫眼电影</router-link></li>
                <li><router-link to = "/s" class="hotel">美团酒店</router-link></li>
                <li><router-link to = "/s" class="apartment">民宿公寓</router-link></li>
                <li><router-link to = "/s" class="business">商家入驻</router-link></li>
                <li><router-link to = "/s" class="">美团公益</router-link></li>
            </ul>
        </el-row>
        <el-row>
            <el-col :span="14">
                <m-slider/>
            </el-col>
            <el-col :span="4">
                <div class="m-life-pic"></div>
            </el-col>
            <el-col :span="6" >
               <div class="m-life-login">
                    <h4><img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt=""></h4>
                    <p class="m-life-login-name">hi~  {{$store.state.userName ? $store.state.userName : '你好！'}}</p>
                    <p v-if="!$store.state.userName">
                        <router-link :to = "{name:'register'}">
                        <el-button round>注册</el-button>
                        </router-link>
                    </p>
                    <p v-if="!$store.state.userName">
                        <router-link :to = "{name:'login'}">
                        <el-button round>立即登录</el-button>
                        </router-link>
                    </p>
                    <p v-if="$store.state.userName">
                        <i class="el-icon-s-goods"></i>
                        开始选购吧
                        <!-- <router-link :to = "{name:'index'}" @click="changeuse">
                        <el-button round>退出登陆</el-button>
                        </router-link> -->
                    </p>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <div class="m-life-hotel"></div>
            </el-col>
            <el-col :span="7">
                <div class="m-life-music"></div>
            </el-col>
            <el-col :span="4">
                <div class="m-life-coop"></div>
            </el-col>
                
            <el-col :span="6">
                <div class="m-life-downapp">
                    <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
                    <p>美团手机app版</p>
                    <p class="last-p">
                        <span class="red">1元起</span>
                        吃喝玩乐
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>

import  MSlider from "@/components/index/slider.vue"

export default {
    components:{
        MSlider
    },
    methods:{
        // changeuse(){
        //     this.$store.commit('setUserName','');
        //     this.$router.push({name:'index'})
        // }   
    }
}
</script>
<style lang = "scss">
    @import"@/assets/css/index/life.scss"
</style>