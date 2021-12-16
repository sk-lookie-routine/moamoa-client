const auth = {
  state: {
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5MjZEOTZDOTAwMzBERDU4NDI5RDI3NTFBQzFCREJCQyIsImV4cCI6MTYzOTI5NDYwNH0.ebG6l26wlvhlfOqpyFV1OhvA-BpW3-4dQsLlpYIoJ1w',
    userId: '',
    username: '',
    profileImageUrl: '',
    email: '',
    roleType: '',
    isLogin: false,
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
  },
};
export default auth;
