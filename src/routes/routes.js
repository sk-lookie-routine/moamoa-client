export default [
  {
    path: '/',
    component: () => import('@/views/DefaultPage.vue'),
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
    path: '/posts',
    name: 'posts',
    component: () => import('@/views/StudyPostListPage.vue'),
  },
  {
    path: '/post-write',
    name: 'post-write',
    component: () => import('@/views/StudyPostWritePage.vue'),
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: () => import('@/views/StudyRoomListPage.vue'),
  },
  {
    path: '/apply',
    name: 'apply',
    component: () => import('@/views/StudyApplyPage.vue'),
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import('@/components/views/mypage/MyPage.vue'),
  },
  {
    path: '/edit',
    name: 'editComponent',
    component: () => import('@/components/views/mypage/MyPageEditProfile.vue'),
  },
  {
    path: '/posts/:postId',
    name: 'post',
    component: () => import('@/views/StudyPostPage.vue'),
  },
  {
    path: '/rooms/:roomId',
    name: 'room',
    component: () => import('@/views/StudyRoomPage.vue'),
  },
  {
    path: '/:notFound(.*)',
    component: () => import('@/views/NotFoundPage.vue'),
  },
];
