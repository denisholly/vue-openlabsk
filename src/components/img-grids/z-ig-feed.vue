<template>
    <img :src="photos[0]" alt="ig-photo" class="ig-img img-fluid col-4 col-md-3 col-lg-2 p-0">
    <img :src="photos[1]" alt="ig-photo" class="ig-img img-fluid col-4 col-md-3 col-lg-2 p-0">
    <img :src="photos[2]" alt="ig-photo" class="ig-img img-fluid col-4 col-md-3 col-lg-2 p-0">
    <img :src="photos[3]" alt="ig-photo" class="ig-img img-fluid col-md-3 col-lg-2 p-0 d-none d-md-block">
    <img :src="photos[4]" alt="ig-photo" class="ig-img img-fluid col-md-3 col-lg-2 p-0 d-none d-lg-block">
    <img :src="photos[5]" alt="ig-photo" class="ig-img img-fluid col-md-3 col-lg-2 p-0 d-none d-lg-block">
</template>

<script>
export default {
    data() {
        return {
            photos: [
                require('@/assets/images/grishi-ig.jpg'),
                require('@/assets/images/grishi-ig.jpg'),
                require('@/assets/images/grishi-ig.jpg'),
                require('@/assets/images/grishi-ig.jpg'),
                require('@/assets/images/grishi-ig.jpg'),
                require('@/assets/images/grishi-ig.jpg'),
            ]
        }
    }
}
</script>