<template>
  <section class="skills content">
    <h2 class="title">Skills</h2>
    <div class="columns is-multiline is-mobile is-centered">
      <div class="column vue">
        <i class="fa-brands fa-vuejs fa-3x"></i>
        <p>Vue</p>
      </div>
      <div class="column laravel">
        <i class="fa-brands fa-laravel fa-3x"></i>
        <p>Laravel</p>
      </div>
      <div class="column mysql">
        <i class="fa-solid fa-database fa-3x"></i>
        <p>MySQL</p>
      </div>
      <div class="column javascript">
        <i class="fa-brands fa-js fa-3x"></i>
        <p>JavaScript</p>
      </div>
      <div class="column php">
        <i class="fa-brands fa-php fa-3x"></i>
        <p>PHP</p>
      </div>
      <div class="column html">
        <i class="fa-brands fa-html5 fa-3x"></i>
        <p>HTML</p>
      </div>
      <div class="column css">
        <i class="fa-brands fa-css3-alt fa-3x"></i>
        <p>CSS</p>
      </div>
      <div class="column git">
        <i class="fa-brands fa-git-alt fa-3x"></i>
        <p>Git</p>
      </div>
      <div class="column github">
        <i class="fa-brands fa-github fa-3x"></i>
        <p>GitHub</p>
      </div>
      <div class="column postman">
        <img src="../../assets/img/postman.svg" />
        <p>Postman</p>
      </div>
      <div class="column bootstrap">
        <i class="fa-brands fa-bootstrap fa-3x"></i>
        <p>Bootstrap</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeSkills",
});
</script>

<style scoped>
.skills {
  text-align: center;
  margin-bottom: 10rem;
  color: #cacaca;
}

.title {
  color: var(--title);
  margin-bottom: 3rem;
}

.column {
  background-color: var(--bg-alt);

  box-sizing: border-box;
  box-shadow: 0 0 10px -4px #000000;
  margin: 0.5rem;
  border-radius: 5px;
  min-width: 8rem;
  max-width: 8rem;
  transition: 0.25s;
}

.column:hover {
  box-shadow: 0 0 5px 1px var(--title);
}

.vue:hover {
  color: #42b883;
}

.laravel:hover,
.html:hover,
.git:hover {
  color: #ff2d20;
}

.mysql:hover,
.php:hover,
.css:hover {
  color: #34aadc;
}

.javascript:hover {
  color: #fcdc00;
}

.github:hover {
  color: #000000;
}

.postman:hover {
  color: #ff6c37;
}

.bootstrap:hover {
  color: #814db3;
}

@media screen and (max-width: 359px) {
  .column {
    font-size: 1rem;
    min-width: 6rem;
    max-width: 6rem;
  }
}

@media screen and (max-width: 768px) {
  .skills {
    margin: 0 0 4rem 0;
  }
}
</style>
