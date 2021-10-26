import { createApp } from 'vue';
import router from '@/routes/index.js';
//import store from '@/store/index.js';
import App from './App.vue';

import '@/assets/css/color.css';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import '@/assets/css/base.css';

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

import TheHeader from '@/components/common/TheHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseTab from '@/components/base/BaseTab.vue';
import BaseTag from '@/components/base/BaseTag.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseDialog from '@/components/base/BaseDialog.vue';

const app = createApp(App);

app.component('date-picker', Datepicker);
app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('base-card', BaseCard);
app.component('base-tab', BaseTab);
app.component('base-tag', BaseTag);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.use(router);
//app.use(store);

app.mount('#app');
