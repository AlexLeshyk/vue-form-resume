<template>
  <form class="card" v-on:submit.prevent="submit">
    <h2>{{$translate('loginTitle')}}</h2>
    <div class="form-control"
      v-bind:class="{'invalid': emailIsNotValid}">
      <app-input-val
        v-bind:placeholder="$translate('enterYourEmail')"
        v-bind:label="$translate('email')"
        v-model:inputValue.trim="email"
      ></app-input-val>
      <small
        v-if="v$.email.$dirty && v$.email.required.$invalid"
      >{{$translate('noEmptyEmail')}}</small>
      <small
        v-else-if="v$.email.$dirty && v$.email.email.$invalid"
      >{{$translate('noCorrectEmail')}}</small>
    </div>
    <div class="form-control"
      v-bind:class="{'invalid': passwordIsNotValid}">
      <app-input-val
        v-bind:placeholder="$translate('enterYourPas')"
        v-bind:label="$translate('password')"
        v-bind:input-type="inputTypePas"
        v-model:inputValue="password"
      ></app-input-val>
      <small
        v-if="v$.password.$dirty && v$.password.required.$invalid"
      >{{$translate('noEmptyPas')}}</small>
    </div>

    <app-button
      v-bind:language="language"
      colorClass="primary"
      type="submit"
    >{{$translate('enterEmail')}}</app-button>
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
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
export default {
  setup () {
    return { v$: useVuelidate() }
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
      inputTypePas: 'password',
    }
  },
  validations () {
    return {
      password: { required },
      email: { required, email },
    }
  },
  computed: {
    emailIsNotValid() {
      return (this.v$.email.$dirty && this.v$.email.required.$invalid) ||
        (this.v$.email.$dirty && this.v$.email.email.$invalid);
    },
    passwordIsNotValid() {
      return this.v$.password.$dirty && this.v$.password.required.$invalid;
    },
    isFormValid() {
      return this.emailIsValid && this.passwordIsValid;
    },
  },
  inject: ['login'],
  methods: {
    isValid() {
      let isValid = true;

      if (this.v$.$invalid) {
        // console.log('errors',this.v$); 
        this.v$.$touch();
        isValid = false;
      } else {
        isValid = true;
      }
      return isValid;
    },
    submit() {
      if (this.isValid()) {
        this.login();
      }
    }
  }
}
</script>

<style scoped>

</style>