<template>
  <v-container>
    <h2 class="text-center">
      Sign in to your account
    </h2>

    <form class="" @submit.prevent="login">
      <v-text-field
          v-model="form.email"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          type="password"
          v-model="form.password"
          label="Password"
          required
      ></v-text-field>

      <v-btn type="submit" color="primary" >
        Sign in
      </v-btn>

    </form>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // move to main.js
      axios.defaults.withCredentials = true;
      axios.defaults.baseURL = 'http://localhost:8082';
      // axios.defaults.baseURL = 'http://localhost';

      axios.get('/sanctum/csrf-cookie').then(() => {
        axios.post('/login', { ...this.form })
          .then((res) => {
            console.log(res);
            this.$router.push('dashboard');
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
};
</script>

<style scoped></style>
