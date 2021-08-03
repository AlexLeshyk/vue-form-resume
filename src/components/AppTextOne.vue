<template>
  <div class="container">
    <div class="card">
      <h3>{{$translate('firstTabTitle')}}</h3>
      <AppTabContent
        v-bind:tab-content="content"
        v-on:open-news="openContent"
        v-on:read-news="readContent"
        v-on:unmark="unmarkNews"
        v-bind:language-base="languageBase"
      />
    </div>
  </div>
</template>

<script>
import AppTabContent from "./AppTabContent";

export default {
  name: "AppTextOne",
  emits: ['open-news','read-news','unmark'],
  props: {
    title: String,
    languageBase: String,
  },
  components: {
    AppTabContent: AppTabContent,
  },
  data() {
    return {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex quibusdam, nisi id officiis voluptate.',
    }
  },
  methods: {
    openContent() {
      this.$emit('open-news');
    },
    readContent() {
      this.$emit('read-news');
    },
    unmarkNews() {
      this.$emit('unmark');
    },
  },
}
</script>