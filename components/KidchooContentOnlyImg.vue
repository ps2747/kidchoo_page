<template>
    <div class="content-only-img">
       <h2 v-html="title"></h2>
       <img :src="src" alt="">
    </div> 
</template>
<script>
export default {
    props: {
        title:String,
        src:String,
    }
}
</script>
<style>
@media (max-width:899px) {
    .content-only-img h2 {
        text-align: center;
        font-size: 20px;
        color: #7187ac;
        margin: 20px;
        line-height: 30px;
    }
    .content-only-img img {
        width: 90vw;
        margin:0 5vw;
    }
}
</style>
