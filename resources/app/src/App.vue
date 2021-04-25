<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="flex align-self-center">
        <v-btn to="/" text class="mr-4 text-h5" plain style="text-transform: unset">HubHQ</v-btn>
        <v-btn to="/about" tag="span" text >About</v-btn>
      </div>

      <div>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation fixed>
      <v-btn>
        <span>Teams</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-navigation-drawer v-model="drawer" temporary fixed right style="height: calc(100% - 64px);top:64px">

      <v-list dense nav>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Title</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Title</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <div class="ma-4 ">
        <v-chip to="/login" link outlined class="mr-2">Sign in</v-chip>
        <v-chip to="/register" link>Join Now</v-chip>
      </div>

    </v-navigation-drawer>

  </v-app>

</template>

<script>

export default {

  data: () => ({ drawer: null }),

};
</script>
<style>
body .v-overlay {
  height: calc(100% - 64px);
  top: 64px;
}
</style>
