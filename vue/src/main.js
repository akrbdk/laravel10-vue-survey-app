import { createApp } from 'vue'
import './style.css'
import store from "./store";
import router from "./router";
import './input.css'
import App from './App.vue'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
