import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import { Row, Col } from 'ant-design-vue';
createApp(App).use(Row).use(Col).use(store).use(router).mount('#app')
