<template>
  <section class="contact content">
    <h2 class="title">Contato</h2>

    <span class="linkedin icon-text">
      <a href="https://www.linkedin.com/in/mauricioccardoso/" target="_blank">
        <span class="icon">
          <i class="fa-brands fa-linkedin"></i>
        </span>
        <span>LinkedIn</span>
      </a>
    </span>
    <span class="icon-text">
      <a href="https://github.com/mauricioccardoso" target="_blank">
        <span class="icon">
          <i class="fa-brands fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
    </span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeContact",
});
</script>

<style scoped>
.contact {
  text-align: center;
  margin-bottom: 15rem;
}
.title {
  color: var(--title);
  margin-bottom: 3rem;
}

.linkedin {
  margin: 0 2rem;
}

.icon-text a {
  padding: 1rem;
  font-size: 2rem;
  color: var(--font);
  transition: 0.25s;
}

.icon-text a:hover {
  background-color: var(--link);
  border-radius: 5px;
  box-shadow: 0 0 10px -10px #000000;
}

@media screen and (max-width: 768px) {
  .title {
    margin-bottom: 1.5rem;
  }
  .contact {
    margin: 0 0 2rem 0;
  }
  .icon-text a {
    margin-bottom: 0.5rem;
    padding: 0.75rem;
    font-size: 1.25rem;
  }
}
</style>
