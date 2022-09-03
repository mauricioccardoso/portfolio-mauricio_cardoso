<template>
  <header>
    <nav
      class="navbar is-fixed-top is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <router-link
            :to="{ name: 'Home' }"
            class="link navbar-item"
            @click="hideMenu"
          >
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
            @click="showMenu"
            :class="{ 'is-active': HamburgActive }"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="HamburgMenu"
          class="navbar-menu"
          :class="{ 'is-active': HamburgActive }"
        >
          <div class="navbar-end">
            <router-link
              :to="{ name: 'Home' }"
              class="link navbar-item"
              @click="hideMenu"
            >
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-home"></i>
                </span>
                <span>Home</span>
              </span>
            </router-link>

            <router-link
              :to="{ name: 'Projects' }"
              class="link navbar-item"
              @click="hideMenu"
            >
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
  data() {
    return {
      HamburgActive: false,
    };
  },
  methods: {
    showMenu() {
      this.HamburgActive = !this.HamburgActive;
    },
    hideMenu() {
      this.HamburgActive = false;
    },
  },
});
</script>

<style scoped>
.navbar {
  background: transparent;
  backdrop-filter: blur(35px);
  box-shadow: 0 0 10px -5px var(--title);
}

.brand.icon-text {
  color: var(--title);
}

.navbar-menu {
  background-color: transparent;
}

.navbar-item,
.navbar-burger {
  color: var(--link);
  transition: 0.25s;
}

.navbar-item:hover,
.navbar-burger:hover {
  background-color: #ffffff23;
  color: var(--title);
}

.router-link-active:link {
  color: var(--title);
  background-color: transparent;
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
