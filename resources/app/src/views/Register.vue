<template>
  <div class="mx-auto">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register your account
      </h2>
    </div>

    <div v-if="errors" class="bg-red-500">
      <pre>{{ errors }}</pre>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="register">

          <v-text-field
              v-model="name"
              :counter="10"
              label="Username/Handle"
              autocomplete="name"
              required
          ></v-text-field>

          <v-text-field
              v-model="email"
              label="E-mail"
              required
          ></v-text-field>

          <v-text-field
              v-model="password"
              :counter="10"
              label="Password"
              required
          ></v-text-field>

          <v-text-field
              v-model="password_confirmation"
              :counter="10"
              label="Password Confirm"
              required
          ></v-text-field>

          <v-btn @click="register" type="submit" >
            Register
          </v-btn>

        </form>
      </div>
    </div>
  </div>
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
          this.errors = result.data;
        }
      });
    },
  },
};
</script>
