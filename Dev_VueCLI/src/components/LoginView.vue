<template>
  <div class="request-box">
    <div class="header">
      <span class="title">로그인</span>
    </div>
    <div class="body">
      <div class="inputbox input-text">
        <label for="input-email">이메일</label>
        <div>
          <input id="input-email" type="email" name="email" autocomplete="email" maxlength="50">
        </div>
      </div>
      <div class="inputbox input-text">
        <label for="input-password">비밀번호</label>
        <div>
          <input id="input-password" type="password" name="password" maxlength="50">
        </div>
      </div>
      <button class="submitbox">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style scoped>

</style>
