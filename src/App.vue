<template>
  <the-header></the-header>
  <the-navbar></the-navbar>
  
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheNavbar from "./components/TheNavbar.vue";
export default {
  name: 'App',
  components: {
    TheHeader,
    TheNavbar,
  }
}
</script>

<style>
  html {
    overflow-x: hidden;
  }
</style>
