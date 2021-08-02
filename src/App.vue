<template>
  <div class="container">
    <AppAlert
      v-bind:alertMessage="alert"
      v-on:close="closeAlertMessage"
    />
  </div>
  <div class="container column">
    <div class="card">
      <div class="form-control language-control">
        <label for="language">{{$translate('changeLanguage')}}</label>
        <select id="language" v-model="language" v-on:change="changeLanguage">
          <option value="ru">{{$translate('ru')}}</option>
          <option value="en">{{$translate('en')}}</option>
        </select>
      </div>
    </div>
  </div>
  <div class="container column">
    <AppForm 
      v-on:add-form-block="addBlock"
    />
    <AppView
      v-bind:elements="blocks"
      v-on:remove-block="removeBlock"
      v-bind:languageBase="language"
    />
  </div>
  <div class="container">
    <div class="card">
      <div>{{$translate('quantityOpen')}}: <span>{{openRate}}</span> | {{$translate('quantityRead')}}: <span>{{readRate}}</span></div>
      <div class="pt-1">
        <app-button
          v-on:action="addActiveClass('one')"
          v-bind:colorClass="classOne"
          v-bind:languageBase="language"
        >{{$translate('tabOne')}}</app-button>
        <app-button
          v-on:action="addActiveClass('two')"
          v-bind:colorClass="classTwo"
          v-bind:languageBase="language"
        >{{$translate('tabTwo')}}</app-button>
        <app-button
          v-on:action="addActiveClass('three')"
          v-bind:colorClass="classThree"
          v-bind:languageBase="language"
        >{{$translate('tabThree')}}</app-button>
      </div>
    </div>
  </div>
  <keep-alive>
    <component
      v-bind:is="componentName"
      v-bind:title="tabComponent.titleComponent"
      v-bind:is-open="tabComponent.isContentOpen"
      v-bind:was-read="tabComponent.isAlreadyRead"
      v-bind:language-base="language"
      v-on:open-news="openNews"
      v-on:read-news="markNewsRead"
      v-on:unmark="unmarkNewsRead"
    ></component>
  </keep-alive>
  <div class="container">
    <AppLoader v-if="loading"/>
    <div v-else>
      <div class="card">
        <h3>{{$translate('commentTitle')}}</h3>
        <ul class="list" v-if="coms.length">
          <AppComments
            v-for="item in coms"
            v-bind:key="item.id"
            v-bind:title="item.name"
            v-bind:id="item.id"
            v-bind:text="item.body"
            v-bind:email="item.email"
            v-bind:post="item.postId"
            v-on:remove-comment="removeComment"
            v-bind:languageBase="language"
          />
        </ul>
        <div v-else>
          <p>{{$translate('noComments')}}</p>
          <app-button v-bind:colorClass="'primary'" v-on:action="addComments" v-bind:language-base="language">{{$translate('loadComments')}}</app-button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import AppForm from "./components/AppForm";
import AppView from "./components/AppView";
import AppComments from "./components/AppComments";
import AppAlert from "./components/AppAlert";
import AppLoader from "./components/AppLoader";
import AppTextOne from "./components/AppTextOne";
import AppTextTwo from "./components/AppTextTwo";
import AppTextThree from "./components/AppTextThree";
import AppButton from "./components/AppButton";
// import pinDirective from "./directives/pinDirective";
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppForm: AppForm,
    AppView: AppView,
    AppComments: AppComments,
    AppAlert: AppAlert,
    AppLoader: AppLoader,
    AppTextOne: AppTextOne,
    AppTextTwo: AppTextTwo,
    AppTextThree: AppTextThree,
    AppButton: AppButton
},
  data() {
    return {
      blocks: [],
      coms: [],
      alert: null,
      loading: false,
      active: 'one',
      tabComponent: {
        titleComponent: 'The tab title ...',
        isContentOpen: false,
        isAlreadyRead: false,
      },
      openRate: 0,
      readRate: 0,
      language: 'en',
    }
  },
  mounted() {
    // this.addComments();
  },
  methods: {
    changeLanguage() {
      this.i18n(this.language);
    },
    addBlock(block) {
      console.log('blocks', this.blocks);
      this.blocks.push(block);
    },
    removeBlock(id) {
      console.log('delete block', this.blocks, id);
      const name = this.blocks.find(item => item.id === id).value;
      this.blocks = this.blocks.filter(item => item.id !== id);
      this.alert = {
        type: 'primary',
        title: 'Блок удален!',
        text: `Блок "${name}" был успешно удален!`,
      }
    },
    async addComments() {
      this.loading = true;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=3`);
        if (!response) {
          throw new Error('Список из комментариев пуст!');
        }
        this.coms = await response.json();
        this.loading = false;
      } catch (e) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка!',
          text: e.message,
        }
        this.loading = false;
        console.error('Ошибка', e);
      }
    },
    async removeComment(id) {
      try {
        const name = this.coms.find(comment => comment.id === id).name;
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        console.log('response',response);
        if (response.ok) {
          this.coms = this.coms.filter(comment => comment.id !== id);
          this.alert = {
            type: 'primary',
            title: `Комментарий "${name}"`,
            text: "Данный комментарий был успешно удален!",
          }
        } else {
          throw new Error('Что-то пошло не так');
        }
      } catch (e) {
        console.error('Ошибка', e);
      }
    },
    closeAlertMessage() {
      this.alert = null;
    },
    addActiveClass(name) {
      this.active = name;
    },
    markNewsRead() {
      this.readRate = this.readRate + 1;
    },
    unmarkNewsRead() {
      this.readRate = this.readRate - 1;
    },
    openNews() {
      this.openRate = this.openRate + 1;
    }
  },
  computed: {
    componentName() {
      return `app-text-${this.active}`;
    },
    classOne() {
      return this.active === 'one' ? 'warning' : '';
    },
    classTwo() {
      return this.active === 'two' ? 'warning' : '';
    },
    classThree() {
      return this.active === 'three' ? 'warning' : '';
    },
  },
  inject: ['i18n'],
}
</script>

<style lang="scss" scoped>
  .language-control {
    display: flex;
    align-items: center;

    label {
      width: 60%;
    }

    select {
      width: 40%;
    }
  }
</style>
