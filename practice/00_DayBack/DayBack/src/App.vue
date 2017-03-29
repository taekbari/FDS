<template lang="html">
  <div id="app">
    <sign-in-modal>
      <div class="signin">
        <sign-in-form></sign-in-form>
        <button class="signin-btn" type="button">회원가입</button>
        <div class="sns-link">
          <em>또는 아래 계정으로 로그인</em>
          <a href="#">google</a>
          <a href="#">facebook</a>
        </div>
      </div>
    </sign-in-modal>
  </div>
</template>

<script>
import SignInModal from './components/Modal.vue';
import SignInForm from './components/Form.vue';

export default {
  name: 'app',
  data () {
    return {
    };
  },
  components: {
    SignInModal,
    SignInForm
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *::before, *::after {
  box-sizing: inherit;
}

.signin {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 30px 20px;
}

.sns-link em {
  position: relative;
  font-style: normal;
  font-size: 0.75rem;
  color: #505050;
  display: block;
  font-weight: 200;
  line-height: 3.33333;
}

.sns-link em::before,
.sns-link em::after {
  position: absolute;
  content: '';
  width: 80px;
  height: 1px;
  top: 50%;
  background: #a0a0a0;
}

.sns-link em::before {
  right: 50%;
  margin-right: 80px;
}
.sns-link em::after {
  left: 50%;
  margin-left: 80px;
}
</style>
