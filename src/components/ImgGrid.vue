<template>
    <div class="col-12 mt-md-5 support-images">
        <div v-for="imgSrc in images" :key="imgSrc" :class="imgDivClass">
            <img :src="imgSrc" alt="support-logo">
        </div>
    </div>
</template>

<script>
export default {
    props: ['imgDivClass', 'images'],
}
</script>

<style scoped>

</style>