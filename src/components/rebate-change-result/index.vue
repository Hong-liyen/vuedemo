<template>
  <div class="rebate-change-result">
    <el-dialog title="更新結果" :visible="true" :before-close="beforeClose" :close-on-click-modal="true">
      <span>123</span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: "case",
  props: ['close'],
  data () {
    return {
     
    }
  },
  methods: {
    beforeClose (done) {
      this.$confirm('close')
        .then(() => {
          done()
        })
      this.$emit('close')
    }
  }
}  
</script>
