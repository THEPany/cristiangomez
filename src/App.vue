<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from './components/Nav'
import './assets/css/main.css'

export default {
  name: 'app',
  components: {
      Navbar
  }
}
</script>