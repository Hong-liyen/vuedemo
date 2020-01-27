<template>
  <div>
    <input type="checkbox" :ckecked="checked" :change="$emit('change', $event.target.checked)">
  </div>
</template>

<script>
export default {
  name: 'base-checkbox',
  props: {
    checked: Boolean
  }
}
</script>