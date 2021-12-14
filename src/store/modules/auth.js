const auth = {
  state: {
    token: '',
    userId: '',
    username: '',
    profileImageUrl: '',
    email: '',
    roleType: '',
    isLogin: false,
  },
  mutations: {
    login(state, payload) {
      // state.userId = payload.userId;
      // state.userName = payload.userName;
      state.token = payload;
    },
    loginCheck(state) {
      if (state.token == '/') {
        console.log('not login');
        state.isLogin = false;
      } else {
        console.log('로그인토큰');
        state.isLogin = true;
      }
    },
  },
};
export default auth;
