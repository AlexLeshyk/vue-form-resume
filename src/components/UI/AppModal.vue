<template>
  <div class="modal-backdrop" v-if="modal" v-on:click="hideModal"></div>
  <div class="modal" v-if="modal">
    <span v-if="closeButton" class="modal-close" v-on:click="hideModal">&times;</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-modal',
    emits: ['update:modal'],
    methods: {
      hideModal() {
        this.$emit('update:modal', false);
      }
    },
    props: {
      closeButton: {
        type: Boolean,
        default: false,
      },
      modal: {
        type: Boolean,
        default: false,
      }
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