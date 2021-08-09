<template>
  <button
    class="btn"
    v-bind:class="colorClass"
    v-on:click="$emit('action')">
      <slot />
  </button>
</template>

<script>
  export default {
    name: 'app-button',
    emits: ['action'],
    props: {
      colorClass: {
        type: String,
        default: '',
        validator(value) {
          return ['','primary','danger','warning'].includes(value);
        }
      },
      languageBase: String,
    },
  }
</script>

<style lang="scss" scoped>

</style>