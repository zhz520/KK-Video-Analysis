<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <h2>视频教程</h2>
    <video src="../../assets/jiaocheng.mp4" controls></video>
  </div>
</template>

<style scoped lang="scss">
$text-shadow:
  0 0 5px #409eff,
  0 0 10px #409eff,
  0 0 15px #409eff,
  0 0 20px #409eff,
  0 0 25px #409eff,
  0 0 30px #409eff,
  0 0 35px #409eff;

.container {
  margin: 0 auto;
  width: 80%;
  text-align: center;
  h2 {
    color: #fff;
    margin-top: 50px;
    font-size: 30px;
    text-shadow: $text-shadow;
  }
  video {
    margin-top: 50px;
    width: 100%;
    height: 500px;
  }
}
</style>
