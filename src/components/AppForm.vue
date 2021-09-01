<template>
  <form class="card card-w30" v-on:submit.prevent="onSubmit">
    <div class="form-control">
      <label for="type">{{$translate('blockType')}}</label>
      <app-sort-select
        id="type"
        v-model:selectValue="type"
        v-bind:options="blockOptions"
        v-bind:language="languageBase"
      ></app-sort-select>
    </div>
    <div class="form-control"
      v-bind:class="{'invalid': errors.name}">
      <app-input-val
          v-bind:placeholder="$translate('enterBlockName')"
          v-bind:label="$translate('blockName')"
          v-model:inputValue.trim="name"
          v-focus
        ></app-input-val>
      <small
        v-if="errors.name"
        >{{$translate('noEmptyName')}}</small>
    </div>
    <div class="form-control">
      <label for="value">{{$translate('value')}}</label>
      <textarea id="value" rows="3" v-model.trim="value"></textarea>
    </div>
    <app-button
      colorClass="primary"
      v-bind:disabled="isValid"
      v-bind:languageBase="languageBase"
    >{{$translate('add')}}</app-button>
  </form>
</template>

<script>
import focusDirective from "@/directives/focusDirective";
export default {
  name: "AppForm",
  emits: ['add-form-block'],
  props: {
    languageBase: String,
  },
  data() {
    return {
      type: 'title',
      value: '',
      name: '',
      errors: {
        name: null,
      },
      blockOptions: [
        {value: 'title', name: 'Заголовок'},
        {value: 'subtitle', name: 'Подзаголовок'},
        {value: 'avatar', name: 'Аватар'},
        {value: 'text', name: 'Текст'},
      ],
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
        this.errors.name = this.$translate('noEmptyName');
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
  directives: {
    focus: focusDirective,
  },
}
</script>

<style scoped>

</style>