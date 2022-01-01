const auth = {
  state: {
    code: '',
    userId: '',
    username: '',
    image: '', //이걸로 최초 회원가입 여부 체크?
    email: '',
    roleType: '',
    isLogin: false,
    accessToken: '',
    refreshToken: '',
    providerType: '',
    userInfo: '',
    userSeq: '',
  },
  getters: {
    userToken(state) {
      return state.accessToken;
    },
  },
  mutations: {
    loginCheck(state) {
      if (state.userId == '') {
        state.isLogin = false;
      } else {
        state.isLogin = true;
      }
    },
    setUser(state, payload) {
      state.email = payload.email;
      state.username = payload.username;
      state.userId = payload.userId;
      state.image = payload.image;
      state.providerType = payload.providerType;
      state.userSeq = payload.userSeq;
      state.userInfo = payload.userInfo;
    },
    initUser(state) {
      state.email = '';
      state.username = '';
      state.userId = '';
      state.image = '';
      state.providerType = '';
      state.userSeq = '';
      state.userInfo = '';
      state.accessToken = '';
      state.refreshToken = '';
    },
    setToken(state, payload) {
      state.accessToken = payload.access_token;
      state.refreshToken = payload.refresh_token;
    },
  },
};
export default auth;
