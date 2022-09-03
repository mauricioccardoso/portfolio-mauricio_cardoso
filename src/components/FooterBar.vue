<template>
  <footer class="footer container">
    <div class="columns is-vcentered">
      <div class="column is-one-third footer-item">
        <p>
          Designed and Developed by
          <a
            class="link"
            href="https://www.linkedin.com/in/mauricioccardoso/"
            target="_blank"
          >
            Maurício Cardoso
          </a>
        </p>
        <a class="credits" href="https://storyset.com/work" target="_blank"
          >Work illustrations by Storyset</a
        >
      </div>

      <div class="column is-one-third footer-item">
        <p>
          Built with
          <span class="link">Vue.js</span> e
          <span class="link">Bulma</span>
        </p>
      </div>

      <div class="column is-one-third footer-item">
        <ul class="icon-list is-flex is-justify-content-center">
          <li class="icon-item">
            <a
              href="https://www.linkedin.com/in/mauricioccardoso/"
              target="_blank"
            >
              <span class="icon">
                <i class="fa-brands fa-linkedin-in"></i>
              </span>
            </a>
          </li>
          <li class="icon-item">
            <a href="https://github.com/mauricioccardoso" target="_blank">
              <span class="icon">
                <i class="fa-brands fa-github"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterBar",
});
</script>

<style scoped>
.footer {
  font-size: 1rem;
  background-color: inherit;
  padding: 1rem;
  text-align: center;
}

.link {
  color: var(--link);
}

.icon-item {
  margin: 0 0.5rem;
}

.icon {
  color: var(--font);
}

.icon:hover {
  color: var(--link);
}

.credits {
  font-size: 8px;
}

.credits {
  color: gray;
  cursor: default;
}

@media screen and (max-width: 768px) {
  .footer-item {
    padding: 0.375rem;
  }
}
</style>
