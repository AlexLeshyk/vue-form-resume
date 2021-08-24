<template>
  <header class="navbar" v-if="visible">
    <h3><router-link to="/">GMail</router-link></h3>
    <ul class="navbar-menu">
      <li><router-link v-bind:language="language" to="/">{{$translate('main')}}</router-link></li>
      <li><router-link to="/store">Store</router-link></li>
      <li><router-link v-bind:language="language" to="/login">{{$translate('login')}}</router-link></li>
      <li><router-link v-bind:language="language" to="/dashboard">{{$translate('dashboard')}}</router-link></li>
      <li>
        <router-link v-bind:language="language" custom v-slot="{navigate, href}" to="/mail">
          <a href="#"
            v-on:click="navigate"
            v-bind:class="{
              active: $route.path.includes(href)
            }"
          >{{$translate('mail')}}</a>
        </router-link>
      </li>
      <li><a href="#" v-on:click.prevent="logout">{{$translate('logout')}}</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    language: String,
  },
  inject: ['logout','i18n'],
}
</script>
