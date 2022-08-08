<template>
  <header>
    <nav
      class="navbar is-fixed-top is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="link navbar-item">
            <span class="brand icon-text">
              <span class="icon">
                <i class="fa-solid fa-laptop-code"></i>
              </span>
              <span>Maurício Cardoso</span>
            </span>
          </router-link>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="HamburgMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="HamburgMenu" class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/" class="link navbar-item">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-home"></i>
                </span>
                <span>Home</span>
              </span>
            </router-link>

            <router-link to="/project" class="link navbar-item">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa-solid fa-folder-open"></i>
                </span>
                <span>Projetos</span>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarHeader",
});

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle("is-active");
      $target?.classList.toggle("is-active");
    });
  });
});
</script>

<style scoped>
.navbar {
  background: transparent;
  backdrop-filter: blur(35px);
  box-shadow: 0 0 10px 1px var(--title);
}

.brand.icon-text {
  color: var(--title);
}

.navbar-item,
.navbar-burger {
  color: var(--link);
}
.navbar-item:hover,
.navbar-burger:hover {
  color: var(--title);
}

@media screen and (max-width: 1023px) {
  .container {
    padding: 0 1rem;
  }
}

@media screen and (max-width: 320px) {
  .container {
    padding: 0;
  }
}
</style>
