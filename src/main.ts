import { createApp } from "vue";
import Main from "./main.vue";
import router from './router/index';
import store from './store';
// import Button from 'ant-design-vue/lib/Button';
// import 'ant-design-vue/dist/antd.less';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './static/iconfont/iconfont.css'; //字体图标库
import './static/scss/base.scss';

const app = createApp((<any>Main));
// app.use(store).use((<any>router)).use(Button).mount('#app');
app.use(store).use((<any>router)).use(Antd).mount('#app');