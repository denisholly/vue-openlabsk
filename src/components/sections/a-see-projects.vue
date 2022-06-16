<template>
    <z-site-section id="see-projects" class="py-4 py-md-5 z-index-1" containerClass="py-4 py-md-5 border-bottom" rowClass="justify-content-center">
        <div class="text-center col-12 mb-5 z-index-1">
            <h2 class="fw-light mb-5 display-6">
                Pozrite si
                <span class="fw-bold">
                    študentské projekty
                </span>
            </h2>
            <p class="text-gray mb-md-5">
                Stredoškoláci v OpenLaboch pracujú na reálnych projektoch v spolupráci s firmami 
                pričom získavajú praktické zručnosti a osvojujú si prístup, 
                ktorým neskôr posunú svet technológií a celú spoločnosť vpred.
            </p>
        </div>
        <a-projects-carousel />
    </z-site-section>
</template>

<script>
import AProjectsCarousel from '@/components/a-projects-carousel.vue'
export default {
    components: {
        AProjectsCarousel
    }
}
</script>