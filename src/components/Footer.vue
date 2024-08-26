<template>
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

<script>
export default {
  name: "MyFooter",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 2rem 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 0 1rem;
}

.footer-section h4 {
  margin-bottom: 0.5rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: white;
  text-decoration: none;
}

.footer-bottom {
  text-align: center;
  margin-top: 1rem;
}
</style>
