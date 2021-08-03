<template>
  <div class="container">
    <div class="card">
      <h3>{{$translate('secondTabTitle')}}</h3>
      <AppTabContent
        v-bind:tab-content="content"
        v-on:open-news="openContent"
        v-on:read-news="readContent"
        v-on:unmark="unmark"
        v-bind:language-base="languageBase"
      />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, unde non? Rem suscipit itaque ullam!</p>
    </div>
  </div>
</template>

<script>
import AppTabContent from "./AppTabContent";

export default {
  name: "AppTextTwo",
  emits: ['read-news','unmark','open-news'],
  components: {
    AppTabContent: AppTabContent,
  },
  props: {
    languageBase: String,
  },
  data() {
    return {
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, reiciendis.`,
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
    }
  },
}
</script>
<style scoped>
  .content-g {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
