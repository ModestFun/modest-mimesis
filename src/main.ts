import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import { Row, Col } from 'ant-design-vue';
import VueLazyLoad from 'vue3-lazyload'

createApp(App).use(VueLazyLoad, {
  loading: () => {
    console.log('loading')
  },
  error: () => {
    console.log('error')
  },
  loaded: () => {
    console.log('loaded')
  }
}).use(Row).use(Col).use(store).use(router).mount('#app')
