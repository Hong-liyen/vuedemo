<template lang="pug">
el-autocomplete(
  v-bind="$attrs"
  v-on="$listeners"
)
</template>

<script>
function log (...val) {
  if (isDebug) {
    // eslint-disable-next-line
    console.log(...val)
  }
}

let isDebug = false

export default {
  name: 'userAccount',
  inheritAttrs: false,

  model: {
    prop: 'value',
    event: 'input',
  },
}
</script>
