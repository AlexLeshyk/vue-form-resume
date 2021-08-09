<template>
  <li class="list-item">
    <div>
      <h4 class="comment-title">{{ item.name }} <span> {{$translate('postGroup')}}: {{item.postId}}</span></h4>
      <small>{{ item.body }}</small>
      <p><strong>{{ item.email }}</strong></p>
      <app-button
        v-bind:colorClass="'primary'"
        v-on:action="onRemove(), log(item.name, $event)"
        v-bind:languageBase="languageBase"
        >{{$translate('delete')}}
      </app-button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'app-comment',
  emits: ['remove'],
  props: {
    item: {
      type: Object,
      requried: true,
    },
    languageBase: String,
  },
  data() {
    return {
    }
  },
  methods: {
    log(title, $event) {
      console.log('event', event,'title', title);
    },
    onRemove() {
      this.$emit('remove',this.item);
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