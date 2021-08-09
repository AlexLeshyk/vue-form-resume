<template>
  <label v-bind:for="id">{{label}}</label>
  <input
    v-bind:type="inputType"
    v-bind:id="id"
    v-bind:placeholder="placeholder"
    v-bind:value="inputValue"
    v-on:input="onChange"
  >
</template>

<script>
  export default {
    name: 'app-input-val',
    emits: ['update:inputValue'],
    props: {
      inputValue: String,
      placeholder: String,
      label: String,
      inputType: {
        type: String,
        default: 'text',
      },
      language: String,
    },
    data() {
      return {
        id: 'input-' + Math.random().toFixed(4),
      }
    },
    methods: {
      onChange(event) {
        this.$emit('update:inputValue', event.target.value);
      },
    },
  }
</script>