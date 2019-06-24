<template>
    <div>
        <kidchoo-header />
        <kidchoo-first-pic src="/rationale/rationale-pic-1.png" style="margin-top:80px;"></kidchoo-first-pic>
        <kidchoo-line />
        <kidchoo-content-text-and-img class="rationale-brain" src="/rationale/rationale-pic-2.png" title="0-3岁，孩子大脑的黄金发育期" text="孩子年龄越小大脑发育速度越快，吸收能力越好；<br>科学研究结果认为：这阶段的育儿方法和教育投入<br>相比于人生各阶段是回报率最高的。"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="掌握0-3岁孩子的关键期<br>尊重孩子的独特与天赋合作" src="/class/Class-all-01.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="家校共育，让爱陪伴成长" src="/rationale/rationale-pic-4.png" text="父母是孩子的第一老师，是孩子效仿的重要对象<br>每个孩子的身上都有父母的影子<br>父母的成长要先于孩子的成长"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="基于六大教学理论进行通识教育" src="/rationale/rationale-pic-5.png" text="基于六大教学理论，简单来说，<br>就是通过满足孩子的好奇心和探索精神，<br>帮助孩子快乐学习成长。"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="教学方式：每日训练的早期教育" src="/rationale/rationale-pic-6.png" text="秉承“养育为主，教育为辅”的理念，<br>在每日的课程和生活设置中，<br>每个环节都融入了教育元素。<br>通过生活的内容和形式来对儿童进行教育。<br>——生活即教育，一日皆课堂。"></kidchoo-content-text-and-img>
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
    .rationale-brain img {
        width: 90vw;
        margin: 20px 5vw;
    }
}
</style>
