<template>
    <div>
        <kidchoo-header />
        <video class="index-intro" controls poster="/index/index-video-preview.jpg"><source src="/index/index-intro.mov"></video>
        <kidchoo-content-only-text title="祈初0-2岁全日制托育" text="祈初全日制托育，为0-2岁宝宝家庭提供<br>全日托、半日托、一对一精致早教、妈妈沙龙<br>育儿测评与咨询等一体式服务<br>早七点半至晚六点半，11个小时超长托育时间"></kidchoo-content-only-text>
        <kidchoo-line />
        <kidchoo-index-class-choice></kidchoo-index-class-choice>
        <kidchoo-line />
        <kidchoo-content-only-img title="医食教合一，祈初特色托育" src="/index/index-pic-1.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="七大分区功能，适龄适性" src="/index/index-pic-2.jpg" text="基于婴幼儿成长特征设置功能分区<br>含动态游戏区、静态游戏区、绘本区<br>角色扮演区、用餐/午睡区、户外游戏区等<br>让宝贝在这些有准备的环境中<br>玩耍、模仿、课程中进行学习"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img class="index-teacher-pic" title="五位老师陪伴，专业教导" src="/index/index-pic-3-new.png" text="依据婴幼儿生长发育各阶段<br>分班照料，严格控制园所照料比例<br>给予宝贝更加专业全面的照顾，培养宝贝良好作息<br>让妈妈稳稳安心"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="四重医护保障，安全呵护" src="/index/index-pic-4.jpg" text="综合日本、台湾的托育健康管理系统<br>引进比利时全套原装进口益生菌空气净化系统<br>医院手术室专用人机同室消毒机等专用设施<br>儿科医师定期诊察<br>保持中心的恒温恒湿，把控每个区域的环境消杀<br>为宝宝健康提供全面保障"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-text-and-img title="30种健康食材，个性定制" src="/index/index-pic-5.jpg" text="婴幼儿营养师团队根据<br>宝贝的咀嚼力、体质等情况进行评估<br>为每位宝贝制定专属的个人营养计划<br>14类食物，30种以上食材，阶段性量化配比<br>确保宝宝吃得安全，吃得健康"></kidchoo-content-text-and-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="提升宝宝六大能力" src="/index/index-pic-6.png"></kidchoo-content-only-img>
        <kidchoo-content-only-img class="index-five-serves" title="祈初五大特色服务" src="/index/index-pic-7.svg"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-only-img title="八大安全保障，父母安心托付" src="/index/index-pic-8.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <kidchoo-content-only-img class="index-phone-pic" title="客户见证" src="index/index-pic-9.png"></kidchoo-content-only-img>
        <kidchoo-line />
        <!-- <kidchoo-content-only-img class="index-belives" title="祈初全日制托育，值得信赖" src="index/index-pic-10.jpg"></kidchoo-content-only-img> -->
        <kidchoo-picture-switch title="祈初全日制托育，值得信赖"></kidchoo-picture-switch>
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
import KidchooIndexClassChoice from "~/components/KidchooIndexClassChoice"
import KidchooForm from "~/components/KidchooForm.vue";
import KidchooLine from "~/components/KidchooLine.vue";
import KidchooInfo from "~/components/KidchooInfo.vue";
import KidchooPictureSwitch from "~/components/KidchooPictureSwitch.vue";
export default {
   components: {
       KidchooHeader,
       KidchooFooter,
       KidchooForm,
       KidchooContentTextAndImg,
       KidchooContentOnlyText,
       KidchooContentOnlyImg,
       KidchooIndexClassChoice,
       KidchooLine,
       KidchooInfo,
       KidchooPictureSwitch,
   }
}

</script>

<style>
@media (max-width: 768px) {
    .index-intro {
        width: 100vw;
        height: auto;
        margin-top: 80px;
    }
    .index-five-serves {
        background-color: #f2f2f2;
        height: 120vw;
        padding: 15px 0;
    }
    .index-teacher-pic img {
        width: 80vw;
        margin: 0 10vw 20px 10vw;
    }
    .index-belives img {
        width: 100vw;
        margin: 0;
    }
    .index-phone-pic img {
        width: 60vw;
        margin: 0 20vw;
    }
}
</style>
