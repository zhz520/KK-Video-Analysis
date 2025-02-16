<script setup>
const props = defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <a :href="url" class="my-big-box" target="_blank">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <p class="title">
      <slot name="title"></slot>
    </p>
  </a>
</template>

<style scoped lang="scss">
.my-big-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 77px;
  background-color: transparent;
  color: #333;
  border-radius: 6px;
  //   黑色背景，盒子发光
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    //蓝
    color: #409eff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 1px solid #409eff;
  }
}

.title {
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  //   line-height: 95px;
}
</style>
