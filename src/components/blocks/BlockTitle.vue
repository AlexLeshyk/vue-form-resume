<template>
  <div class="stroke">
    <h1>{{blockName}}</h1>
    <p>{{value}}</p>
  </div>
  <app-button
    colorClass="warning"
    v-bind:disabled="!elements.length"
    v-on:action="onDelete"
    v-bind:languageBase="languageBase"
  >{{$translate('remove')}}</app-button>
</template>

<script>
export default {
  name: "BlockTitle",
  props: {
    value: String,
    elements: Array,
    id: String,
    blockName: {
      type: String,
      required: true,
    },
    languageBase: String,
  },
  emits: ['remove'],
  methods: {
    onDelete(event) {
      this.$emit('remove', this.id);
    },
  },
}
</script>
<style lang="scss" scoped>
</style>