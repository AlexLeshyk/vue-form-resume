import { createApp } from 'vue';
import App from './App.vue';
import './theme.css';
import './main.scss';
import i18nPlugin from './plugins/i18n.js';

const ru = {
  quantityOpen: 'Количество открытых статей',
  quantityRead: 'Количество прочитанных статей',
  changeLanguage: 'Переключить язык',
  loadComments: 'Загрузить комментарии',
  noComments: 'Пока комментариев нет',
  commentTitle: 'Комментарии',
  noBlocks: 'Пока нет блоков',
  markArticle: 'Отметить непрочитанной',
  readArticle: 'Прочесть новость',
  ru: 'Русский',
  en: 'Английский',
  close: 'Закрыть',
  open: 'Открыть',
  delete: 'Удалить',
  tabOne: 'Работа',
  tabTwo: 'Клиенты',
  tabThree: 'Приложение',
  postGroup: 'Группа постов',
};

const en = {
  quantityOpen: 'Number of open articles',
  quantityRead: 'Number of articles read',
  changeLanguage: 'Change language',
  loadComments: 'Load comments',
  noComments: 'No comments yet',
  commentTitle: 'Comments',
  markArticle: 'Mark unread',
  readArticle: 'Read the news',
  noBlocks: 'No blocks yet',
  ru: 'Russian',
  en: 'English',
  close: 'Close',
  open: 'Open',
  delete: 'Delete',
  tabOne: 'Job',
  tabTwo: 'Clients',
  tabThree: 'Aplication',
  postGroup: 'Post group',
};

const app = createApp(App);

app.use(i18nPlugin, {en,ru});

app.mount('#app');
