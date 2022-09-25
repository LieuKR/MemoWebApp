<template>
  <div>
    <div class="memo-container">
      <memoComponent :memolist="temp_memoinfo"/>
      <div class="memo-addnew">
        <img class="plus_icon" src="@/assets/icon_plus_1.svg">
      </div>
    </div>
  </div>
</template>

<script>
import memoComponent from './component-memo.vue'

export default {
  data () {
    return {
      temp_memoinfo: [
        { id: '1', title: '', content: 'this is memo1' },
        { id: '2', title: 'title2', content: 'this is memo2' },
        { id: '3', title: 'title3', content: 'this is memo3' },
        { id: '4', title: 'title4', content: 'this is memo4' },
        { id: '5', title: 'title5', content: 'this is memo5' },
        { id: '6', title: 'title6', content: 'this is memo6' },
        { id: '7', title: 'title7', content: 'this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7' },
        { id: '6', title: 'title6', content: 'this is memo6' },
        { id: '7', title: 'title7', content: 'this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7' },
        { id: '7', title: 'title7', content: 'this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7' },
        { id: '6', title: 'title6', content: 'this is memo6' }]
    }
  },
  components: {
    memoComponent
  }
}
</script>

<style scoped lang="stylus">
.memo-container
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(210px, max-content))
  justify-content: center
  padding: initial
  margin: 30px 10px
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
