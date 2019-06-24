<template>
    <div class="first-pic">
        <img :src="src" alt="">
    </div>
</template>
<script>
export default {
    props: {
        src:String,
    }
}
</script>
<style>
@media (max-width:899px) {
    .first-pic img {
        width: 100vw;
    }
}
</style>
