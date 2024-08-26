<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Contact Form</h1>
    </div>
    <div class="contact-form-container">
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label for="email">E-mail*</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Email*"
              required
            />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Name"
              required
            />
          </div>
        </div>
        <div class="form-group full-width">
          <label for="message">Message*</label>
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Please be precise so we can address your issue in the best possible way*"
            required
          ></textarea>
        </div>
        <button type="submit" class="submit-button">Contact Us</button>
      </form>
    </div>
    <div class="contact-address">
      <strong>Address:</strong> 651 N Plano Rd, Richardson, TX 75081
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactPage",
  data() {
    return {
      formData: {
        email: "",
        name: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log("Form submitted", this.formData);
    },
  },
});
</script>

<style scoped>
.contact-page {
  padding: 2rem;
  text-align: center;
}

.contact-header {
  margin-bottom: 2rem;
}

.contact-form-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 1rem;
}

.form-group:last-child {
  margin-right: 0;
}

.full-width {
  flex: 1;
  margin-right: 0;
  width: 100%;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  display: block;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #333;
}

.contact-address {
  margin-top: 1rem;
  font-size: 1rem;
}
</style>
