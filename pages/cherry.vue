<template>
    <div>
        <kidchoo-header />
        <kidchoo-first-pic src="/class/ClassCherry.png" style="margin-top:80px;"></kidchoo-first-pic>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="用心对待每一个宝宝" src="/class/Class-all-01.png" text="祈初托婴中心根据孩子成长规律，分为三个班级：<br>一岁以内，1岁至两岁，两岁至三岁半。<br>从宝贝日常照料过程中，培养孩子良好的<br>情绪养成及行为习惯。"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="中樱花探索班<br>宝宝日常" src="/class/Class-all-02.svg"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="专业老师照顾成长<br>只为更全面的呵护" src="/class/Class-all-03.png" text="小班制托管：12个宝贝<br>标准师资配比：两教一保"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="中樱花探索班课程<br>课程理论体系" src="/class/Class-all-05.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="语言绘本，生活自理<br>知识探索，运动探索" src="/class/ClassCherry-classcontent.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-only-img class="class-examples" title="课程举例" src="/class/Class-all-04.png"></kidchoo-content-only-img>    
        <kidchoo-line />
        <kidchoo-content-only-img title="中樱花探索班每月食谱" src="/class/ClassCherry-menu.png"></kidchoo-content-only-img>
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
    .class-examples img {
        width:100vw;
        margin: 0;
    }
}
</style>
