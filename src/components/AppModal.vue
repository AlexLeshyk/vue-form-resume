<template>
  <div class="modal-backdrop" v-on:click="close"></div>
  <div class="modal">
    <span v-if="closeButton" class="modal-close" v-on:click="close">&times;</span>
    <h5>{{$translate('modalTitle')}}</h5>
    <p>{{$translate('modalContent')}}</p>
  </div>
</template>

<script>
  export default {
    emits: ['close'],
    methods: {
      close() {
        this.$emit('close');
      }
    },
    props: {
      languageBase: String,
      closeButton: Boolean,
    }
  }
</script>

<style lang="scss" scoped>
  .modal-close {
    font-size: 21px;
    padding: 4px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 10px;
  }
</style>