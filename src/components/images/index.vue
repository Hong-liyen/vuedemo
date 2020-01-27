<template>
  <div class="images">
    <template v-if="imagesList.lenght > 0">
      <el-radio-group v-model="skin">
        <div v-for="(node, index) in imagesList" :key="index">
          <el-radio :label="index"></el-radio>
          <!-- <img :src="imagesList[0]" alt=""> -->
        </div>
      </el-radio-group>
    </template>
    <!-- <video src="https://www.w3schools.com/tags/movie.mp4" :autoplay="playAuto"></video> -->
  </div>
</template>

<script>

export default {
  name: "image",
  props: {
    srcs: String,
  },
  data() {
    return {
      playAuto: false,
      skin: '',
      imagesList: [
        { img: "https://unsplash.it/400/300?image=1084" },
        { img: "https://unsplash.it/400/300?image=1081" },
        { img: "https://unsplash.it/400/300?image=1082" },
        { img: "https://unsplash.it/400/300?image=1083" }
      ]
    };
  }
};
</script>