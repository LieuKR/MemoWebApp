<template>
  <div class="viewer-container">
    <div class="memo memo-color-yellow">
      <div class="memo-header">
        <div class="memo-header-left">
          <img class="menu_icon" src="@/assets/icon_menu_1.png">
          <span class="header-title"></span>
        </div>
        <div class="memo-header-right">
          <img @click="openColorPicker" class="colorpicker_icon" src="@/assets/icon_colorpicker_1.png">
          <img class="remove_icon" src="@/assets/icon_close_1.png">
        </div>
      </div>
      <div class="memo-body" contenteditable=true spellcheck=false> {{ this.$store.state.loginUserId }} </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    memo: Object
  },
  methods: {
    openColorPicker () {
      console.log(656)
    }
  }
}
</script>

<style scoped lang="stylus">
.viewer-container
  position: absolute
  width: 100%
  z-index 10
.memo
  display: table;
  border-radius: 8px;
  width: calc(100% - 150px);
  height: calc(100vh - 450px);
  max-width: 700px;
  min-height: 500px;
  border-radius: 5px
  color: black
  margin: 40px auto;
  border: 3px solid
.memo-header
  display: flex
  justify-content: space-between
  padding-bottom: 3px
.memo-header-left
  display: inline-flex
  align-items: center
.memo-header-right
  display: inline-flex
.memo-header img
  width 18px
  height 18px
  cursor pointer
.header-title
  margin-left: 5px;
  font-size: 15px;
.memo-body
  margin: 10px
  height: inherit
  display: block
  word-break: break-all
  overflow-y: auto;
  outline: none;
p
  margin: 0
  padding: 0
  border: 0
  vertical-align: baseline
  background: transparent
  font-style: normal
</style>
