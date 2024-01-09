import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { shake, throttle } from './utils/directive'
const app = createApp(App)
// 使 v-focus 在所有组件中都可用
app.directive('color', (el, binding) => {
  //console.log(binding) // => "foo"
})
app.directive('example', (el, binding) => {
  //console.log(binding)
})
app.directive('shake', shake)
app.directive('throttle', throttle)
app.mount('#app')