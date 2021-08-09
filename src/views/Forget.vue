<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>
    <app-button
      v-on:action="$router.push('/login')"
    >Обратно к логину</app-button>
  </div>
</template>

<script>
export default {
}
</script>
