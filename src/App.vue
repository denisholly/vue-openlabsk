<template>
  <the-header />
  <the-navbar />
  
  <router-view />

  <the-footer />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheNavbar,
    TheFooter
  }
}
</script>

<style>
html, body {
  overflow-x: hidden;
}
</style>
