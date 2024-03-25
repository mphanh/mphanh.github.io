<template>
  <div class="form-container">
    <form @submit.prevent="submitForm" id="contact-form">
      <p>This is a static portfolio so this form does not work (yet)!</p>
      <p>Please contact me via mail: mpa1998.ma@gmail.com! Thank you!</p>
      <input
        name="name"
        type="text"
        v-model="formData.name"
        class="feedback-input"
        placeholder="Name"
      />
      <input
        name="email"
        type="text"
        v-model="formData.email"
        class="feedback-input"
        placeholder="Email"
      />
      <textarea
        name="text"
        class="feedback-input"
        v-model="formData.text"
        placeholder="Comment"
      ></textarea>
      <input type="submit" value="SUBMIT" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post("http://localhost:3000/send-email", this.formData);
        alert("Email sent successfully");
        // Reset form fields
        this.formData = {
          name: "",
          email: "",
          text: "",
        };
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email! " + error.response.data.error);
      }
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

.form-container {
  background-color: #7fa5ec;
  width: 60%;
  margin: auto;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

form {
  max-width: 420px;
  margin: auto;
  padding: 50px;
}

p {
  font-size: 1rem;
  color: #fbeee0;
}

.feedback-input {
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid #fbeee0;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
}

.feedback-input:focus {
  border: 2px solid #fbeee0;
}

.feedback-input::placeholder {
  color: #fff;
}

textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

[type="submit"] {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  width: 100%;
  background: #fbeee0;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: #7fa5ec;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}
[type="submit"]:hover {
  background: #fff;
}

@media screen and (max-width: 800px) {
  .form-container {
    width: 95%;
  }
  form {
    padding: 20px;
    width: 80%;
  }
}
</style>
