<template>
  <form class="card" v-on:submit.prevent="submit">
    <h2>{{$translate('loginTitle')}}</h2>
    <app-input
      v-bind:language="language"
      v-bind:placeholder="$translate('enterYourEmail')"
      v-bind:error="errors.email"
      v-bind:label="$translate('email')"
      v-bind:input-type="inputTypeText"
      v-model.trim="email"
    ></app-input>

    <app-input
      v-bind:language="language"
      v-bind:placeholder="$translate('enterYourPas')"
      v-bind:error="errors.password"
      v-bind:label="$translate('password')"
      v-bind:input-type="inputTypePas"
      v-model="password"
    ></app-input>

    <button class="btn primary" type="submit">{{$translate('enterEmail')}}</button>
    <router-link v-bind:to="{path: '/forget'}" v-slot="{navigate}">
      <app-button
        v-bind:language="language"
        colorClass="warning"
        v-on:action="navigate"
      >{{$translate('forgetPas')}}</app-button>
    </router-link>
  </form>
</template>

<script>
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
export default {
  components: {
    AppButton,
    AppInput,
  },
  props: {
    language: {
      type: String,
      requried: true,
    }
  },
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: null,
        password: null,
      },
      inputTypeText: 'text',
      inputTypePas: 'password',
    }
  },
  computed: {
    emailIsValid() {
      return this.email !== '';
    },
    passwordIsValid() {
      return this.password !== '';
    },
    isValid() {
      if (!this.emailIsValid) {
        this.errors.email = this.$translate('noEmptyEmail');
      }
      if (!this.passwordIsValid) {
        this.errors.password = this.$translate('noEmptyPas');
      }
      return this.emailIsValid && this.passwordIsValid;
    }
  },
  inject: ['login'],
  methods: {
    submit() {
      if (this.isValid) {
        this.login();
      }
    }
  }
}
</script>

<style scoped>

</style>