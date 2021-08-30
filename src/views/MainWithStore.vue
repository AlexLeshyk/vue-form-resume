<template>
  <div class="container">
    <AppAlert
      v-bind:alertMessage="alert"
      v-on:close="closeAlertMessage"
      v-bind:languageBase="language"
    />
  </div>
  <div class="container">
    <div class="card search-btns">
      <div class="form-control">
        <app-input-val
          v-bind:input-value="seachQuery"
          v-on:update:input-value="setSeachQuery"
          v-bind:label="$translate('search')"
          v-bind:placeholder="$translate('searchPlaceholder')"
        ></app-input-val>
      </div>
      <div class="form-control">
        <app-sort-select
          v-bind:select-value="selectedSort"
          v-on:update:select-value="setSelectedSort"
          v-bind:options="sortOptions"
          v-bind:language="language"
        ></app-sort-select>
      </div>
    </div>
  </div>
  <div class="container">
    <AppLoader v-if="loading"/>
    <div v-else>
      <AppCommentsList
        v-bind:comments="searchSortedComments"
        v-on:remove="removeComment"
        v-on:open-comment="openComment"
        v-on:add-comments="addComments"
        v-bind:language="language"
      />
    </div>
    <div v-intersection="{loadMoreComments,page,totalPages}" class="observer"></div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
import AppCommentsList from "../components/AppCommentsList";
import AppAlert from "../components/AppAlert";
import AppLoader from "../components/AppLoader";

export default {
  name: 'Main',
  components: {
    AppCommentsList: AppCommentsList,
    AppAlert: AppAlert,
    AppLoader: AppLoader,
  },
  props: {
    language: String,
  },
  data() {
    return {
    }
  },
  emits: ['open-comment'],
  mounted() {
    this.addComments();
  },
  methods: {
    ...mapActions({
      loadMoreComments: 'main/loadMoreComments',
      addComments: 'main/addComments',
    }),
    ...mapMutations({
      setPage: 'main/setPage',
      setSeachQuery: 'main/setSeachQuery',
      setSelectedSort: 'main/setSelectedSort',
    }),
    removeComment(id) {
      const name = this.$store.state.main.coms.find(comment => comment.id === id).name;
      this.$store.state.main.coms = this.$store.state.main.coms.filter(comment => comment.id !== id);
      this.$store.state.main.alert = {
        type: 'primary',
        title: `${this.$translate('comment')} "${name}"`,
        text: `${this.$translate('deleteComment')}`,
      }
    },
    openComment(comment) {
      this.$emit('open-comment',comment);
    },
    closeAlertMessage() {
      this.$store.state.main.alert = null;
    },
  },
  computed: {
    ...mapState({
      coms: state => state.main.coms,
      alert: state => state.main.alert,
      loading: state => state.main.loading,
      selectedSort: state => state.main.selectedSort,
      seachQuery: state => state.main.seachQuery,
      page: state => state.main.page,
      limit: state => state.main.limit,
      totalPages: state => state.main.totalPages,
      sortOptions: state => state.main.sortOptions,
    }),
    ...mapGetters({
      sortedComments: 'main/sortedComments',
      searchSortedComments: 'main/searchSortedComments',
    }),
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
  .search-btns {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .form-control {
      width: 50%;
      padding: 0 10px;
    }
  }

  .observer {
    height: 30px;
  }
</style>