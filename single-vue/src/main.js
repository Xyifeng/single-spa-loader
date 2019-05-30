import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// 下面是single-spa配置
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app',
    render: h => h(App)
  }
})
// eslint-disable-next-line no-console

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
