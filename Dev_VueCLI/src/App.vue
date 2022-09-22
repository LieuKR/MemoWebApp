<template>
  <NavigationBar/>
  <router-view/>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  components: {
    NavigationBar
  }
}
</script>

<style lang="stylus">
body
  margin 0
  min-height 100vh
  background-color #000
  color #fff
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
</style>
