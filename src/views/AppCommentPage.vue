<template>
  <div class="card">
    <h3>Это страница комментария с ID = {{$route.params.id}}</h3>
    <pre>{{ $route.params }}</pre>
  </div>
</template>

<script>
  export default {
    inject: ['comment'],
  }
</script>

<style lang="scss" scoped>

</style>