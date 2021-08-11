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
import tabContentMixin from '@/mixins/tabContentMixin';
export default {
  name: 'app-component-three',
  mixins: [tabContentMixin],
  data() {
    return {
      content: 'Lorem ipsum dolor sit amet.',
    }
  },
}
</script>