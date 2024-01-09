<script setup>
import { ref } from 'vue'
let color = ref('red')
const handler = () => {
  console.log(color.value)
}
const throttleHandler = () => {
  console.log('节流函数')
}
</script>

<template>
  <!-- <div class="container" v-color:foo="color"></div>
  <div  v-example:foo.bar="color"></div> -->
  <input type="text" v-model="color" v-shake:500="handler"/>
  <button class="btn-throttle" v-throttle:500="throttleHandler">节流函数</button>
</template>

<style scoped>
.container { 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.btn-throttle{
  margin: 20px;
  &:hover{
    cursor: pointer;
  }
}
</style>
