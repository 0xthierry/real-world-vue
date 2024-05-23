<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue'

const gstore = inject('gstore')
</script>

<template>
  <div id="layout">
    <div v-if="gstore.flashMessage" id="flashMessage">{{ gstore.flashMessage }}</div>
    <header>
      <div class="wrapper">
        <nav id="nav">
          <RouterLink to="/">Events</RouterLink>
          <RouterLink to="/about-us">About</RouterLink>
        </nav>
      </div>
    </header>
    <!--RouteView is replaced by the component mapped in a route-->
    <RouterView />
  </div>
</template>
<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  & + a {
    margin-left: 20px;
  }
}
#nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}

@keyframes yellow-fade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation-name: yellow-fade;
  animation-duration: 3s;
}
</style>
