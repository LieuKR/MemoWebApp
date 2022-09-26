<template>
  <div :class="['memo', 'memo-color-'+memo.color]" v-for="memo in memolist" :key=memo.name>
    <div class="memo-header">
      <div class="memo-header-left">
        <img class="menu_icon" src="@/assets/icon_menu_1.png">
        <span class="header-title"></span>
      </div>
      <div class="memo-header-right">
        <img class="edit_icon" src="@/assets/icon_edit_1.png">
        <img class="remove_icon" src="@/assets/icon_close_1.png">
      </div>
    </div>
    <div class="memo-body">{{ memo.content }}</div>
  </div>
</template>

<script>
export default {
  props: {
    memolist: Array
  }
}
</script>

<style scoped lang="stylus">
.memo
  display: inline-table
  width: 200px
  height: 280px
  border-radius: 5px
  color: black
  margin: 5px
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
  overflow: hidden
  height: inherit
  display: block
  word-break: break-all
p
  margin: 0
  padding: 0
  border: 0
  vertical-align: baseline
  background: transparent
  font-style: normal
</style>
