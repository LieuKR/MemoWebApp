import { createStore } from 'vuex'

const MemoColorList = {
  yellow: { background: '#fdffdf', edge: '#f3ff5d' },
  red: { background: '#ffe5e5', edge: '#ffacac' },
  blue: { background: '#d4fcff', edge: '#66f5ff' },
  green: { background: '#e5fff6', edge: '#70ffcd' },
  gray: { background: '#e2e2e2', edge: '#9c9c9c' },
  purple: { background: '#ffdcff', edge: '#fd64ff' }
}

export default createStore({
  state: {
    loginUserId: 'uid5268391375',
    memoLists: [],
    memoColors: MemoColorList
  },
  getters: {
  },
  mutations: {
    setLoginUserId (state, userId) {
      state.loginUserId = userId
    }
  },
  actions: {
    getMemoData () {
      const testMemoArr = [{ id: '1', color: 'gray', content: 'this is memo1' },
        { id: '2', color: 'yellow', content: 'this is memo2' },
        { id: '3', color: 'yellow', content: 'this is memo3' },
        { id: '4', color: 'yellow', content: 'this is memo4' },
        { id: '5', color: 'red', content: 'this is memo5' },
        { id: '6', color: 'purple', content: 'this is memo6' },
        { id: '7', color: 'red', content: 'this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7' },
        { id: '6', color: 'blue', content: 'this is memo6' },
        { id: '7', color: 'blue', content: 'this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7' },
        { id: '7', color: 'green', content: 'this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7this is memo7' },
        { id: '6', color: 'gray', content: 'this is memo6' }]
      this.state.memoLists = testMemoArr
    }
  },
  modules: {
  }
})
