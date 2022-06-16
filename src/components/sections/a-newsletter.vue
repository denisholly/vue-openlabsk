<template>
    <z-site-section id="newsletter" class="py-4 py-md-5" containerClass="newsletter rounded px-3 px-lg-5 mb-5 py-5 py-md-3 p-lg-5" rowClass="align-items-center">
        <z-newsletter />
    </z-site-section>
</template>

<script>
import ZNewsletter from '@/components/z-newsletter.vue'
export default {
    components: {
        ZNewsletter
    }
}
</script>