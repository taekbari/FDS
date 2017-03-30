<template lang="html">
  <div id="app">
    <button type="button" @click="showModal">Show Modal</button>
    <sign-in-modal v-if="isShowModal" @close="closeModal">
      <transition name="signin" appear mode="out-in">
        <div class="signin" v-if="isSelect" key="sign-in-div">
          <sign-in-form></sign-in-form>
          <button class="signin-btn" type="button" @click="showSignUp">회원가입</button>
          <div class="sns-link">
            <em>또는 아래 계정으로 로그인</em>
            <a class="google" href="#">google</a>
            <a class="facebook" href="#">facebook</a>
          </div>
        </div>
        <div class="signin" v-else key="sign-up-div">
          <sign-up-form></sign-up-form>
          <button class="signin-btn" type="button" @click="showSignIn">로그인</button>
        </div>
      </transition>
    </sign-in-modal>
  </div>
</template>

<script>
import SignInModal from './components/Modal.vue';
import SignInForm from './components/Form.vue';
import SignUpForm from './components/SignUp.vue';

export default {
  name: 'app',
  data () {
    return {
      isShowModal: false,
      isSelect: true
    };
  },
  components: {
    SignInModal,
    SignInForm,
    SignUpForm
  },
  methods: {
    showModal () {
      this.isShowModal = true;
    },
    closeModal () {
      this.isShowModal = false;
      this.isSelect = true;
    },
    showSignUp () {
      this.isSelect = false;
    },
    showSignIn () {
      this.isSelect = true;
    }
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

.signin-enter,
.signin-leave-to {
  opacity: 0;
}
.signin-enter-active,
.signin-leave-active {
  transition: opacity 1s;
}

</style>
