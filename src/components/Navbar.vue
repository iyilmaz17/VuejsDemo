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
</template>

<script>
export default {
  name: "MyNavbar",
  data() {
    return {
      targetTime: new Date().getTime() + 10 * 60 * 60 * 1000,
      timeLeft: "",
      showMessageBar: true,
    };
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const distance = this.targetTime - now;

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.timeLeft = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(
        seconds
      )}`;

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.timeLeft = "EXPIRED";
      }
    },
    pad(number) {
      return number < 10 ? "0" + number : number;
    },
    closeBar() {
      this.$el.querySelector(".countdown-bar").style.display = "none";
    },
    closeMessageBar() {
      this.showMessageBar = false;
    },
  },
  mounted() {
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.countdownInterval);
  },
};
</script>

<style scoped>
.countdown-bar {
  background-color: navy;
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
}

.countdown-timer {
  font-size: 1.25rem;
  margin-left: 0.5rem;
}

.close-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}

.message-bar {
  background-color: green;
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
}

.message-bar .close-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
}

.navbar {
  background-color: white;
  color: black;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  height: 40px;
  margin-right: 2rem;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
}

.nav-links li {
  margin-right: 1.5rem;
  position: relative;
}

.nav-links li:not(:last-child)::after {
  content: "|";
  position: absolute;
  right: -0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: black;
}

.nav-links a {
  color: black;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-links a:hover {
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
}

.nav-icons {
  display: flex;
  align-items: center;
}

.nav-icon {
  width: 24px;
  height: 24px;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: opacity 0.3s;
}

.nav-icon:hover {
  opacity: 0.8;
}
</style>
