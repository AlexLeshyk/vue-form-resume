<template>
  <div class="container">
    <div class="card">
      <h3>{{$translate('thirdTabTitle')}}</h3>
      <AppTabContent
        v-bind:tab-content="content"
        v-bind:tab="tab"
        v-on:open-news="openContent"
        v-on:read-news="readContent"
        v-on:unmark="unmark"
        v-bind:language-base="languageBase"
      />
    </div>
  </div>
</template>

<script>
import AppTabContent from "./AppTabContent";

export default {
  name: "AppComponentThree",
  emits: ['read-news','unmark','open-news'],
  props: {
    languageBase: String,
    tab: {
      type: Object,
      requried: true,
    },
  },
  components: {
    AppTabContent: AppTabContent,
  },
  data() {
    return {
      content: 'Lorem ipsum dolor sit amet.',
    }
  },
  methods: {
    openContent() {
      this.$emit('open-news');
    },
    readContent() {
      this.$emit('read-news');
    },
    unmark() {
      this.$emit('unmark');
    },
  }
}
</script>