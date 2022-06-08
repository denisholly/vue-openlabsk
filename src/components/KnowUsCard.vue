<template>
    <div>
        <div class="card border-0">
            <img :src="imgSrc" alt="person" class="card-img-top rounded">
            <div class="card-body px-0 pt-3">
                <h6 class="know-card-subtitle text-gray card-subtitle mb-2">{{ role }}</h6>
                <h5 class="card-title mb-0 mt-3 text-black">{{ title }}</h5>
                <p class="text-gray card-text">{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'desc', 'role', 'imgSrc']
}
</script>