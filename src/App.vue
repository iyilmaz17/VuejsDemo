<template>
  <div>
    <Navbar />
    <router-view />
    <!-- Sayfaların içeriği burada render edilir -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style scoped>
/* Stil tanımlamaları burada */
</style>
