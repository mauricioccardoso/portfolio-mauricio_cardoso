<template>
  <section>
    <div>
      <h1 class="wip">WIP</h1>
      <p class="wipParag">(Work in progress)</p>
      <i class="fa-solid fa-gear"></i>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectPage",
});
</script>

<style scoped>
section {
  min-height: 300px;
  height: calc(100vh - 196px);
}
div {
  text-align: center;
  font-size: 80px;

  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.wip {
  background: -webkit-linear-gradient(var(--tertiary-color), var(--link));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.wipParag {
  font-size: 10px;
}

i {
  color: var(--link);
  width: 80px;
  height: 80px;
  animation-name: slidein;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes slidein {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
