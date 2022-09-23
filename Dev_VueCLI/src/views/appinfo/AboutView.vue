<template>
  <InnerNavBar
    title="앱 정보"
    :pagetabs="pagetabs"
  />
  <router-view/>
  <h1>앱에 대한 간단한 설명</h1>
</template>

<script>
import InnerNavBar from '@/components/InnerNavBar.vue'

export default {
  data () {
    return {
      pagetabs: [
        { name: 'ClientSide', href: '/appinfo' },
        { name: 'ServerSide', href: '/appinfo' },
        { name: 'DB', href: '/appinfo' }
      ]
    }
  },
  components: {
    InnerNavBar
  }
}
</script>
