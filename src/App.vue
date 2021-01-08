<template>
  <div id="app">
    <div id="nav"></div>
    <router-view/>
  </div>
</template>

<style>

@import url(https://fonts.googleapis.com/css?family=PT+Mono|Source+Sans+Pro:600,700&display=swap);

body {
  margin: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: PT Mono, monospace;
  padding: 1rem;
  height: 100vh;
  max-width: 24rem;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

h1, h2, h3 {
  font-family: Source Sans Pro, sans-serif
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>