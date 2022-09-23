<template>
  <InnerNavBar title="앱 정보"/>
  <router-view/>
  <h1>앱에 대한 간단한 설명</h1>
</template>

<script>
import InnerNavBar from '@/components/InnerNavBar.vue'

export default {
  components: {
    InnerNavBar
  }
}
</script>
