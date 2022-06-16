<template>
    <z-site-section id="know-us" class="pb-4 pb-md-5" containerClass="py-4">
        <div class="text-center col-12">
            <h2 class="mb-5 display-6">
                <span class="fw-bold">
                    Spoznaj nás
                </span>
            </h2>
        </div>
        <z-know-us-card />
    </z-site-section>
</template>

<script>
import ZKnowUsCard from '@/components/cards/z-know-us-card.vue'
export default {
    components: {
        ZKnowUsCard
    }
}
</script>