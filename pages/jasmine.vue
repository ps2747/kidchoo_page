<template>
    <div>
        <kidchoo-header />
        <kidchoo-first-pic src="/class/ClassJasmine.png" style="margin-top:80px;"></kidchoo-first-pic>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="用心对待每一个宝宝" src="/class/Class-all-01.png" text="祈初托婴中心根据孩子成长规律，分为三个班级：<br>一岁以内，1岁至两岁，两岁至三岁半。<br>从宝贝日常照料过程中，培养孩子良好的<br>情绪养成及行为习惯。"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="小茉莉启蒙班<br>宝宝日常" src="/class/Class-all-02.svg"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="专业老师照顾成长<br>只为更全面的呵护" src="/class/Class-all-03.png" text="小班制托管：8个宝贝<br>标准师资配比：一教两保"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="小茉莉启蒙班课程<br>课程理论体系" src="/class/Class-all-05.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="建立安全感、培养运动能力<br>生活规律、认知启蒙" src="/class/text-2.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-only-img class="class-examples" title="课程举例" src="/class/Class-all-04.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <div class="class-jasmine-menu">
            <h2>小茉莉启蒙班每月食谱</h2>
            <img src="/class/ClassJasmine-menu-1.png" style="margin-bottom:30px">
            <img src="/class/ClassJasmine-menu-2.png">
        </div>
        <kidchoo-line />
        <kidchoo-form></kidchoo-form>
        <kidchoo-info></kidchoo-info>
        <kidchoo-footer></kidchoo-footer>
    </div>
</template>
<script>
import KidchooHeader from "~/components/KidchooHeader.vue";
import KidchooFooter from "~/components/KidchooFooter.vue";
import KidchooContentTextAndImg from "~/components/KidchooContentTextAndImg.vue";
import KidchooContentOnlyText from "~/components/KidchooContentOnlyText.vue";
import KidchooContentOnlyImg from "~/components/KidchooContentOnlyImg.vue";
import KidchooFirstPic from "~/components/KidchooFirstPic.vue";
import KidchooForm from "~/components/KidchooForm.vue";
import KidchooLine from "~/components/KidchooLine.vue";
import KidchooInfo from "~/components/KidchooInfo.vue";
export default {
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
   }
}
</script>
<style>
@media (max-width: 899px) {
    .class-jasmine-menu h2 {
        text-align: center;
        font-size: 20px;
        color: #7187ac;
        margin: 20px;
        line-height: 30px;
    }
    .class-jasmine-menu img {
        width: 90vw;
        margin:0 5vw;
    }
}
</style>
