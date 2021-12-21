const auth = {
  state: {
    code: 'gFKn_W-qRW94ov75JHneSNf2_AcAjVcx-9BwoPlr9ht49mFY-6V6gauG9A9SPjMojhxUeQopb9QAAAF91qNvFg',
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MjZEOTZDOTAwMzBERDU4NDI5RDI3NTFBQzFCREJCQyIsImV4cCI6MTYzOTI5NDYwNH0.ebG6l26wlvhlfOqpyFV1OhvA-BpW3-4dQsLlpYIoJ1w',
    userId: '',
    username: '',
    profileImageUrl: '', //이걸로 최초 회원가입 여부 체크
    email: '',
    roleType: '',
    isLogin: false,
    accessToken: '',
    refreshToken: '',
  },
  mutations: {
    login(state, payload) {
      state.token = payload.token;
      console.log(state.token);
    },
    loginCheck(state) {
      if (state.token == '') {
        console.log('not login');
        state.isLogin = false;
      } else {
        console.log('로그인됨');
        state.isLogin = true;
      }
    },
    setUser(state, payload) {
      state.email = payload.email;
      state.username = payload.username;
      state.userId = payload.userId;
    },
    setToken(state, payload) {
      state.accessToken = payload.access_token;
      state.refreshToken = payload.refresh_token;
    },
  },
};
export default auth;
