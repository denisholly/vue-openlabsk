<template>
    <a-main-banner />
    <a-why />
    <a-vision />
    <a-labs />
    <a-schools />
    <a-study-it />
    <a-join />
    <a-see-projects />
    <a-special />
    <a-know-us />
    <a-support-us />
    <a-who-is-behind />
    <a-ig />
    <a-modern-school />
    <a-thanks-for-support />
    <a-newsletter />
</template>

<script>
import AMainBanner from '@/components/sections/a-main-banner.vue'
import AWhy from '@/components/sections/a-why.vue'
import AVision from '@/components/sections/a-vision.vue'
import ALabs from '@/components/sections/a-labs.vue'
import ASchools from '@/components/sections/a-schools.vue'
import AStudyIt from '@/components/sections/a-study-it.vue'
import AJoin from '@/components/sections/a-join.vue'
import ASeeProjects from '@/components/sections/a-see-projects.vue'
import ASpecial from '@/components/sections/a-special.vue'
import AKnowUs from '@/components/sections/a-know-us.vue'
import ASupportUs from '@/components/sections/a-support-us.vue'
import AWhoIsBehind from '@/components/sections/a-who-is-behind.vue'
import AIg from '@/components/sections/a-ig.vue'
import AModernSchool from '@/components/sections/a-modern-school.vue'
import AThanksForSupport from '@/components/sections/a-thanks-for-support.vue'
import ANewsletter from '@/components/sections/a-newsletter.vue'

export default {
    components: {
        AMainBanner,
        AWhy,
        AVision,
        ALabs,
        ASchools,
        AStudyIt,
        AJoin,
        ASeeProjects,
        ASpecial,
        AKnowUs,
        ASupportUs,
        AWhoIsBehind,
        AIg,
        AModernSchool,
        AThanksForSupport,
        ANewsletter,
    }
}
</script>

<style scoped>
.z-index-1 {
    z-index: 1;
}

#studyIt {
    background-color: #f3f9ff;
}

.it-count {
    z-index: 0;
    color: rgba(209, 220, 231, 0.3);
    font-size: 62px;
    bottom: 0;
}

.text-gray {
    color: #566b8d !important;
}

.btn-primary {
    background-color: #3597FF;
    border-radius: 6px;
    font-size: 14px;
    padding: 12px 20px;
}
</style>