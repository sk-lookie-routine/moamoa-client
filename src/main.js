import { createApp } from 'vue';
import router from '@/routes/index.js';
import App from './App.vue';

import MainHeader from '@/components/common/MainHeader.vue';

const app = createApp(App);

app.component('main-header', MainHeader);

app.use(router);

app.mount('#app');
