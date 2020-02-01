<template>
  <div id="app">
    <keep-alive  exclude="detail">
      <router-view>
      </router-view>
    </keep-alive>
    <main-ta-bar></main-ta-bar>
  </div>
</template>

<script>
import MainTaBar from "./components/content/mainTabber/MainTab"
import 'vant/lib/index.css'
export default {
  name: 'app',
  components: {
    MainTaBar
  }
}
</script>

<style>
  @import "./assets/css/base.css"
</style>
