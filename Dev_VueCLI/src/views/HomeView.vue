<template>
  <section class="mainpage">
    <img class="logo" src="../assets/logo.png">
    <div class="textbox-hello">VueMemo에 오신 것을 환영합니다!</div>
    <div class="textbox-description">간편하게 메모를 작성할 수 있는 웹 애플리케이션입니다!
    </div>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>
section
  padding 96px 32px
  text-align center
.textbox-hello
  margin-top 40px
  font-size 2.3rem
  font-weight 600
.textbox-description
  margin-top 40px
  font-size 1.2rem
</style>
