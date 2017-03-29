<template lang="html">
  <form class="signin-form" action="index.html" method="post">
    <h2>로그인</h2>
    <fieldset>
      <legend>Sign In Form</legend>
      <input type="text" placeholder="이메일">
      <input type="text" placeholder="비밀번호">
      <button type="submit">로그인</button>
    </fieldset>
  </form>
</template>

<script>
export default {
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
