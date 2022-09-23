<template>
  <InnerNavBar title="로그인 / 회원가입"/>
  <router-view/>
</template>

<script>
import InnerNavBar from '@/components/InnerNavBar.vue'

export default {
  components: {
    InnerNavBar
  }
}
</script>
