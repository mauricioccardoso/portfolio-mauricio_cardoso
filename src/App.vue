<script setup lang="ts">
// import { RouterLink, RouterView } from "vue-router";

import NavbarHeader from "./components/NavbarHeader.vue";
import FooterBar from "./components/FooterBar.vue";
</script>
<template>
  <NavbarHeader />
  <main class="container">
    <router-view></router-view>
  </main>
  <FooterBar />
</template>

<style>
main.container {
  padding: 2rem 3rem;
}

@media screen and (max-width: 320px) {
  main.container {
    padding: 2rem 1rem;
    text-align: justify;
  }
}
</style>
