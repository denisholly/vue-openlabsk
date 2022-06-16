<template>
    <z-site-section id="labs" class="py-4 py-md-5" containerClass="py-4" rowClass="align-items-center">
        <div class="col-lg-4">
            <h2 class="fw-light mb-5 display-6">
                V akých laboch
                <br>
                <span class="fw-bold">
                    možeš študovať?
                </span>
            </h2>
        </div>
        <z-default-card 
            class="col-lg-8 d-block d-sm-flex"
            cardStyle="col-sm-4 border-0 card-shadow mb-2 me-sm-2 arrow-icon-change"
            cardBodyStyle="px-4 pt-4 pb-5 px-xl-5"
            textStyle="labs-card-text"
            data="labsCards"
        />
    </z-site-section>
</template>

<script>
import ZDefaultCard from '@/components/cards/z-default-card.vue'
export default {
    components: {
        ZDefaultCard
    }
}
</script>