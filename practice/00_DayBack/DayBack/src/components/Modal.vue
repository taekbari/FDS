<template lang="html">
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
      <a class="modal-close" @click.prevent="$emit('close')">close</a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.modal::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  background: #fff;
  border-radius: 5px;
}

.modal-close {
  position: absolute;
  top: 3px;
  right: -40px;
  width: 24px;
  height: 24px;
  text-indent: -9999em;
  background-image: url('../assets/img-pcsp5x2.png');
  background-size: 444px 335px;
  background-repeat: no-repeat;
  background-position: -299px -132px;
  cursor: pointer;
}
</style>
