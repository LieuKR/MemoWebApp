<template>
  <nav id="navbar">
    <div class="navbar-left">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png">
        <span>VueMemo</span>
      </router-link>
    </div>
    <div class="navbar-center">
      <router-link to="/login">
        <span>Login</span>
      </router-link>
      <router-link to="/signin">
        <span>Signin</span>
      </router-link>
      <router-link to="/about">
        <span>About</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped lang="stylus">
nav
  display flex
  background-color #262e3a
  height 50px
  padding 0px 15px
  color white
  text-align left
.navbar-left
.navbar-center
  display inline-flex
  align-items: center
.navbar-center a.router-link-active
  height calc(100% - 4px)
  border-top 2px solid
  border-bottom #fff 2px solid
.navbar-left
  margin-right 20px
a
  height 100%
  display inline-flex
  align-items center
  text-decoration none
  padding 0px 10px
a img.logo
  width 30px
  height 30px
  margin-right 15px
span
  color #fff
  font-size 1.1rem
</style>
