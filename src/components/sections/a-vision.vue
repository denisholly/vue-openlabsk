<template>
    <z-site-section id="vision" class="py-4 py-md-5" containerClass="py-4" rowClass="align-items-center">
        <div class="col-lg-5 col-xl-6">
            <h2 class="fw-light mb-5 display-6">
            Naša vízia
            <span class="fw-bold">
                v OpenLabe
            </span>
            </h2>
            <p class="text-gray mb-4">
            Veríme, že otvorený prístup a kvalitné vzdelanie sú základom úspechu jednotlivca ako aj prosperujúcej spoločnosti.
            </p>
            <p class="text-gray">
            Uvedomujeme si, že ak chceme niečo zmeniť, musíme ísť príkladom. Našim cieľom je rozšíriť 
            princípy OpenLab-u na všetkých úrovniach škôl a nastaviť svetový štandard vzdelávania v školstve v technológiách.
            </p>
        </div>
        <a-vision-boxes />
    </z-site-section>
</template>

<script>
import AVisionBoxes from '@/components/a-vision-boxes.vue'
export default {
    components: {
        AVisionBoxes,
    }
}
</script>