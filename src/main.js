import Vue from 'vue'
import App from './App.vue'

const map = new Map()
const msg = ['hello', 'japhy']
console.log(...msg)
map.set('test','japhy')

new Vue({
  render: (h) => h(App),
}).$mount("#app");