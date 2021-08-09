<template>
  <select v-model="selectValue" v-on:change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option
      v-for="option in options"
      v-bind:key="option.value"
      v-bind:value="option.value"
    >{{option.name}}</option>
  </select>
</template>

<script>
  export default {
    name: 'app-sort-select',
    props: {
      selectValue: String,
      options: {
        type: Array,
        default: () => [],
      }
    },
    methods: {
      changeOption(event) {
        this.$emit('update:selectValue', event.target.value);
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>