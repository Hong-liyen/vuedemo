<template>
  <div class="train-city">
    <h3>父组件传给子组件的toCity:{{sendData}}</h3> 
    <br/><button @click='select(`大连`)'>点击此处将‘大连’发射给父组件</button>
    <h3>123456789</h3>
  </div>
</template>

<script>
import pathBreadcrumb from "@/components/path-breadcrumb/index.vue";

export default {
  name: "case",
  components: {
    pathBreadcrumb,
  },
  data () {
    return {
      textToTranslate:'',
    }
  },
  props: {
    prop: {
      
    }
  },
  props:['sendData', 'parent'], // 用来接收父组件传给子组件的数据
  methods:{
    select(val) {
      let data = {
        cityname: val
      };
      this.$emit('showCityName',data);//select事件触发后，自动触发showCityName事件
    },
    test(formData) {
      this.$emit('parent', formData)
    }
  }
}  
</script>
