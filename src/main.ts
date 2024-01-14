import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '$style/normalize.css';
import '$style/tailwind.css';
import '$style/global.scss';

const app = createApp(App).use(router);

// 等到路由已经准备好了再挂载 app，否则刷新页面会读不到当前 route.query
router.isReady().then(() => {
  app.mount('#app');
});
