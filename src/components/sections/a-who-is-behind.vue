<template>
    <z-site-section id="who-is-behind" class="py-4 py-md-5" containerClass="py-4" rowClass="align-items-center">
        <div class="col-lg-5 col-xl-4 mb-5 mb-lg-0">
            <h2 class="fw-light display-6">
                Kto stojí
                <br>
                <span class="fw-bold">
                    za Openlabom?
                </span>
            </h2>
        </div>
        <div class="col-lg-7 col-xl-8 d-flex flex-wrap justify-content-around position-relative">
            <z-img-grid-sm />
        </div>
    </z-site-section>
</template>

<script>
import ZImgGridSm from '@/components/img-grids/z-img-grid-sm.vue'
export default {
    components: {
        ZImgGridSm
    }
}
</script>