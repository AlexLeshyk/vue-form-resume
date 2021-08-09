<template>
  <div class="stroke">
    <h2>{{value}}</h2>
    <app-button
      colorClass="warning"
      v-bind:disabled="!elements.length"
      v-on:action="$emit('remove', id);"
      v-bind:languageBase="languageBase"
    >{{$translate('remove')}}</app-button>
  </div>
</template>

<script>
export default {
  name: "BlockSubtitle",
  emits: ['remove'],
  props: {
    value: String,
    elements: Array,
    id: String,
    languageBase: String,
  },
}
</script>

<style lang="scss" scoped>
</style>