<template>
  <InnerNavBar
    title="로그인 / 회원가입"
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
        { name: 'Login', href: '/auth/login' },
        { name: 'Signin', href: '/auth/signin' }
      ]
    }
  },
  components: {
    InnerNavBar
  }
}
</script>
