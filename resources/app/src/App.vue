<template>
  <div class="">
    <div
      class="px-4 flex justify-between items-center shadow-md"
      style="height: 72px"
    >
      <div class="flex justify-between items-center">
        <router-link to="/" class="mr-3">logo</router-link>


        <div id="nav">
          <router-link to="/about">
            About
          </router-link>
        </div>
      </div>
      <NavMenu />
    </div>

    <div class="p-4">
      <router-view />
    </div>

    <div id="modals" />
  </div>
</template>

<script>
 import NavMenu from './components/NavMenu';

export default {
  components: { NavMenu
  },
};
</script>
<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b00000;
}
</style>
