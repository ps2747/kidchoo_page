<template>
   <div class="content-text-and-img">
       <h2 v-html="title"></h2>
       <img :src="src" alt="">
       <p v-html="text"></p>
    </div> 
</template>
<script>
export default {
    props: {
        title: String,
        text: String,
        src: String,
    }
}

</script>
<style>
@media (max-width:899px) {
    .content-text-and-img h2,.content-text-and-img p {
        text-align: center;
    }
    .content-text-and-img h2 {
        font-size: 20px;
        color: #7187ac;
        margin: 20px;
        line-height: 30px;
    }
    .content-text-and-img p {
        font-size: 12px;
        color: gray;
    }
    .content-text-and-img img {
        width: 100vw;
        margin-bottom: 20px;
    }
}
</style>
