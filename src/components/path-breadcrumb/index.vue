<template>
  <div class="path-breadcrumb" :class="{ 'is-color': isColor }">
    <div class="logo">
      <router-link :to="{ path: '/' }">
      </router-link>
    </div>
    <div class="icon">
    </div>
    <transition name="fade-in">
      <div v-if="isNavbar" class="menu">
        <template v-for="(menuNode) in MENU_LIST">
          <router-link :to="{ path: menuNode.path }"> {{ menuNode.text }} </router-link>
        </template>        
      </div>
    </transition>
  </div>
</template>

<script>
import { MENU_LIST } from "@/configs/site"

export default {
  name: "path-breadcrumb",
  data () {
    return {
      MENU_LIST,
      isNavbar: true,
      isColor: false,
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
        this.isColor = true
      } else {
        this.isColor = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./style";
</style>
