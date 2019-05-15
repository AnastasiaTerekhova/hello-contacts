<template>
  <div id="app">
    <!-- <Contacts msg=" "/> -->
    <Settings />
  </div>
</template>

<script>
// import Contacts from './components/Contacts.vue'
import Settings from './components/Settings.vue'

export default {
  name: 'app',
  components: {
    Settings
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
