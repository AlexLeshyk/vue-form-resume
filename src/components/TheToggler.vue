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
      v-model:modal="modalVisible"
      closeButton
    >
      <h5>{{$translate('modalTitle')}}</h5>
      <p>{{$translate('modalContent')}}</p>
    </app-modal>
  </teleport>
</template>

<script>
  export default {
    emits: ['changeLanguage','modal-open'],
    data() {
      return {
        language: 'en',
        modalVisible: false,
      }
    },
    methods: {
      changeLanguage() {
        this.$emit('changeLanguage', this.language);
      },
      openModal() {
        this.modalVisible = true;
      },
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