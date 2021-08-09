<template>
  <div v-if="email">
    <h2>{{email.theme}}</h2>
    <p>{{email.text}}</p>
    <app-button
      v-bind:languageBase="languageBase"
      v-on:action="closeLink"
    >{{$translate('close')}}</app-button>
  </div>
  <div v-else>
    <h5>{{$translate('noMails')}}</h5>
  </div>
</template>

<script>
export default {
  inject: ['emails'],
  computed: {
    emailId() {
      return parseInt(this.$route.params.id);
    },
    email() {
      return this.emails.find(item => item.id === this.emailId);
    }
  },
  methods: {
    closeLink() {
      this.$router.push('/mail');
    }
  },
  props: {
    id: String,
    languageBase: String,
  },
}
</script>

<style scoped>

</style>