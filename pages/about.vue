<template>
    <div>
        <kidchoo-header />
        <kidchoo-content-text-and-img style="margin-top:80px;" title="关于祈初" src="/about/aboutkidchoo-pic-1.png" text="祈初托婴中心由两岸医食教专业人士共同发起，<br>基于社区和企业需求，是一家专注于4个月-24个月<br>婴幼儿日间托管照料服务机构。<br>秉承“养育为主，教育为辅”的运营理念，<br>为家庭提供全日托、半日托、精致早教、<br>育儿测评和咨询等服务。"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-picture-switch title="企业荣誉"></kidchoo-picture-switch>
        <kidchoo-line />
        <kidchoo-content-only-img title="发展历程" src="/about/aboutkidchoo-pic-2.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <div class="about-map">
            <h2>祈初祥店中心</h2>
            <kidchoo-about-map></kidchoo-about-map>
            <p>祈初祥店中心地址：<br>厦门市湖里区祥店里164号103单元</p>
        </div>
        <kidchoo-line />
        <div class="about-member">
            <h2>诚聘英才</h2>
            <img src="/about/aboutkidchoo-pic-3.jpg" alt="">
            <h4>托班老师</h4>
            <p class="about-member-need">岗位职责</p>
            <p class="about-member-need-content">1、结合领先的幼儿教育理念，培养和提升幼儿的全面素质<br>2、负责班级的教学活动、环境创设、制作玩教具<br>3、记录幼儿在园的一日生活、记录发展报告<br>4、与家长沟通、互动，做好家园共育</p>
        </div>
        <div class="about-member">
            <img src="/class/Class-all-03.png">
            <h4>早教老师</h4>
            <p class="about-member-need">岗位职责</p>
            <p class="about-member-need-content">1、认真研读教案、备课，授课，确保课程质量<br>2、在中心热情友善地与家长和孩子互动，游戏，服务<br>3、在课程顾问共同服务好会员，做好成长记录<br>4、定期与家长沟通孩子的表现和情况，以当面，电话，邮件等方式<br>5、协助其他部门完成工作</p>
        </div>
        <div class="about-member">
            <img src="/class/Class-all-03.png">
            <h4>护理师</h4>
            <p class="about-member-need">岗位职责</p>
            <p class="about-member-need-content">1、为婴幼儿提供生活照料和护理<br>2、需要掌握婴幼儿的养、护、教，包括饮食、饮水、睡眠、二便、三浴、卫生、生长检测、动作技能训练、智力开发、社会行为及人格培养、个性化教学等<br>3、需要指导教师、客户掌握正确的保健方法和育婴方法，传播正确的育婴观念</p>
        </div>
        <kidchoo-line />
        <kidchoo-form></kidchoo-form>
        <kidchoo-info></kidchoo-info>
        <kidchoo-footer></kidchoo-footer>
    </div>
</template>
 
<script>
import Vue from 'vue'
import KidchooHeader from "~/components/KidchooHeader.vue";
import KidchooFooter from "~/components/KidchooFooter.vue";
import KidchooContentTextAndImg from "~/components/KidchooContentTextAndImg.vue";
import KidchooContentOnlyText from "~/components/KidchooContentOnlyText.vue";
import KidchooContentOnlyImg from "~/components/KidchooContentOnlyImg.vue";
import KidchooFirstPic from "~/components/KidchooFirstPic.vue";
import KidchooForm from "~/components/KidchooForm.vue";
import KidchooLine from "~/components/KidchooLine.vue";
import KidchooInfo from "~/components/KidchooInfo.vue";
import KidchooAboutMap from "~/components/KidchooAboutMap.vue";
import KidchooPictureSwitch from "~/components/KidchooPictureSwitch.vue";
export default {
    // head () {
    //     return {
    //         script: [
    //             { src: 'http://api.map.baidu.com/api?v=1.4',async:true }        
    //         ],
    //     }
    // },
    components: {
       KidchooHeader,
       KidchooFooter,
       KidchooForm,
       KidchooContentTextAndImg,
       KidchooContentOnlyText,
       KidchooContentOnlyImg,
       KidchooLine,
       KidchooInfo,
       KidchooFirstPic,
       KidchooAboutMap,
       KidchooPictureSwitch,
   },
}

</script>
<style>
@media (max-width: 899px) {
    .about-belives img {
        width: 100vw;
        margin: 0;
    }
    .about-map h2 {
        font-size: 23px;
        color: #7187ac;
        margin: 20px;
        line-height: 30px;
        text-align: center;
    }
    .about-map p {
        font-size: 12px;
        color: gray;
        text-align: center;
    }
    .map {
        width: 100%;
        height: 300px;
    }
    .about-member h2 {
        font-size: 20px;
        color: #7187ac;
        margin: 20px;
        line-height: 30px;
        text-align: center;
    }
    .about-member img {
        width: 100vw;
        margin-bottom: 20px; 
    }
    .about-member h4 {
        font-size:14px; 
        font-weight: 400;
        text-align: center;
        line-height: 10px;
    }
    .about-member p {
        font-size: 12px;
        color: gray;
    }
    .about-member-need {
       margin-bottom:0;
       text-align: center; 
    }
    .about-member-need-content {
        padding: 10px 0 0 5px;
    }
}
</style>
