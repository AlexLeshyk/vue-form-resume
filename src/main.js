import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import './main.scss';
import i18nPlugin from './plugins/i18n.js';
import { ru, en } from './translation.js';
import router from './router.js';

createApp(App)
  .use(router)
  .use(i18nPlugin, {en,ru})
  .mount('#app');
