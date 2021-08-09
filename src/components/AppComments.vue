<template>
  <li class="list-item">
    <div>
      <h4 class="comment-title">{{ title }} <span> {{$translate('postGroup')}}: {{post}}</span></h4>
      <small>{{ text }}</small>
      <p><strong>{{ email }}</strong></p>
      <app-button
        v-bind:colorClass="'primary'"
        v-on:action="onRemove(), log(title, $event)"
        v-bind:languageBase="languageBase"
        >{{$translate('delete')}}
      </app-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "AppComments",
  emits: ['remove-comment'],
  props: {
    id : Number,
    title: String,
    text: String,
    email: String,
    post: Number,
    languageBase: String,
  },
  data() {
    return {
    }
  },
  methods: {
    log(title, $event) {
      console.log('event', event);
    },
    onRemove() {
      this.$emit('remove-comment',this.id);
    }
  },
}
</script>

<style scoped lang="scss">
  .comment-title {
    display: flex;
    justify-content: space-between;
    margin: 0 0 5px;
  }

  .list-item {
    & + li {
      border-top: 2px solid #42b983;
    }

    div {
      width: 100%;
    }
  }
</style>