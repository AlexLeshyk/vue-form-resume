import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import Forget from './views/Forget.vue';
import Dashboard from './views/Dashboard.vue';
import Mail from './views/Mail.vue';
import Main from './views/Main.vue';
import NotFound from './views/NotFound.vue';
import AppEmailBody from './components/AppEmailBody.vue';
import AppCommentPage from '@/views/AppCommentPage.vue';
import MainWithStore from '@/views/MainWithStore.vue';

const router = createRouter({
  history: createWebHistory() ,
  routes: [
    { path: '/', component : Main },
    { path: '/login', component : Login },
    { path: '/forget', component : Forget, meta: { noEnter: true } },
    { path: '/dashboard', component : Dashboard, name: 'dash', props: (route) => ({ query: route.query.q }) },
    { path: '/mail', component : Mail, name: 'email', children: [
      { path: ':id?', component: AppEmailBody, props: true }
    ]},
    { path: '/:notFound(.*)*', component: NotFound },
    { path: '/comments/:id', component : AppCommentPage },
    { path: '/store', component : MainWithStore },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

router.beforeEach((to,from,next) => {
  if (to.meta.noEnter) {
    next({name: 'dash'});
  } else {
    next();
  }
});

export default router;