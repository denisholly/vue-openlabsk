<template>
    <section>
        <div class="container" :class="containerClass">
            <div :class="rowClass" class="row">
                <slot></slot>
            </div>
        </div>
        <slot name="outOfContainer" />
    </section>
</template>

<script>
export default {
    props: ['containerClass', 'rowClass']
}
</script>

<style>
.main-row {
    min-height: 430px;
    display: flex;
}

#see-projects .border-bottom {
    border-color: #d7eaff !important;
}

#special .border-bottom {
    border-color: #d7eaff !important;
}

.bg-primary {
    background-color: #3597FF !important;
}

.btn-primary {
    background-color: #3597FF;
    border-radius: 6px;
    font-size: 14px;
    padding: 12px 20px;
}

.btn-lg {
    padding: 18px 50px;
    font-weight: bold;
}

.btn-lg:hover {
    background-color: #3597FF;
}
</style>