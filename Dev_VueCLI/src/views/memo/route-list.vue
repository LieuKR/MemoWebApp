<template>
  <div style="margin: 30px 10px">
    <viewerMemo/>
    <div class="memo-container">
      <previewMemo :memolist="this.$store.state.memoLists"/>
      <div class="memo-addnew">
        <img class="plus_icon" src="@/assets/icon_plus_1.svg">
      </div>
    </div>
  </div>
</template>

<script>
import previewMemo from './component-preview.vue'
import viewerMemo from './component-viewer.vue'

export default {
  data () {
    return {
      memo_color: this.$store.state.memoColors
    }
  },
  components: {
    previewMemo,
    viewerMemo
  },
  created () {
    this.$store.dispatch('getMemoData')
  }
}
</script>

<style scoped lang="stylus">
.memo-container
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(210px, max-content))
  justify-content: center
  padding: initial
.memo-addnew
  margin: 5px;
  border: white 5px solid;
  border-radius: 25px;
  cursor: pointer;
.plus_icon
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85px;
</style>

<style lang="stylus">
.memo-color-yellow
  background-color: v-bind('memo_color.yellow.background');
  border-color: v-bind('memo_color.yellow.edge') !important;
.memo-color-yellow .memo-header
  background-color v-bind('memo_color.yellow.edge')
.memo-color-red
  background-color: v-bind('memo_color.red.background');
  border-color: v-bind('memo_color.red.edge') !important;
.memo-color-red .memo-header
  background-color v-bind('memo_color.red.edge')
.memo-color-blue
  background-color: v-bind('memo_color.blue.background');
  border-color: v-bind('memo_color.blue.edge') !important;
.memo-color-blue .memo-header
  background-color v-bind('memo_color.blue.edge')
.memo-color-green
  background-color: v-bind('memo_color.green.background');
  border-color: v-bind('memo_color.green.edge') !important;
.memo-color-green .memo-header
  background-color v-bind('memo_color.green.edge')
.memo-color-gray
  background-color: v-bind('memo_color.gray.background');
  border-color: v-bind('memo_color.gray.edge') !important;
.memo-color-gray .memo-header
  background-color v-bind('memo_color.gray.edge')
.memo-color-purple
  background-color: v-bind('memo_color.purple.background');
  border-color: v-bind('memo_color.purple.edge') !important;
.memo-color-purple .memo-header
  background-color v-bind('memo_color.purple.edge')
</style>
