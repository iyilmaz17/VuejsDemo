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

export default defineComponent({
  name: "AppBreadcrumb",
  setup() {
    const route = useRoute();

    // Compute whether the current route is the home page
    const isHomePage = computed(() => route.path === "/");

    // Compute breadcrumb data
    const breadcrumbs = computed(() => {
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

<style scoped>
.breadcrumb {
  font-size: 16px;
  color: #333;
  display: flex;
  align-items: center;
}

.breadcrumb a {
  text-decoration: none;
  color: #000000;
  font-weight: 500;
}

.breadcrumb a:hover {
  text-decoration: underline;
  color: #000000; /* Darker shade for hover effect */
}

.breadcrumb span {
  color: #666;
  margin: 0 0.25rem;
}

.breadcrumb span:not(:last-child)::after {
  color: #999;
}
</style>
