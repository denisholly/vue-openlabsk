<template>
    <section>
        <div class="container" :class="containerClass">
            <div :class="rowClass" class="row">
                <slot></slot>
            </div>
        </div>
        <slot name="outOfContainer"></slot>
    </section>
</template>

<script>
export default {
    props: ['containerClass', 'rowClass']
}
</script>

<style scoped>
.main-row {
    min-height: 430px;
    display: flex;
}
</style>