import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from '@/App.vue';

const store = createStore({
  state: {
    token: '',
    user_id: '',
    username: '',
    profile_image_url: '',
    email: '',
    role_type: '',
  },
  mutations: {
    setUser(state, payload) {
      state.userName = payload.userName;
      state.token = payload.token;
      state.user_id = payload.user_id;
      state.profile_image_url = payload.profile_image_url;
      state.email = payload.email;
      state.role_type = payload.role_type;
    },
  },
  actions: {},
});

const app = createApp(App);
app.use(store);

app.mount('#app');

export default { store };
