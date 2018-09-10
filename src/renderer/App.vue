<template>
  <div id="app">
    <titlebar></titlebar>
    <navigationbar></navigationbar>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import titlebar from './components/Titlebar'
  import navigationbar from './components/NavigationBar'

  export default {
    name: 'vmusic',
    components: {
      titlebar, navigationbar
    }
  }
</script>

<style lang="scss">
.content {
  margin-left: 180px;
  margin-right: 10px;
  margin-top: 60px;
  margin-bottom: 10px;
}

* {
  margin: 0;
}

@font-face {
  font-family: Orbitron;
  src: url('assets/fonts/Orbitron-Regular.ttf');
}
</style>
