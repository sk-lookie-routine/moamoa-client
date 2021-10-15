export default [
	{
		path: '/',
		redirect: '/home',
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
];
