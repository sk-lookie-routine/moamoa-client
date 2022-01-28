const auth = {
  state: {
    userId: '',
    username: '',
    image: '',
    email: '',
    isLogin: false,
    accessToken: '',
    refreshToken: '',
    userInfo: '',
    userSeq: '',
    userType: '',
    providerType: '',
  },
  getters: {
    userToken(state) {
      return state.accessToken;
    },
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
    setUser(state, payload) {
      state.email = payload.email;
      state.username = payload.username;
      state.userId = payload.userId;
      state.image = payload.image;
      state.userSeq = payload.userSeq;
      state.userInfo = payload.userInfo;
      state.userType = payload.userType;
    },
    initUser(state) {
      state.email = '';
      state.username = '';
      state.userId = '';
      state.image = '';
      state.userSeq = '';
      state.userInfo = '';
      state.accessToken = '';
      state.refreshToken = '';
      state.userType = '';
    },
    setToken(state, payload) {
      state.accessToken = payload.access_token;
      state.refreshToken = payload.refresh_token;
    },
  },
};
export default auth;
