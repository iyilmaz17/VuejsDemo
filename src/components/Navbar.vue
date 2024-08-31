<template>
  <div>
    <div class="countdown-bar">
      Ships out TODAY if you order in:
      <span class="countdown-timer">{{ timeLeft }}</span>
      <span class="close-icon" @click="closeBar">&times;</span>
    </div>
    <div v-show="showMessageBar" class="message-bar">
      BEST PRICE DTF TRANSFERS & SUPPLIES IN USA - SAME DAY-NEXT DAY SHIPPING -
      Free shipping on Transfers over $99
      <span class="close-icon" @click="closeMessageBar">&times;</span>
    </div>
    <nav class="navbar">
      <div class="navbar-content">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <div class="nav-icons">
          <img src="@/assets/login-icon.png" alt="Login" class="nav-icon" />
          <img src="@/assets/cart-icon.png" alt="Cart" class="nav-icon" />
        </div>
      </div>
    </nav>
  </div>
  <div>
    <AppBreadcrumb />
  </div>
</template>

<script lang="ts">
import AppBreadcrumb from "@/components/Breadcrumb.vue";
import "@/styles/css/Navbar.css";
import { useNavbar } from "@/composables/Navbar";

export default {
  name: "MyNavbar",
  components: {
    AppBreadcrumb,
  },
  setup() {
    const { timeLeft, showMessageBar, closeBar, closeMessageBar } = useNavbar();
    return {
      timeLeft,
      showMessageBar,
      closeBar,
      closeMessageBar,
    };
  },
};
</script>
