<template>
  <div class="card">
    <h2>Страница Dashboard</h2>
    <p>Тут ты можешь перейти на любую страницу и почитать заранее заготовленные письма :)</p>
    <router-link v-bind:to="{name : 'email'}">В почту</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter() {
  },
  // beforeRouteLeave(to,from, next) {
  //   const answer = confirm('Вы уверены что хотите перейти?');
  //   if (answer) {
  //     next();
  //   }
  // }
}
</script>

<style scoped>

</style>