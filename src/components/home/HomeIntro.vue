<template>
  <section class="intro columns is-vcentered">
    <div class="column">
      <p>Olá mundo! Sou</p>
      <h2 class="title is-1">Maurício Cardoso</h2>
      <p>
        Um programador web focado no desenvolvimento front-end, com
        conhecimentos de back-end. Formado em
        <span class="highlight">Engenharia da Computação</span>
      </p>
    </div>

    <div class="column">
      <figure class="image">
        <img src="@/assets/img/developer.svg" />
      </figure>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeIntro",
});
</script>

<style scoped>
.intro {
  margin: 2rem 0 10rem 0;
}
.column {
  padding: 0.75rem 0;
}

.title {
  color: var(--title);
}

.highlight {
  color: var(--link);
}

.image {
  margin: auto;
  width: 65%;
}

@media screen and (max-width: 768px) {
  .intro {
    margin: 0 0 3rem 0;
  }
}
</style>
