import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import './main.scss';
import i18nPlugin from './plugins/i18n.js';
import { ru, en } from './dictionary.js';

createApp(App)
  .use(i18nPlugin, {en,ru})
  .mount('#app');
