<template>
    <z-site-section id="join" class="py-4 py-md-5 position-relative" containerClass="pt-4 pt-md-5" rowClass="align-items-center justify-content-center">
        <div class="col-12 mb-3 text-center">
            <h2 class="fw-light mb-5 display-6">
            Pridajte sa k nám
            <br>
            <span class="fw-bold">
                My všetci sme OpenLab…
            </span>
            </h2>
        </div>
        <z-default-card 
            class="col-12 d-flex flex-nowrap overflow-scroll card-group justify-content-xl-center card-wrapper"
            cardStyle="card-join border-0 mx-2 my-3 arrow-icon-change card-shadow"
            cardBodyStyle="px-4 pt-4 pb-5 mt-2"
            textStyle="labs-card-text"   
        />
        <template v-slot:outOfContainer>
            <a-join-carousel />
            <div class="join-letterO overflow-hidden">
                <img src="@/assets/images/o_letter.png" alt="main-home" class="d-none d-md-block position-absolute">
            </div>
        </template>
    </z-site-section>
</template>

<script>
import ZDefaultCard from '@/components/cards/z-default-card.vue'
import AJoinCarousel from '@/components/a-join-carousel.vue'
export default {
    components: {
        ZDefaultCard,
        AJoinCarousel
    }
}
</script>

<style scoped>
.join-letterO img {
    width: 482px;
    right: -241px;
    bottom: -241px;
    z-index: 0;
}

@media only screen and (max-width: 1199px) {
    .join-letterO img {
        width: 241px;
        right: -120.5px;
        bottom: -120.5px;
    }
}
</style>