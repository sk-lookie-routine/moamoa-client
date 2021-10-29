import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from '@/App.vue';

const store = createStore({
  state: {
    userName: '',
    platform: '',
  },
  mutations: {
    setUser(state, payload) {
      state.userName = payload.name;
      state.platform = payload.platform;
    },
  },
  actions: {},
  modules: {},
});

const app = createApp(App);
app.use(store);

app.mount('#app');

export default { store };
