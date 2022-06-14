<template>
  <a-header />
  <a-navbar />
  
  <router-view />

  <a-footer />
</template>

<script>
import AHeader from './components/a-header.vue'
import ANavbar from './components/a-navbar.vue'
import AFooter from './components/a-footer.vue'
export default {
  name: 'App',
  components: {
    AHeader,
    ANavbar,
    AFooter
  }
}
</script>

<style>
html, body {
  overflow-x: hidden;
}

.text-gray {
    color: #566b8d !important;
}
</style>
