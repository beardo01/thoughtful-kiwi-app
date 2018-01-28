import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import axios from 'axios';

Vue.use(Vuex);

// // Setup local storage
const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage,
  })
  
// Setup Vue store
export const store = new Vuex.Store({
  state: {
    apiUrl: 'https://api.thoughtful.kiwi/',
    posts: []
  },
  mutations: {
    setPosts(state) {
      state.posts = axios.get(store.getters.apiUrl + 'post/')
        .then(response => state.posts = response.data)
    }
  },
  actions: {
    setPosts(context) {
      context.commit('setPosts')
    }
  },
  getters: {
    apiUrl(state) {
      return state.apiUrl;
    },
    posts(state) {
      return state.posts;
    }
  },
  plugins: [vuexLocalStorage.plugin]
})