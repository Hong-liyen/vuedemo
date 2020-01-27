<template>
  <el-cascader
  v-model="text"
  :disabled="disabled"
  :size="size"
  @change="$emit('change', $event)"
  @blur="$emit('blur', $event.target.value)"
  :options="options"
  :filterable="filterable"
  :clearable="clearable"
  :placeholder="'请输入'"></el-cascader>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: ['options', 'size', 'clearable', 'disabled', 'filterable'],
  // props: {
  //   options: Array,
  //   size: String,
  //   clearable: Boolean,
  //   disabled: Boolean,
  // },
  computed: {
    text: {
      set (val) {
        this.$emit('click', val)
      },

      get () {
        if ([undefined, null].includes(this.value)) {
          return ''
        } else {
          return (typeof this.value === 'number') ? this.value.toString() : this.value
        }
      },
    },
  }
}
</script>