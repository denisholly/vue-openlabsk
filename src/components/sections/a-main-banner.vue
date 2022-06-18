<template>
    <z-site-section id="mainBanner" class="bg-primary position-relative mb-4 mb-md-5" rowClass="main-row">
        <z-jumbotron />
        <template #outOfContainer>
            <div class="letterO overflow-hidden">
                <img src="@/assets/images/o_letter.png" alt="letter" class="d-none d-md-block position-absolute">
            </div>
        </template>
    </z-site-section>
</template>

<script>
import ZJumbotron from '@/components/z-jumbotron.vue'
export default {
    components: {
        ZJumbotron
    }
}
</script>

<style scoped>
.letterO img {
    width: 482px;
    right: -241px;
    bottom: -241px;
    z-index: 0;
}


@media only screen and (max-width: 1199px) {
    .letterO img {
        width: 241px;
        right: -120.5px;
        bottom: -120.5px;
    }
}
</style>