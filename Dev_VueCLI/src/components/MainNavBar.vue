<template>
  <nav id="navbar">
    <div class="navbar-left">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png">
        <span>VueMemo</span>
      </router-link>
    </div>
    <div class="navbar-center">
      <router-link to="/memo/list">
        <span>메모</span>
      </router-link>
      <router-link to="/auth/login">
        <span>로그인 / 회원가입</span>
      </router-link>
      <router-link to="/appinfo/wholeapp">
        <span>앱 정보</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavBar'
}
</script>

<style scoped lang="stylus">
nav
  display flex
  background-color #181d24
  height 50px
  padding 0px 15px
  color white
  text-align left
.navbar-left
.navbar-center
  display inline-flex
  align-items: center
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
.navbar-left span
  font-size 1.1rem
.navbar-center span
  font-size 1rem
  font-weight 600
</style>
