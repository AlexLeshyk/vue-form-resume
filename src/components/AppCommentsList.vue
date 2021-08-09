<template>
  <div class="card">
    <h3>{{$translate('commentTitle')}}</h3>
    <ul class="list" v-if="comments.length">
      <AppComment
        v-for="comment in comments"
        v-bind:key="comment.id"
        v-bind:item="comment"
        v-on:remove="$emit('remove',comment.id)"
        v-bind:languageBase="language"
      />
    </ul>
    <div v-else>
      <p>{{$translate('noComments')}}</p>
      <app-button
        v-bind:colorClass="'primary'"
        v-on:action="addComments"
        v-bind:language-base="language"
      >{{$translate('loadComments')}}</app-button>
    </div>
  </div>
</template>

<script>
  import AppComment from "./AppComment";
  export default {
    name: 'app-comments-list',
    emits: ['remove-comment','add-comments'],
    components: {
      AppComment
    },
    props: {
      comments: {
        type: Array,
        requried: true,
      },
      language: String,
    },
    methods: {
      addComments() {
        this.$emit('add-comments');
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>