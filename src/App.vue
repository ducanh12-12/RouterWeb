<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
   
  }
}
</script>

<style>
 body{
   margin: 0 auto;
   padding: 0 auto;
   box-sizing: border-box;
 }
</style>
