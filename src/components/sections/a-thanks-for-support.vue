<template>
    <z-site-section id="thanks-for-support" class="py-4 py-md-5" containerClass="py-4" rowClass="justify-content-center">
        <div class="col-12 text-center">
            <h2 class="mb-5 display-6">
            Ďakujeme za 
            <span class="fw-bold">
                podporu v roku 2021!
            </span>
            </h2>
        </div>
        <z-img-grid class="col-12 mt-md-5 support-images" imgDivClass="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0" />
    </z-site-section>
</template>

<script>
import ZImgGrid from '@/components/img-grids/z-img-grid.vue'
export default {
    components: {
        ZImgGrid
    }
}
</script>