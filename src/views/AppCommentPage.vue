<template>
  <div class="card">
    <h3>{{$translate('curComPage')}} ID = {{$route.params.id}}</h3>
    <pre>{{$route.params.id}} : {{commentTitle}}</pre>
    <pre>{{commentBody}}</pre>
    <pre>{{commentEmail}}</pre>
    <router-link v-bind:to="{name : 'main'}">На главную</router-link>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        title: '',
      }
    },
    props: {
      currentComment: {
        type: Object,
        requried: true,
        default: {},
      },
      language: String,
    },
    computed: {
      commentTitle() {
        return (this.$route.query.title) ? `${this.$route.query.title}` : 'Empty title';
      },
      commentBody() {
        return (this.currentComment.body) ? `${this.currentComment.body}` : 'Empty text';
      },
      commentEmail() {
        return (this.currentComment.email) ? `${this.currentComment.email}` : 'Empty text';
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>