<template>
    <img v-for="imgSrc in whoIsBehindLogos" :key="imgSrc" :src="imgSrc" alt="logo" class="img-fluid my-3 me-md-5">
</template>

<script>
export default {
    data() {
        return {
            whoIsBehindLogos: [
                require('@/assets/images/wezeo.svg'), 
                require('@/assets/images/power.svg'),
                require('@/assets/images/siemens.svg'),
                require('@/assets/images/spsit.svg'),
                require('@/assets/images/spse.svg'),
                require('@/assets/images/hemisfera.svg')
            ],
        }
    }
}
</script>