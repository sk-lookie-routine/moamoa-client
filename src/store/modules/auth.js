const auth = {
  state: {
    token: '',
    userId: '',
    username: '',
    profileImageUrl: '',
    email: '',
    roleType: '',
  },
  mutations: {
    login(state, payload) {
      // state.userId = payload.userId;
      // state.userName = payload.userName;
      state.token = payload;
    },
    loginCheck(state) {
      if (state.token == '/') {
        console.log(state.token);
      } else {
        console.log('로그인토큰');
      }
    },
  },
};
export default auth;
