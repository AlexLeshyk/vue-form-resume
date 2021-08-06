<template>
   <div class="container column">
    <div class="card language-control">
      <div class="form-control">
        <label for="language">{{$translate('changeLanguage')}}</label>
        <select id="language" v-model="language" v-on:change="changeLanguage">
          <option value="ru">{{$translate('ru')}}</option>
          <option value="en">{{$translate('en')}}</option>
        </select>
        <app-button
          v-on:action="openModal"
          colorClass="primary"
          v-bind:languageBase="language"
        >{{$translate('open')}}</app-button>
      </div>
    </div>
  </div>
  <teleport to=".modal-content">
    <app-modal
      v-if="modal"
      v-on:close="closeModal"
      v-bind:languageBase="language"
      closeButton
    ></app-modal>
  </teleport>
</template>

<script>
  import AppButton from "../components/AppButton";
  import AppModal from "../components/AppModal.vue";
  export default {
    emits: ['changeLanguage','modal-open'],
    data() {
      return {
        language: 'en',
        modal: false,
      }
    },
    methods: {
      changeLanguage() {
        this.$emit('changeLanguage', this.language);
      },
      closeModal() {
        this.modal = false;
      },
      openModal() {
        this.modal = true;
      },
    },
    components: {
      AppButton,
      AppModal, 
    },
  }
</script>

<style lang="scss" scoped>
  .language-control {
    padding: 0.5rem;
    .form-control {
      display: flex;
      align-items: center;
    }
    
    label {
      width: 60%;
    }
    select {
      width: 40%;
    }
    
    button {
      margin: 0 0 0 0.8rem;
    }
  }
</style>