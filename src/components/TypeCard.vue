<template>
        <img :src="imgSrc" alt="special" class="my-3">
        <h5 class="fw-bold mb-4"> {{ title }} </h5>
        <p class="text-gray"> {{ text }} </p>
</template>

<script>
export default {
    props: ['title', 'text', 'imgSrc']
}
</script>

