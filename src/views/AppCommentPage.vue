<template>
  <div class="card">
    <h3>{{$translate('curComPage')}} ID = {{$route.params.id}}</h3>
    <pre>{{currentComment.id}} : {{commentTitle}}</pre>
    <pre>{{currentComment.body}}</pre>
    <pre>{{currentComment.email}}</pre>
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
        return (this.$route.query.title) ? this.$route.query.title : 'Empty title';
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>