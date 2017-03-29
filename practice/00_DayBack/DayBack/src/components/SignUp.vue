<template lang="html">
  <form class="signup-form" action="index.html" method="post">
    <h2>회원가입</h2>
    <fieldset>
      <legend>Sign Up Form</legend>
      <!-- 사용자 입력 값 연결 -->
      <input v-model="email" type="email" placeholder="가입 이메일" required>
      <input v-model="password" type="password" placeholder="비밀번호" required>
      <input v-model="passwordConfirm" type="password" placeholder="비밀번호 한번 더" required>
      <input v-model="name" type="text" placeholder="이름" required>
      <button @click="signUp" class="signin-btn signup" type="submit">회원가입</button>
    </fieldset>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: null,
      password: null,
      passwordConfirm: null,
      name: null
    };
  },
  methods: {
    signUp(e) {
      // 기본 이벤트를 막으면 타입 체크하는 부분이 동작하지 않음
      // 모든 값이 입력되고 처리될 때 기본 이벤트 막음
      if (!this.email || ! this.password || !this.passwordConfirm || !this.name) {
        return;
      }

      // 기본 이벤트(submit) 막음
      e.preventDefault();
      // axios 사용해서 서버로 입력받은 데이터 전달
      // 서버 측에서 전달받기 원하는 데이터로 수정해야함
      // 임시로 email과 password 사용
      axios.post('http://localhost:3000/todo-list', {
              email: this.email,
              password: this.password,
              name: this.name
            })
           .then(response => {
             // 서버 통신 성공했을 경우의 처리
             console.log(response);
             if (response.status === 201 && response.statusText === 'Created') {
               this.email = '';
               this.password = '';
               this.passwordConfirm = '';
               this.name = '';
               window.alert(response.data.name + '님의 회원가입이 완료되었습니다.');
             }
           })
           .catch(error => {
             // 로그인 실패했을 경우의 처리
             this.email = '';
             this.password = '';
             this.passwordConfirm = '';
             this.name = '';
             window.alert('회원 가입에 실패했습니다.');
           });
    }
  }
}
</script>

<style lang="scss">
.signup {
  margin-top: 30px;
}
</style>
