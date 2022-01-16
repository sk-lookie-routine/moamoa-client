import { createApp } from 'vue';
import store from '@/store/index.js';
import router from '@/routes/index.js';
import App from './App.vue';

import '@/assets/css/color.css';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import '@/assets/css/base.css';

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

import TheHeader from '@/components/common/TheHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';

import BaseApply from '@/components/base/BaseApply.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BaseDialog from '@/components/base/BaseDialog.vue';
import BaseDialogButton from '@/components/base/BaseDialogButton.vue';
import BaseReply from '@/components/base/BaseReply.vue';
import BaseTab from '@/components/base/BaseTab.vue';
import BaseTag from '@/components/base/BaseTag.vue';

const app = createApp(App);

app.component('date-picker', Datepicker);
app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('base-apply', BaseApply);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-dialog', BaseDialog);
app.component('base-dialog-button', BaseDialogButton);
app.component('base-reply', BaseReply);
app.component('base-tab', BaseTab);
app.component('base-tag', BaseTag);

window.Kakao.init('c63c08657e63a89661f53f6bbf43a349');
app.use(router);
app.use(store);
app.mount('#app');
