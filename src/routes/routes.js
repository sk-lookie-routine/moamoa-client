export default [
  {
    path: '/',
    redirect: { name: 'home' },
    component: () => import('@/views/DefaultPage.vue'),
  },
  {
    path: '/redirect',
    component: () => import('@/views/RedirectPage.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/AuthSignupPage.vue'),
  },
  {
    path: '/signup-form',
    name: 'signup-form',
    component: () => import('@/views/AuthSignupFormPage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/AuthLoginPage.vue'),
  },
  {
    path: '/mypage/:userSeq',
    name: 'mypage',
    component: () => import('@/views/MyPage.vue'),
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('@/views/MyPageEditProfile.vue'),
  },
  {
    path: '/account-manage',
    name: 'accountManage',
    component: () => import('@/views/MyPageAccountManage.vue'),
  },
  {
    path: '/post',
    name: 'posts',
    component: () => import('@/views/StudyPostListPage.vue'),
  },
  {
    path: '/post/write',
    name: 'post-write',
    component: () => import('@/views/StudyPostWritePage.vue'),
  },
  {
    path: '/post/apply',
    name: 'apply',
    component: () => import('@/views/StudyApplyPage.vue'),
  },
  {
    path: '/post/:postId',
    name: 'post',
    component: () => import('@/views/StudyPostPage.vue'),
  },
  {
    path: '/room',
    name: 'rooms',
    component: () => import('@/views/StudyRoomListPage.vue'),
  },
  {
    path: '/room/write',
    name: 'room-write',
    component: () => import('@/views/StudyRoomWritePage.vue'),
  },
  {
    path: '/room/:roomId',
    name: 'room',
    component: () => import('@/views/StudyRoomPage.vue'),
  },
  {
    path: '/:notFound(.*)',
    component: () => import('@/views/NotFoundPage.vue'),
  },
];
