import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from './modules/auth.js';
import account from './modules/account.js';

const store = createStore({
  modules: {
    auth: auth,
    account: account,
  },
  plugins: [
    createPersistedState({
      paths: ['auth', 'account'],
    }),
  ],
});

export default store;
