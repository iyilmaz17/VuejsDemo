<template>
  <br />
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>About Us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
      </div>
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contact Us</h4>
        <p>123 Street Name, City, Country</p>
        <p>Email: contact@example.com</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 My Company. All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "MyFooter",
};
</script>

<style src="@/styles/css/Footer.css"></style>
