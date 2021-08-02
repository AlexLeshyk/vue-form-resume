<template>
  <form class="card card-w30" v-on:submit.prevent="onSubmit">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="type">
        <option selected value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>
    <app-input
      v-bind:placeholder="'Введи имя блока'"
      v-bind:error="errors.name"
      v-bind:label="'Название блока'"
      v-model="name"
    ></app-input>
    <div class="form-control">
      <label for="value">Значение</label>
      <textarea v-focus id="value" rows="3" v-model.trim="value"></textarea>
    </div>
    <app-button colorClass="primary" v-bind:disabled="isValid" >Добавить</app-button>
  </form>
</template>

<script>
import AppButton from "./AppButton";
import AppInput from "./AppInput";
import focusDirective from "../directives/focusDirective";
export default {
  name: "AppForm",
  emits: ['add-form-block'],
  data() {
    return {
      type: 'title',
      value: '',
      name: '',
      errors: {
        name: null,
      }
    }
  },
  computed: {
    isValid() {
      return this.value.length < 5;
    }
  },
  methods: {
    formIsValid() {
      let isValid = true;
      if (this.name.length === 0) {
        this.errors.name = 'Имя не может быть пустым';
        isValid = false;
      } else {
        this.errors.name = null;
      }

      return isValid;
    },
    onSubmit() {
      if (this.formIsValid()) {
        this.$emit('add-form-block',{
          type: this.type,
          value: this.value,
          name: this.name,
          id: Date.now(),
        });
      }

      this.type = 'title';
      this.value = '';
      this.name = '';
    }
  },
  components: {
    AppButton: AppButton,
    AppInput: AppInput,
  },
  directives: {
    focus: focusDirective,
  },
}
</script>

<style scoped>

</style>