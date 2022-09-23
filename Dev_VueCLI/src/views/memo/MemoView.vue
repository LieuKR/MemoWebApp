<template>
  <InnerNavBar
    title="메모"
    :pagetabs="pagetabs"
  />
  <router-view/>
</template>

<script>
import InnerNavBar from '@/components/InnerNavBar.vue'

export default {
  data () {
    return {
      pagetabs: [
        { name: 'List', href: '/memo/list' },
        { name: 'Write', href: '/memo/write' }
      ]
    }
  },
  components: {
    InnerNavBar
  }
}
</script>
