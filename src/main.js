import { createApp } from 'vue';
import router from '@/routes/index.js';
import App from './App.vue';

import '@/assets/css/color.css';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import '@/assets/css/base.css';

import MainHeader from '@/components/common/MainHeader.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseTab from '@/components/base/BaseTab.vue';
import BaseTag from '@/components/base/BaseTag.vue';

const app = createApp(App);

app.component('main-header', MainHeader);
app.component('base-card', BaseCard);
app.component('base-tab', BaseTab);
app.component('base-tag', BaseTag);

app.use(router);

app.mount('#app');
