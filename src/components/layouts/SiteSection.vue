<template>
    <section>
        <div class="container" :class="containerClass">
            <div class="row" :class="rowClass">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['containerClass', 'rowClass']
}
</script>