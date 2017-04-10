<template lang="html">
  <transition name="signin" appear mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {

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
</style>
