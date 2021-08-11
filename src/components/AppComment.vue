<template>
  <li class="list-item">
    <div>
      <h4 class="comment-title">{{ item.id }}. {{ item.name }} <span> {{$translate('postGroup')}}: {{item.postId}}</span></h4>
      <small>{{ item.body }}</small>
      <p><strong>{{ item.email }}</strong></p>
      <app-button
        v-bind:colorClass="'primary'"
        v-on:action="onRemove(), log(item.name, $event)"
        v-bind:languageBase="languageBase"
        >{{$translate('delete')}}
      </app-button>
      <app-button
        v-bind:languageBase="languageBase"
        v-bind:colorClass="'warning'"
        v-on:action="openComment"
      >{{$translate('open')}}</app-button>
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
    },
    openComment() {

      this.$router.push({
        path: `/comments/${this.item.id}`,
        query: {
          title: this.item.name
        }
      });
      this.$emit('open-comment',this.item);
    },
    provide() {
      return {
        comment: this.item
      }
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