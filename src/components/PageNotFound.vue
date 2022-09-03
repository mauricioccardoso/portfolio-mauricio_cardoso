<template>
  <section>
    <div class="error">
      <h1>404</h1>
      <p>Esta página não existe</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNotFound",
});
</script>

<style scoped>
section {
  min-height: 300px;
  height: calc(100vh - 196px);
}
div {
  text-align: center;
  font-size: 50px;

  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.error {
  background: -webkit-linear-gradient(var(--tertiary-color), var(--link));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
