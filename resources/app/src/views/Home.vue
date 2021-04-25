<template>
  <div class="home">

    <div class="blue-grey darken-1 lighten-5 pa-5">
      <v-row >
        <v-col cols="12"  sm="12" md="6" order="1" order-md="0">
          <div class="white--text">
            <img alt="Vue logo" src="../assets/logo.png">

            <p>Welcome to your Community Response Group. We are devoted to helping connected neighbors to neighbors. In a time of need sometimes the only people available are those closest to you, and we wanted to make it easier to reach out and connect to those near by.</p>

            <p>Sign up for Free and start making connections today</p>

            <p>Make suer to check out our support section and training we have some big plans for building a better future locally in every community. See how change we can produce simply by joining hands together.</p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" >
          <v-card class="pa-10">
            <Login></Login>

            <hr class="mb-10">

            <v-btn to="/register" block link color="green darken-1 white--text">Create Account</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import Login from './Login';

export default {
  name: 'Home',
  components: {
    Login,
  },
};
</script>
