<template>
    <div class="main-text col-lg-5 my-md-5 py-5 d-flex align-items-end">
        <div>
            <h1 class="text-white mb-4 fw-light">
                {{ data.title }}
            <br>
            <span class="fw-bold">
                {{ data.boldTitle }}
            </span>
            </h1>
            <p class="text-white">
                {{ data.text }}
            </p>
        </div> 
    </div>
    <div class="main-image-sm d-block d-lg-none">
        <img :src="data.img" alt="main-home" class="img-fluid d-block d-lg-none">
    </div>
    <div class="main-image col-lg-7 d-none d-lg-block">
        <img :src="data.img" alt="main-home" class="img-fluid d-none d-lg-block">
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                title: 'Inštitút stredoškolského odborného vzdelávania',
                boldTitle: 'zameraný na IT & AI',
                text: 'Realizujeme odborné vzdelávanie zamerané na IT pre štátne školy ako nový štandard formálneho vzdelávania',
                img: require('@/assets/images/main-home.png')
            }
        }
    }
}
</script>

<style scoped>
.main-text {
    z-index: 2;
}


.main-image {
    z-index: 1;
    position: relative;
    text-align: center;
}

.main-image img {
    position: absolute;
    left: 20%;
    bottom: 0;
    min-width: 496px;
    max-width: 65%;
}

@media only screen and (max-width: 767px) {
    .main-image-sm {
        position: relative;
        text-align: center;
        opacity: 0.2;
    }
    
    .main-image-sm img {
        position: absolute;
        bottom: 0;
        width: 484px;
        max-width: 100%;
        left: 0;
    }
}
</style>