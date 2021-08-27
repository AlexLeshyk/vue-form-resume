<template>
  <h2>{{$translate('createCom')}}</h2>
  <form class="form" v-on:submit.prevent="onFormSubmit">
    <div class="form-control" v-bind:class="{'invalid': errors.name && nameCheck}">
      <app-input-val
        v-bind:placeholder="$translate('enterComTitle')"
        v-bind:label="$translate('comTitle')" comBody
        v-model:inputValue.trim="comment.name"
        v-focus
      ></app-input-val>
      <small
        v-if="errors.name && nameCheck"
        >{{errors.name}}</small>
    </div>
    <div class="form-control" v-bind:class="{'invalid': errors.body && bodyCheck}">
      <app-input-val
        v-bind:placeholder="$translate('enterCombody')"
        v-bind:label="$translate('comBody')"
        v-model:inputValue.trim="comment.body"
      ></app-input-val>
      <small
        v-if="errors.body && bodyCheck"
      >{{errors.body}}</small>
    </div>
    <div class="form-control">
      <app-input-val
        v-bind:placeholder="'Comment email'"
        v-bind:label="'Enter comment email'"
        v-model:inputValue.trim="comment.email"
        v-bind:inputType="'email'"
      ></app-input-val>
    </div>
    <div class="form-control">
      <app-input-val
        v-bind:placeholder="'Comment postId'"
        v-bind:label="'Enter comment postId'"
        v-model:inputValue.number="comment.postId"
      ></app-input-val>
    </div>
    <div class="form-control">
      <app-button
        colorClass="primary"
        v-bind:languageBase="languageBase"
      >{{$translate('add')}}</app-button>
    </div>
  </form>
</template>

<script>
  import focusDirective from "@/directives/focusDirective";
  export default {
    data() {
      return {
        comment: {
          name: '',
          body: '',
          email: '',
          postId: '',
          id: '',
        },
        errors: {
          name: null,
          body: null,
        },
      }
    },
    emmits: ['create'],
    computed: {
      nameCheck() {
        return this.comment.name.length < 8;
      },
      bodyCheck() {
        return this.comment.body.length < 10;
      },
    },
    methods: {
      formIsValid() {
        let isValid = true;
        if (this.comment.name.length === 0) {
          isValid = false;
          this.errors.name = this.$translate('noEmptyComTitle');
        } else if (this.comment.name.length < 8) {
          isValid = false;
          this.errors.name = this.$translate('comTitleLength'); 
        } else {
          this.errors.name = null;
        }
        if (this.comment.body.length === 0) {
          isValid = false;
          this.errors.body = this.$translate('noEmptyComBody');
        } else if (this.comment.body.length < 10) {
          isValid = false;
          this.errors.body = this.$translate('comTitleLength'); 
        } else {
          this.errors.body = null;
        }
        return isValid;
      },
      onFormSubmit() {
        if (this.formIsValid()) {
          this.comment.id = parseInt(Math.round(Math.random()*100)) + 100;
          this.$emit('create', this.comment);
        }
        this.comment = {
          name: '',
          body: '',
          email: '',
          postId: '',
        }
      },
    },
    directives: {
      focus: focusDirective,
    },
  }
</script>

<style lang="scss" scoped>
</style>