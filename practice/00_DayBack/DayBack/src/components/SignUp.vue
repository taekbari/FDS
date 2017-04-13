<template lang="html">
  <form class="signin-form" action="index.html" method="post">
    <h2>회원가입</h2>
    <fieldset>
      <legend>Sign Up Form</legend>
      <!-- 사용자 입력 값 연결 -->
      <input v-model="email" type="email" placeholder="가입 이메일" required>
      <input v-model="password" type="password" placeholder="비밀번호" required>
      <input v-model="passwordConfirm" type="password" placeholder="비밀번호 한번 더" required>
      <input v-model="nickname" type="text" placeholder="닉네임" required>

      <button @click="signUp" class="signin-btn signup" type="submit">회원가입</button>
      <button class="signin-btn" type="button" @click="$eventBus.$emit('showSignIn')">로그인</button>
    </fieldset>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      // 사용자 입력을 받기 위한 데이터 설정
      email: '',
      password: '',
      passwordConfirm: '',
      nickname: ''
    };
  },
  methods: {
    signUp(e) {
      // 기본 이벤트를 막으면 타입 체크하는 부분이 동작하지 않음
      // 모든 값이 입력되고 처리될 때 기본 이벤트 막음
      if (!this.email || ! this.password || !this.passwordConfirm || !this.nickname) {
        return;
      }

      if (this.password != this.passwordConfirm) {
        window.alert('비밀번호가 일치하지 않습니다.');
        this.password = '';
        this.passwordConfirm = '';
        return;
      }

      // 기본 이벤트(submit) 막음
      e.preventDefault();
      // 회원가입을 위한 통신
      // 입력받은 값들을 설정해서 요청
      axios.post('https://dayback.hcatpr.com/signup/', {
            email: this.email,
            password: this.password,
            nickname: this.nickname
          })
         .then(response => {
           // 서버 통신 성공했을 경우의 처리
           if (response.status === 201) {
             // 회원가입 완료되면 입력 값 초기화
             this.email = '';
             this.password = '';
             this.passwordConfirm = '';
             this.nickname = '';
             window.alert('회원가입이 완료되었습니다.');
             // 회원가입 완료되면 로그인 화면으로 전환
             this.$eventBus.$emit('showSignIn');
           }
         })
         .catch(error => {
           // 로그인 실패했을 경우의 처리
           // 입력 값 초기화
           this.email = '';
           this.password = '';
           this.passwordConfirm = '';
           this.nickname = '';
           window.alert('회원 가입에 실패했습니다.');
         }
       );
    }
  }
}
</script>

<style lang="scss">
.signup {
  margin-top: 30px;
}
</style>
