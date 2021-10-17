import { createApp } from 'vue';
import router from '@/routes/index.js';
import App from './App.vue';

import '@/assets/css/color.css';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import '@/assets/css/base.css';

import TheHeader from '@/components/common/TheHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseTab from '@/components/base/BaseTab.vue';
import BaseTag from '@/components/base/BaseTag.vue';
import BaseButton from '@/components/base/BaseButton.vue';

const app = createApp(App);

app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('base-card', BaseCard);
app.component('base-tab', BaseTab);
app.component('base-tag', BaseTag);
app.component('base-button', BaseButton);

app.use(router);

app.mount('#app');
