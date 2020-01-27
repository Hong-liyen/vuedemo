<template>
  <div class="home">
    <el-date-picker placeholder="請輸入日期"></el-date-picker>
    <gpo-cascader></gpo-cascader>
    <!-- <div v-for="(item, index) in COOPRETE_LIST" key="index" :class="item.class">
      <img :src="item.img" alt="">
    </div> -->
    <!-- <router-link :to="{ path: '/cooperation'}" class="join">加入我們</router-link> -->
  </div>
</template>

<script>
import gpoCascader from '@/components/gpo-cascader/index';
export default {
  name: "home",
  data () {
    return {
      COOPRETE_LIST,
    }
  },
  components: {
    gpoCascader,
  }
};
</script>

<style lang="scss">
  @import './style.scss';
</style>
