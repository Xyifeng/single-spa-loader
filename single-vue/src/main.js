import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'
import store from './store/index'

Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// 下面是single-spa配置
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue-app',
    store,
    render: h => h(App)
  }
})
// eslint-disable-next-line no-console

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export function mount(props) {
  // eslint-disable-next-line no-console
  let globalEventDistributor=props.globalEventDistributor
  


  createDomElement();
  return vueLifecycles.mount(props);
}

export const unmount = [
  vueLifecycles.unmount,
];

function createDomElement() {
  let el = window.document.getElementById('vue-app');
  if (!el) {
    el = window.document.createElement('div');
    el.id='vue-app'
    document.body.appendChild(el)
  }
  return el
}