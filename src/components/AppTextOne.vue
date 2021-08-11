<template>
  <div class="container">
    <div class="card">
      <h3>{{$translate('firstTabTitle')}}</h3>
      <AppTabContent
        v-bind:tab="tab"
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
import tabContentMixin from '@/mixins/tabContentMixin';

export default {
  name: "app-text-one",
  mixins: [tabContentMixin],
  data() {
    return {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex quibusdam, nisi id officiis voluptate.',
    }
  },
}
</script>