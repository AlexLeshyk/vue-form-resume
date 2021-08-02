<template>
  <div class="stroke">
    <h1>{{blockName}}</h1>
    <p>{{value}}</p>
  </div>
  <app-button
    colorClass="warning"
    v-bind:disabled="!elements.length"
    v-on:action="onDelete"
  >Remove</app-button>
</template>

<script>
import AppButton from "../AppButton";
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
  },
  emits: ['remove'],
  methods: {
    onDelete(event) {
      this.$emit('remove', this.id);
    },
  },
  components: {
    AppButton: AppButton,
  },
}
</script>
<style lang="scss" scoped>
</style>