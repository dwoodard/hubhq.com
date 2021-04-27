<template>
  <v-container class="mx-auto">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="register">

          <v-text-field
              v-model="name"
              :error="errors ? errors.name : null"
              :error-messages="errors ? errors.name : null "
              :counter="10"
              label="Username/Handle"
              required
          ></v-text-field>

          <v-text-field
              v-model="email"
              :error="errors ? errors.email : null"
              :error-messages="errors ? errors.email : null "
              label="E-mail"
              required
          ></v-text-field>

          <v-text-field
              v-model="password"
              :error="errors ? errors.password : null"
              :error-messages="errors ? errors.password : null "
              label="Password"
              required
          ></v-text-field>

          <v-text-field
              v-model="password_confirmation"
              :error="errors ? errors.password : null"
              :error-messages="errors ? errors.password : null "
              label="Password Confirm"
              required
          ></v-text-field>

          <v-btn @click="register" type="submit" >
            Register
          </v-btn>

        </form>
      </div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      errors: null,
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  },

  methods: {
    register() {
      axios.post('register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      }).then((result) => {
        if (result.data?.errors) {
          this.errors = result.data.errors;
          return;
        }

        this.errors = null;
        this.$router.push('/');
      });
    },
  },
};
</script>
