<template>
  <div class="container">
    <div class="card">
      <h3>{{$translate('secondTabTitle')}}</h3>
      <AppTabContent
        v-bind:tab-content="content"
        v-bind:tab="tab"
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
import tabContentMixin from '@/mixins/tabContentMixin';

export default {
  name: "app-text-two",
  mixins: [tabContentMixin],
  data() {
    return {
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, reiciendis.`,
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
