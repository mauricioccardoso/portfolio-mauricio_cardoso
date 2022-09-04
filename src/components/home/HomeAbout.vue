<template>
  <section class="about content">
    <h2 class="title">Sobre mim</h2>
    <p>
      Tenho 25 anos e moro em Manaus/Am. Sou formado na área tecnológica, com
      grande interesse na criação e desenvolvimento de produtos e aplicações
      para a web. Atualmente busco uma oportunidade na área de desenvolvimento e
      aprimorar minhas habilidades em programação.
    </p>
    <p>
      Desenvolvedor web jr, utilizando as tecnologias
      <span class="highlight">Vue.js, JavaScript, Laravel, PHP e MySql.</span>
      Construindo
      <span class="highlight">SPA’s responsivas no Front-End</span> com
      integração a <span class="highlight">API’s RESTful no Back-End.</span>
    </p>
    <p>
      Estudando para me tornar um desenvolvedor
      <span class="highlight">
        Full-Stack.
        <i class="fa-solid fa-face-laugh-beam"></i>
      </span>
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

.title,
.highlight {
  color: var(--title);
}

@media screen and (max-width: 768px) {
  .about {
    margin: 0 0 4rem 0;
  }
}
</style>
