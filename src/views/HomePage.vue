<template>
  <HomeIntro />
  <HomeAbout />
  <HomeSkills />
  <HomeContact />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeIntro from "@/components/home/HomeIntro.vue";
import HomeAbout from "../components/home/HomeAbout.vue";
import HomeSkills from "../components/home/HomeSkills.vue";
import HomeContact from "../components/home/HomeContact.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    HomeIntro,
    HomeAbout,
    HomeSkills,
    HomeContact,
  },
});
</script>
