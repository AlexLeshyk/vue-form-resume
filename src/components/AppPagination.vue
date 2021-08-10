<template>
  <div class="card page-wrapper">
    <span
      v-for="pageNumber in pages"
      v-bind:key="pageNumber"
      class="page"
      v-bind:class="{
        'current-page': pageNumber === currentPage
      }"
      v-on:click="$emit('change-page',pageNumber)"
    >{{pageNumber}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      pages: {
        type: Number,
        requried: true,
      },
      currentPage: String,
    },
    emmits: ['change-page'],
  }
</script>

<style lang="scss" scoped>
  .page {
    border: 1px solid #42b983;
    padding: 6px;
    margin: 0 2px;
    font-size: 10px;
    cursor: pointer;

    &-wrapper {
      display: flex;
      margin-top: 15px;
      overflow: hidden;
    }

    &.current-page {
      border: 2px solid #e53935;
    }
  }
</style>