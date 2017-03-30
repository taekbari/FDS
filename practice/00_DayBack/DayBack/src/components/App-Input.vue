<template lang="html">
  <div>
    <label v-if="label" for="" v-text="label"></label>
    <input class="default-input" ref="input" :value="value" :type="type" :placeholder="placeholder" @input="updateValue($event.target.value)" required>
  </div>
</template>

<script>
export default {
  name: 'app-input',
  props: {
    'value': {
      required: true
    },
    'label': {
      type: [String, Number]
    },
    'type': {
      default: 'text'
    },
    'placeholder': {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    updateValue (value) {
      this.$refs.input.value = value;
      this.$emit('input', value);
    }
  }
}
</script>

<style lang="sass">
.default-input
  padding: 2px 0
  border: 0
  border-bottom: 5px solid #eee
  font-size: 1.0625rem
  width: 260px
  height: 34px
  line-height: 2.125
  margin: 0px auto 2px
  text-indent: 10px
  box-sizing: content-box
</style>
