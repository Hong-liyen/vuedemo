<template>
    <el-cascader
    v-bind="$attrs" 
    v-on="$listeners"></el-cascader>
</template>

<script>
export default {
    name: "gpo-cascader",
    inheritAttrs: false,
}
</script>