<template>
  <div class="request-box">
    <div class="header">
      <span class="title">로그인</span>
    </div>
    <div class="body">
      <div class="inputbox input-text">
        <label for="input-email">이메일</label>
        <div>
          <input id="input-email" type="email" v-model="email" autocomplete="email" maxlength="50">
        </div>
      </div>
      <div class="inputbox input-text">
        <label for="input-password">비밀번호</label>
        <div>
          <input id="input-password" type="password" v-model="password" maxlength="50">
        </div>
      </div>
      <button class="submitbox" @click="submit">로그인</button>
      <router-link to="/auth/signin">
        <span>아직 회원이 아니신가요?</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    submit () {
      var data = {}
      data.email = this.email
      data.password = this.password
      console.log(data)
    }
  }
}
</script>
