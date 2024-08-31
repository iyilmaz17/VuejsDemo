<template>
  <nav v-if="!isHomePage" class="breadcrumb">
    <span v-for="(crumb, index) in breadcrumbs" :key="index">
      <router-link :to="crumb.path">{{ crumb.name }}</router-link>
      <span v-if="index < breadcrumbs.length - 1"> &gt; </span>
    </span>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { Breadcrumb } from "@/types/BreadcrumbModel";
import "@/styles/css/Breadcrumb.css";

export default defineComponent({
  name: "AppBreadcrumb",
  setup() {
    const route = useRoute();

    // Compute whether the current route is the home page
    const isHomePage = computed(() => route.path === "/");

    // Compute breadcrumb data
    const breadcrumbs = computed<Breadcrumb[]>(() => {
      // Get the path segments and exclude the leading empty segment
      const pathArray = route.path.split("/").filter((p) => p);

      // Generate breadcrumb objects
      const breadcrumbArray = pathArray.map((path, index) => {
        const fullPath = `/${pathArray.slice(0, index + 1).join("/")}`;
        return {
          name: capitalize(path),
          path: fullPath,
        };
      });

      // Add "Home" as the first item in the breadcrumb trail
      return [{ name: "Home", path: "/" }, ...breadcrumbArray];
    });

    // Helper function to capitalize the first letter
    function capitalize(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return {
      breadcrumbs,
      isHomePage,
    };
  },
});
</script>
