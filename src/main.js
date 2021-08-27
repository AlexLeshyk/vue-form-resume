import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import './main.scss';
import i18nPlugin from './plugins/i18n.js';
import { ru, en } from './translation.js';
import router from './router.js';
import store from './store';
import components from './components/UI';
import vInterSection from './directives/vInterSection';

const app = createApp(App);

components.forEach(item => {
  app.component(item.name, item);
});

app.directive('intersection',vInterSection);
app.use(router)
  .use(store)
  .use(i18nPlugin, {en,ru})
  .mount('#app');
