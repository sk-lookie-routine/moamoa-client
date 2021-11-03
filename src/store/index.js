import { createStore } from 'vuex';

const store = createStore({
  state: {
    userInfo: {
      token: '',
      user_id: '',
      username: '',
      profile_image_url: '',
      email: '',
      role_type: '',
    },
    isLoggedIn: false,
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
    setUser(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
    getUserInfo(context, payload) {
      context.commit('serUser', payload);
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
