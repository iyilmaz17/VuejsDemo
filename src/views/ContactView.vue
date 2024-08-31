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
        <div class="form-group message-group">
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
import { defineComponent, ref } from "vue";
import { FormData } from "@/types/ContactFormModel";
import "@/styles/css/ContactForm.css";

export default defineComponent({
  name: "ContactForm",
  setup() {
    const formData = ref<FormData>({
      email: "",
      name: "",
      message: "",
    });

    const submitForm = () => {
      // Handle form submission
      console.log("Form submitted", formData.value);
    };

    return {
      formData,
      submitForm,
    };
  },
});
</script>
