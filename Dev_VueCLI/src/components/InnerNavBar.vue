<template>
  <nav id="navbar">
    <div class="navbar-left">
      <span class="title">{{title}}</span>
    </div>
    <div class="navbar-center" v-for="page in pagetabs" :key=page.name>
      <router-link :to="page.href">
        <span>{{ page.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavBar',
  props: {
    title: String,
    pagetabs: Array
  }
}
</script>

<style scoped lang="stylus">
nav
  display flex
  background-color #262e3a
  height 35px
  padding 0px 15px
  color white
  text-align left
.navbar-left
.navbar-center
  display inline-flex
  align-items: center
.navbar-center a.router-link-active
  height calc(100% - 4px)
  border-top 2px solid transparent
  border-bottom #fff 2px solid
.navbar-left
  margin-right 20px
  min-width: 145px;
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
.navbar-center span
  color #fff
  font-size 0.8rem
span.title
  line-height 0
  font-size 0.9rem
  font-weight 600
  cursor default
</style>
