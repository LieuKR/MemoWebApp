<template>
  <MainNavBar/>
  <router-view/>
</template>

<script>
import MainNavBar from '@/components/MainNavBar.vue'

export default {
  components: {
    MainNavBar
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
</style>

<style lang="stylus">
.request-box
  display flex
  flex-direction column
  width calc(100% - 40px)
  max-width 450px
  margin 55px auto
  background-color #262e3a
  border-radius 8px
  overflow hidden
.request-box .header
  padding 16px 16px 10px
.request-box .body
  padding 16px
.request-box .header .title
  font-size 1.1rem
  font-weight 600
.request-box .inputbox
  margin-bottom 15px
.request-box a
  display block
  font-size 14px
  margin-bottom 7px
  font-weight 500
  color white
  text-decoration none
.request-box .input-text label
  display: block;
  font-size 14px
  margin-bottom 7px
  font-weight 600
.request-box .input-text input
  overflow hidden
  border-radius 6px
  color-scheme light
  font-size 14px
  background-color #000
  color #fff
  width -webkit-fill-available
  height 40px
  line-height 40px
  border-color transparent
  border-style solid
  border-width 0 2px
  padding 0px 10px
.request-box .submitbox
  overflow: hidden;
  border-radius: 6px;
  color-scheme: light;
  font-size: 14px;
  background-color: #5a5aec;
  color: #fff;
  width: -webkit-fill-available;
  height: 40px;
  border-color: transparent;
  padding: 0px 10px;
  margin-bottom: 15px;
</style>
