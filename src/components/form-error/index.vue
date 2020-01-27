<template>
  <ol class="form-errors" v-if="errors.$error">
      <form-error v-if="typeof(errors.required) !== undefined && !errors.required">必填</form-error>
      <slot></slot>
  </ol>
</template>

<script>
import formError from './index.vue';

export default {
  components: {
    formError
  },
  props: {
    errors: {
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>