import { createApp } from 'vue';
import AnimateCSS from 'animate.css';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/tailwind.css'

createApp(App).use(store).use(router).use(AnimateCSS)
  .mount('#app');
