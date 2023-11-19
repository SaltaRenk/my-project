import Vue from 'vue'
import App from './App'
import components  from '@/components/UI'

const app = new Vue({
  render: h => h(App),
});
console.log(components);
components.forEach(component => {
  Vue.component(component.name, component)
})

app.$mount('#app')
