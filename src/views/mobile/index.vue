<template>
    <div class="mobile" v-loading="loading">
        <el-button type="primary" @click="rebate">返水拒絕</el-button>
        <el-dialog title="返水拒絕" :visible.sync="dialogVisible" close-on-click-model="true" @close="beforeClose">
            <el-button @click="beforeClose">取消</el-button>
            <el-button type="primary" @click="save">保存更改</el-button>
        </el-dialog>
        <rebateChangeResult v-if="resultVisibe" @close="beforeClose"></rebateChangeResult>
    </div>
</template>

<script>
import rebateChangeResult from "@/components/rebate-change-result/index.vue";

export default {
    name: "mobile",
    components: {
        rebateChangeResult,
    },

    data() {
        return {
            dialogVisible: false,
            resultVisibe: false,
            loading: false,
        }
    },

    methods: {
        rebate () {
            this.dialogVisible = true
        },
        save () {
            this.resultVisibe = true
        },
        beforeClose () {
            this.dialogVisible = true
        }
    }
}
</script>