<template>
  <label v-bind:for="id">{{label}}</label>
  <input
    v-bind:type="inputType"
    v-bind:id="id"
    v-bind:placeholder="placeholder"
    v-bind:value="modelValue"
    v-on:input="change"
  >
</template>

<script>
  export default {
    emits: ['update:modelValue'],
    props: {
      modelValue: String,
      placeholder: String,
      label: String,
      inputType: String,
      language: String,
    },
    data() {
      return {
        id: 'input-' + Math.random().toFixed(4),
      }
    },
    methods: {
      change(event) {
        this.$emit('update:modelValue', event.target.value);
      },
    },
  }
</script>