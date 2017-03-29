<template lang="html">
  <form class="signin-form" action="index.html" method="post">
    <h2>로그인</h2>
    <fieldset>
      <legend>Sign In Form</legend>
      <!-- 사용자 입력 값 연결 -->
      <input v-model="userEmail" type="email" placeholder="이메일" required>
      <input v-model="userPassword" type="password" placeholder="비밀번호" required>
      <button @click="signIn" type="submit">로그인</button>
    </fieldset>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userEmail: null,
      userPassword: null
    };
  },
  methods: {
    signIn(e) {
      // 기본 이벤트를 막으면 타입 체크하는 부분이 동작하지 않음
      // 모든 값이 입력되고 처리될 때 기본 이벤트 막음
      if (!this.userEmail || !this.userPassword) {
        return;
      }

      // 기본 이벤트(submit) 막음
      e.preventDefault();
      // axios 사용해서 서버로 입력받은 데이터 전달
      // 서버 측에서 전달받기 원하는 데이터로 수정해야함
      // 임시로 email과 password 사용
      axios.get('http://localhost:3000/todo-list', {
              params: {
                'email': this.userEmail,
                'password': this.userPassword
              }
            })
           .then(response => {
             // 서버 통신 성공했을 경우의 처리
             if (response.status === 200 && response.statusText === 'OK') {
               this.userEmail = '';
               this.userPassword = '';
               window.alert(response.data[0].name + '님이 로그인 하셨습니다.');
             }
           })
           .catch(error => {
             // 로그인 실패했을 경우의 처리
             this.userEmail = '';
             this.userPassword = '';
             window.alert('회원 정보가 존재하지 않습니다.');
           });
    }
  }
}
</script>

<style lang="scss">
fieldset {
  padding: 0;
  border: 0;
  margin: 0;
}
fieldset > input {
  padding: 2px 0;
  border: 0;
  border-bottom: 5px solid #eee;
  font-size: 1.0625rem;
  width: 260px;
  height: 34px;
  line-height: 2.125;
  margin: 0px auto 2px;
  text-indent: 10px;
  box-sizing: content-box;
}

.signin-form {
  width: 100%;
}

.signin-form > * {
  text-align: center;
}

.signin-form h2 {
  font-size: 2.125rem;
  font-weight: 200;
  margin-top: 0;
}

fieldset > * {
  display: block;
}

fieldset > legend {
  position: absolute;
  left: -99999em;
}

fieldset > button,
.signin-btn {
  width: 260px;
  height: 40px;
  margin: 20px auto 15px;
  font-size: 1.0625rem;
  border-radius: 20px;
  border: 1px solid #a322ef;
  color: #a322ef;
  background: transparent;
}
.signin-btn {
  margin-top: 0;
  color: #fff;
  background: linear-gradient(135deg,#3549fc 0,#a322ef 50%,#fc3fd8 100%);
}
</style>
