<template>
    <div class="col-lg-7 col-xl-6 d-flex flex-column align-items-center justify-content-center justify-content-lg-end">
        <div class="boxes row d-flex justify-content-space-between">
            <div class="box col-6 text-center m-2 d-flex flex-column text-end align-items-end justify-content-end fw-bold" :style="visionBoxes[0].colors">
                <p class="box-number lh-1"> {{ visionBoxes[0].count }} </p>
                <p part="box-text"> {{ visionBoxes[0].title }} </p>
            </div>
            <div class="box col-6 text-center m-2 d-flex flex-column text-end align-items-end justify-content-end fw-bold" :style="visionBoxes[1].colors">
                <p class="box-number lh-1"> {{ visionBoxes[1].count }} </p>
                <p part="box-text"> {{ visionBoxes[1].title }} </p>
            </div>
        </div>
        <div class="boxes row d-flex justify-content-space-between">
            <div class="box col-6 text-center m-2 d-flex flex-column text-end align-items-end justify-content-end fw-bold" :style="visionBoxes[2].colors">
                <p class="box-number lh-1"> {{ visionBoxes[2].count }} </p>
                <p part="box-text"> {{ visionBoxes[1].title }} </p>
            </div>
            <div class="box col-6 text-center m-2 d-flex flex-column text-end align-items-end justify-content-end fw-bold" :style="visionBoxes[3].colors">
                <p class="box-number lh-1"> {{ visionBoxes[3].count }} </p>
                <p part="box-text"> {{ visionBoxes[3].title }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visionBoxes: [
                { title: 'tried', count: '11', colors: 'background: rgba(221, 236, 251, 0.4); color: #5b94d7;' },
                { title: 'študentov', count: '222', colors: 'background: rgba(156, 238, 204, 0.4); color: #5cc19a;' },
                { title: 'labmastrov', count: '14', colors: 'background: rgba(238, 226, 156, 0.4); color: #dbca68;' },
                { title: 'školy', count: '2', colors: 'background: rgba(238, 156, 156, 0.4); color: #b95e73;' }
            ],
        }
    }
}
</script>

<style scoped>
.boxes {
    flex-wrap: wrap;
}

.box {
    border-radius: 4px;
    width: 233px;
    height: 183px;
    flex: 1 1 0;
    padding: 16px 24px;
}

.box p {
    margin: 0;
}

.box-number {
    font-size: 90px;
}

.box-text {
    font-size: 18px;
}
@media only screen and (max-width: 767px) {
    .box {
        border-radius: 4px;
        max-width: 250px;
        /* width: 250px; */
        height: 120px;
    }
    
    .box-number {
        font-size: 50px;
    }
    
    .box-text {
        font-size: 14px;
    }

    .join-card-group {
        overflow-x: auto;
    }
}
</style>