<template>
    <div class="foot">
        <div class="footerlogo">
            <router-link :to="{ path: '/' }">
            </router-link>
        </div>
        <div class="copyright">© ORIENTALPLATFORM.ALL RIGHT RESERVED. 版权所有 东方平台</div>
        <div class="email">
            <span>Bwtgame88@gmail.com</span>
        </div>
        <transition name="el-fade-in">
            <div v-if="toTopShow" class="page-component-up" @click="scrollToTop">
                <i class="el-icon-caret-top"></i>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "foot",
    data() {
        return {
            toTopShow: false
        }
    },
    mounted() {
        this.$nextTick(()=>{
            window.addEventListener('scroll', this.handleScroll, true)
        });
    },
    methods: {
        handleScroll() {
            let scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop > 200) {
            this.toTopShow = true
            } else {
            this.toTopShow = false
            }
    
        },
        scrollToTop() {
            window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

    }

}
</script>

<style lang="scss" scoped>
@import "./style";
</style>