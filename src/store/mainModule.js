export const mainModule = {
  state: function() {
    return {
      coms: [],
      alert: null,
      loading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'name', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
        {value: 'email', name: 'По e-mail'},
      ],
      seachQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  getters: {
    sortedComments(state) {
      return [...state.coms].sort((com1,com2) => com1[state.selectedSort]?.localeCompare(com2[state.selectedSort]));
    },
    searchSortedComments(state, getters) {
      return getters.sortedComments.filter(com => com.name.toLowerCase().includes(state.seachQuery.toLowerCase()));
    },
  },
  mutations: {
    setComments(state,coms) {
      state.coms = coms;
    },
    setLoading(state,bool) {
      state.loading = bool;
    },
    setPage(state,page) {
      state.page = page;
    },
    setSelectedSort(state,selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSeachQuery(state,seachQuery) {
      state.seachQuery = seachQuery;
    },
    setTotalPages(state,totalPages) {
      state.totalPages = totalPages;
    },
    setAlert(state,alert) {
      state.alert = alert;
    },
  },
  actions: {
    async addComments({state,commit}) {
      commit('setLoading', true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?' + new URLSearchParams({
          _page: state.page,
          _limit: state.limit,
        }));
        commit('setTotalPages', Math.ceil((response.headers.get('x-total-count')) / state.limit));
        
        if (!response) {
          throw new Error('Список из комментариев пуст!');
        }
        commit('setComments', await response.json());
        commit('setLoading', false);
      } catch (e) {
        commit('setAlert',
        {
          type: 'danger',
          title: 'Ошибка!',
          text: e.message,
        });
        commit('setLoading', false);
        console.error('Ошибка', e);
      }
    },
    async loadMoreComments({state,commit}) {
      try {
        commit('setPage', state.page + 1);
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?' + new URLSearchParams({
          _page: state.page,
          _limit: state.limit,
        }));
        commit('setTotalPages', Math.ceil((response.headers.get('x-total-count')) / state.limit));
        
        if (!response) {
          throw new Error('Список из комментариев пуст!');
        }
        commit('setComments', [...state.coms, ... await response.json()]);
      } catch (e) {
        commit('setAlert',
        {
          type: 'danger',
          title: 'Ошибка!',
          text: e.message,
        });
        console.error('Ошибка', e);
      }
    },
  },
  namespaced: true,
};