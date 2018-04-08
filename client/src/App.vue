<template>
  <div id="app">
    <div>
      <nav>
        <router-link :to="{ path: '/' }">Home</router-link>
        <files />
      </nav>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Files from '@/components/Files'

export default {
  name: 'App',

  components: { Files }
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
  width: 100%;
}

nav,
main {
  display: inline-block;
  vertical-align: top;
}

nav {
  position: absolute;
  left: 0;
  width: 300px;
  overflow: scroll;
}
</style>
