<template>
    <div class="col-12 mt-md-5 support-images">
        <div v-for="imgSrc in images" :key="imgSrc" :class="imgDivClass" class="div-size">
            <img :src="imgSrc" alt="support-logo">
        </div>
    </div>
</template>

<script>
export default {
    props: ['imgDivClass'],
    data() {
        return {
            images: [
                require('@/assets/images/support1.svg'),
                require('@/assets/images/support2.svg'),
                require('@/assets/images/support3.svg'),
                require('@/assets/images/support4.svg'),
                require('@/assets/images/support5.svg'),
                require('@/assets/images/support6.svg'),
                require('@/assets/images/support7.svg'),
                require('@/assets/images/support8.svg'),
                require('@/assets/images/support9.svg'),
                require('@/assets/images/support10.svg')
            ]
        }
    }
}
</script>

<style>
.support-images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.div-size {
    width: 171.2px;
}


@media only screen and (max-width: 991px) {
    .div-size {
        width: 123.2px;
    }

    .div-size img {
        max-width: 123.2px;
    }
}

@media only screen and (max-width: 767px) {
    .support-images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .div-size {
        width: 171.2px;
    }

    .div-size img {
        max-width: none;
    }
}
</style>