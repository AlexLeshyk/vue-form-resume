<template>
  <the-navbar v-bind:visible="isAuth" v-bind:language="language"></the-navbar>
  <div class="container with-nav">
    <the-toggler
      v-on:changeLanguage="changeLanguage"
    ></the-toggler>
    <router-view v-bind:language="language"></router-view>
  </div>
  
</template>

<script>
import TheNavbar from './components/TheNavbar';
import TheToggler from './components/TheToggler';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    TheNavbar: TheNavbar,
    TheToggler: TheToggler,
  },
  data() {
    return {
      isAuth: true,
      language: 'en',
    }
  },
  methods: {
    changeLanguage(data) {
      this.language = data;
      this.i18n(this.language);
    },
    login() {
      this.isAuth = true;
      (this.$route.query.page) ? this.$router.push(this.$route.query.page) : this.$router.push('/dashboard');
    },
    logout() {
      this.isAuth = false;
      this.$router.push({
        path: '/login',
        query: {
          page: this.$route.path
        }
      });
    }
  },
  inject: ['i18n'],
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        {
          id: 1,
          theme: 'Купил себе PlayStation 5',
          text: 'Немного текста о PlayStation 5',
        },
        {
          id: 2,
          theme: 'Выучил Vue Router',
          text: 'Немного текста о работе Vue Router',
        },
        {
          id: 3,
          theme: 'Хочу изучить весь Vue',
          text: 'Большая непокрытая тема об изучении Vue',
        },
        {
          id: 4,
          theme: 'А следующий блок про Vuex!',
          text: 'А здесь будут материалы по Vuex',
        },
        {
          id: 5,
          theme: 'А что там на счет Vue Hooks?',
          text: 'Немного текста о Vue Hooks',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
