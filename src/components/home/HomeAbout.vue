<template>
  <section class="about content">
    <h2 class="title">Sobre mim</h2>
    <p>
      Tenho 25 anos e moro em Manaus/Am. Sou formado na área tecnológica, com
      grande interesse em criar e desenvolver produtos e ferramentas para a web
      e atualmente estou buscando aprimorar minhas habilidades em programação.
    </p>
    <p>
      Desenvolvedor web jr, focado em
      <span class="highlight">Front-End utilizando Vue.js</span>. Com
      conhecimento em <span class="highlight">Back-End</span> nas ferramentas:
      <span class="highlight">Laravel, PHP e MySQL</span>
    </p>
    <p>
      Estudando para me tornar um desenvolvedor
      <span class="highlight">Full-Stack</span>
    </p>

    <p>
      Quando não estou "codando", gosto de jogar com amigos, assistir séries e
      ouvir musica. E dormi também.
      <i class="fa-solid fa-face-laugh-squint"></i>
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeAbout",
});
</script>

<style scoped>
.about {
  margin-bottom: 10rem;
}

.title {
  color: var(--title);
}

.highlight {
  color: var(--link);
}

@media screen and (max-width: 768px) {
  .about {
    margin: 0 0 4rem 0;
  }
}
</style>
