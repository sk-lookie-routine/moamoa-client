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
        // alert(state.token);
      } else {
        console.log('로그인토큰');
        state.isLogin = true;
      }
    },
  },
};
export default auth;
