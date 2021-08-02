<template>
  <div class="form-control" v-bind:class="{invalid: error}">
    <label v-bind:for="id">{{label}}</label>
    <input 
      type="text"
      v-bind:id="id"
      v-bind:placeholder="placeholder"
      v-bind:value="modelValue"
      v-on:input="change"
    />
    <small v-if="error">{{error}}</small>
  </div>
</template>

<script>
  export default {
    emits: ['update:modelValue'],
    props: {
      modelValue: String,
      placeholder: String,
      label: String,
      error: String,
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

<style lang="scss" scoped>

</style>