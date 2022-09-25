<template>
  <div class="request-box">
    <div class="header">
      <span class="title">회원가입</span>
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
      <div class="inputbox input-text">
        <label for="input-name">닉네임</label>
        <div>
          <input id="input-name" type="name" v-model="name" autocomplete="name" maxlength="50">
        </div>
      </div>
      <button class="submitbox" @click="submit">회원가입</button>
      <router-link to="/auth/login">
        <span>이미 가입하셨나요?</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      name: null
    }
  },
  methods: {
    submit () {
      var data = {}
      data.email = this.email
      data.password = this.password
      data.name = this.name
      console.log(data)
    }
  }
}
</script>
