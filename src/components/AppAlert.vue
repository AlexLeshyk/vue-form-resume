<template>
  <div class="alert" v-if="alertMessage" v-bind:class="alertMessage.type">
    <h5>{{alertMessage.title}}</h5>
    <p>{{alertMessage.text}}</p>
    <app-button v-bind:colorClass="alertMessage.type" v-on:action="onClose">Закрыть</app-button>
  </div>
</template>

<script>
import AppButton from "./AppButton";
export default {
  name: "AppAlert",
  props: ['alertMessage'],
  emits: ['close'],
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
  components: {
    AppButton: AppButton,
  },
}
</script>

<style scoped>

</style>