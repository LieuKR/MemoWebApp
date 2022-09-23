<template>
  <InnerNavBar
    title="앱 정보"
    :pagetabs="pagetabs"
  />
  <h1><router-view/></h1>
</template>

<script>
import InnerNavBar from '@/components/InnerNavBar.vue'

export default {
  data () {
    return {
      pagetabs: [
        { name: 'WholeApp', href: '/appinfo/wholeapp' },
        { name: 'ClientSide', href: '/appinfo/client' },
        { name: 'ServerSide', href: '/appinfo/server' },
        { name: 'DB', href: '/appinfo/db' }
      ]
    }
  },
  components: {
    InnerNavBar
  }
}
</script>
