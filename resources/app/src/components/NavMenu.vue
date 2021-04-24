<template>
  <div class="hamburger" :class="{ 'is-active': isActive }" @click="toggle">
    <span class="line" />
    <span class="line" />
    <span class="line" />
    <Teleport v-if="isActive" to="#modals">
      <div
        id="sidemenu-overlay"
        class="absolute"
        aria-hidden="true"
        style="
                    right: 0;
                    height: calc(100% - 73px);
                    top: 73px !important;
                    left: 0;
                "
        @click.self="close"
      >
        <div
          id="sidemenu"
          class="absolute w-full right-0 bg-white animate__animated"
          :class="{
            animate__slideInRight: isActive,
            animate__slideOutRight: !isActive,
          }"
          style="
                        height: calc(100%);
                        width: calc(80%);
                        max-width: 300px;
                    "
        >
          <div class="flex flex-col py-6 overflow-y-scroll">
            <div class="mt-6 relative flex-1 px-4 sm:px-6">
              <ul>
                <li>My Dogs</li>
              </ul>
              <hr>
              <div>
                <button
                  class="mr-4 bg-transparent hover:bg-gray-500 text-black font-semibold rounded-2xl hover:text-gray-100 py-2 px-4 border border-black hover:border-transparent"
                  @click="login"
                >
                  sign in
                </button>
                <button
                  class="py-2 px-4 border border-black bg-black text-white rounded-2xl"
                  @click="register"
                >
                  register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
<script>
import { gsap } from 'gsap';
import router from '../router';

export default {
  name: 'NavMenu',
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    login() {
      router.push('login');
      this.close();
    },
    register() {
      router.push('register');
      this.close();
    },
    toggle() {
      this.isActive ? this.close() : this.open();
    },
    open() {
      this.isActive = true;
      gsap.to('#sidemenu-overlay', { opacity: 0.75, duration: 0.75 });
    },
    close() {
      gsap.to('#sidemenu-overlay', { opacity: 0, duration: 0.5 }).then(
        () => {
          this.isActive = false;
        },
      );
    },
  },
};
</script>
<style>
.hamburger .line {
    width: 35px;
    height: 3px;
    background-color: #000000;
    display: block;
    margin: 5px auto;

    transition: all 0.3s ease-in-out;
}

.hamburger:hover {
    cursor: pointer;
}
.hamburger {
    position: relative;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.hamburger.is-active {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.hamburger.is-active .line {
    /*width: 35px;*/
}

.hamburger.is-active .line:nth-child(2) {
    opacity: 0;
}

.hamburger.is-active .line:nth-child(1) {
    transform: translateY(13px);
}

.hamburger.is-active .line:nth-child(3) {
    transform: translateY(-3px) rotate(90deg);
}
#sidemenu-overlay {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
