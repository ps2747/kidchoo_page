<template>
    <div class="header">
            <router-link to="/">
            <img :src="HeaderLogo" class="header-logo" alt="">
            </router-link>
            <div id="headerMenu">
                <div class="header-hamburger" :class="showMenuOrNot" @click="toggleClass()">
                    <div class="header-hamburger-line"></div>
                </div>
                <div :class="showMenuOrNot" class="header-hamburger-content">
                        <router-link to="/" style="text-decoration: none;">
                            <div class="header-hamburger-choice">官网首页</div>
                        </router-link>
                        <router-link to="/rationale" style="text-decoration: none;">
                            <div class="header-hamburger-choice">教育理念</div>
                        </router-link>
                        <router-link to="/jasmine" style="text-decoration: none;">
                            <div class="header-hamburger-choice">0-1岁小茉莉班</div>
                        </router-link>
                        <router-link to="/cherry" style="text-decoration: none;">
                            <div class="header-hamburger-choice">1-2岁中樱花班</div>
                        </router-link>
                        <router-link to="/lily" style="text-decoration: none;">
                            <div class="header-hamburger-choice">2-3岁大百合班</div>
                        </router-link>
                        <router-link to="/cooperate" style="text-decoration: none;">
                            <div class="header-hamburger-choice">企业合作</div>
                        </router-link>
                        <router-link to="/about" style="text-decoration: none;">
                            <div class="header-hamburger-choice">关于我们</div>
                        </router-link>
                        <div class="header-hamburger-choice" style="opacity:0;"></div>
                </div>
            </div>
    </div>
</template>

<script>
import HeaderLogo from '~/static/header-logo.png';
import Vue from 'vue';
import Vuex from 'vuex';

export default {
    data:() => ({
        HeaderLogo: HeaderLogo,
        show: false,
    }),
    props :{

    },
    methods:{
        toggleClass() {
            this.show = !this.show;
        }
    },
    computed: {
        showMenuOrNot() {
            return this.show ? 'open':'';
        }
    }
}

</script>
<style>
@media (max-width:899px) {
    .header {
        position: fixed;
        width: 100vw;
        height: 60px;
        background-color:#fff;
        top:0;
        z-index: 999;
    }
    img.header-logo {
        position: absolute;
        height: 28px;
        margin: 16px;
    }
    /*hamburger CSS*/
    .header-hamburger {
        position: absolute;
        width: 45px;
        height: 45px;
        top: 9px;
        right: 0px;
    }
    .header-hamburger-line {
        position: absolute;
        display:inline-flex;
        width: 20px;
        height: 3px;
        background-color: #7187ac;
        top: 21px;
        left: 5px;
        transition-duration: 0.25s;
    }
    .header-hamburger-line:before,
    .header-hamburger-line:after {
        position: absolute;
        display:inline-flex;
        width: 20px;
        height: 3px;
        content: " ";
        background-color: #7187ac;
    }
    .header-hamburger-line:before {
        top: -7px;
        left: 0;
        transition-duration: 0.25s;
    }
    .header-hamburger-line:after {
        top: 7px;
        left: 0;
        transition-duration: 0.25s;
    }
    /*hamburger結束*/

    .header-hamburger-content {
        position: absolute;
        height:0;
        width: 100vw;
        z-index: 999;
        top: 60px;
        overflow-y: hidden;
        transition-duration: 0.5s;
        transition-timing-function: swing;
        background-color:#fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .header-hamburger-content.open{
        height: 265px;
        padding: 15px 0;
    }
    .header-hamburger.open .header-hamburger-line {
        transition-duration: 0.5s;
        background-color: transparent;
    }
    .header-hamburger.open .header-hamburger-line:before {
        transition-duration: 0.5s;
        top: 0;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
    .header-hamburger.open .header-hamburger-line:after {
        transition-duration: 0.5s;
        top: 0;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
    .header-hamburger-choice {
        width: 40vw; 
        height: 45px;
        line-height: 42px;
        margin: 4px;
        text-align: center;
        border: 2px solid #7187ac;
        border-radius: 10px;
        color: #7187ac;
        font-weight:500;
        font-size:12px;  
    }
}
</style>
