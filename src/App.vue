<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="sass">
@import 'src/sass/app';

#app,
html,
body
  font-family: 'Helvetica', sans-serif;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  position: fixed;

</style>
