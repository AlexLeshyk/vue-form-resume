<template>
  <app-button
    v-on:action="openContent"
    v-bind:colorClass="isNewsOpen ? 'primary' : ''"
    v-bind:languageBase="languageBase"
  >{{isNewsOpen ? $translate('close') : $translate('open')}}
  </app-button>
  <app-button
    v-bind:colorClass="'danger'"
    v-if="wasNewsRead"
    v-on:action="unmarkNews"
    v-bind:language-base="languageBase"
  >{{$translate('markArticle')}}</app-button>
  <div v-if="isNewsOpen">
    <hr/>
    <p>{{tabContent}}</p>
    <app-button
      v-bind:colorClass="'primary'"
      v-on:action="readContent"
      v-if="!wasNewsRead"
      v-bind:language-base="languageBase"
    >{{$translate('readArticle')}}</app-button>
  </div>
</template>
<script>
export default {
  name: "AppTabContent",
  emits: ['open-news','read-news','unmark'],
  props: {
    tab: {
      type: Object,
      requried: true,
    },
    tabContent: String,
    languageBase: String,
  },
  data() {
    return {
      isNewsOpen: this.tab.isOpen,
      wasNewsRead: this.tab.wasRead,
    }
  },
  methods: {
    openContent() {
      this.isNewsOpen = !this.isNewsOpen;
      if(this.isNewsOpen) {
        this.$emit('open-news');
      }
    },
    readContent() {
      this.isNewsOpen = false;
      this.wasNewsRead = true;
      this.$emit('read-news');
    },
    unmarkNews() {
      this.wasNewsRead = false;
      this.$emit('unmark');
    },
  },
}
</script>
