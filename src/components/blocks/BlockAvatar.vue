<template>
  <div class="avatar">
    <img v-bind:src="value"/>
  </div>
</template>

<script>
export default {
  name: "BlockAvatar",
  props: {
    value: String,
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  justify-content: center;

  img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
}
</style>