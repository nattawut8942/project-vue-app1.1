<template>
   <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    
    
  </nav> -->
  <Menu/>
  <router-view/>
</template>
 <script>
 import Menu from './components/Menu.vue'
 export default {
  components : {
    Menu  
  }
 }
 </script>

