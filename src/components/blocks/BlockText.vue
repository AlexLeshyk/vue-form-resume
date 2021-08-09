<template>
  <div class="stroke">
    <p>{{value}}</p>
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
  name: "BlockText",
  emits: ['remove'],
  props: {
    value: String,
    elements: Array,
    id: String,
    languageBase: String,
  },
}
</script>