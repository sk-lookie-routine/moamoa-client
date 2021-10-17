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
		component: () => import('@/views/StudyListPage.vue'),
	},
	{
		path: '/post-write',
		name: 'post-write',
		component: () => import('@/views/StudyPostWritePage.vue'),
	},
	{
		path: '/rooms',
		name: 'rooms',
		component: () => import('@/views/StudyRoomPage.vue'),
	},
	{
		path: '/notice',
		name: 'notice',
		component: () => import('@/views/NoticePage.vue'),
	},
	{
		path: '/:notFound(.*)',
		component: () => import('@/views/NotFoundPage.vue'),
	},
];
