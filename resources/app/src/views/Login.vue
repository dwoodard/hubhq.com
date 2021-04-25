<template>
  <v-container>
    <h2 class="text-center">
      Sign in to your account
    </h2>

    <form class="" action="#" method="POST">
      <v-text-field
          v-model="name"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          v-model="password"
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
export default {};
</script>

<style scoped></style>
