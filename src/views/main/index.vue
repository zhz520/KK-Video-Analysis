<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, watch } from 'vue'
const form = ref({
  url: 'https://v.qq.com/x/cover/zr5a67l333ehzu9/d0032x85stp.html',
  selectValue: 'https://jx.xmflv.com/?url='
})

const mathUrl = computed(() => {
  try {
    return form.value.url.match(/(https?:\/\/[^\s]+)/g)[0] || ''
  } catch (error) {
    ElMessage({
      message: '请输入正确的播放地址',
      type: 'warning'
    })
    return ''
  }
})
const resUrl = ref('')
const options = ref([
  {
    value: 'https://jx.xmflv.com/?url=',
    label: '一号解析接口'
  },
  {
    value: 'https://jx.xymp4.cc/?url=',
    label: '二号解析接口'
  },
  {
    value: 'http://vip.xxphp.cn/player.html?url=',
    label: '三号解析接口'
  },
  {
    value: 'https://www.yemu.xyz/?url=',
    label: '四号解析接口'
  },
  {
    value: 'https://jx.m3u8.tv/jiexi/?url=',
    label: '五号解析接口'
  },
  {
    value: 'https://bd.jx.cn/?url=',
    label: '六号解析接口'
  },
  {
    value: 'https://jx.playerjy.com/?url=',
    label: '七号解析接口'
  }
])
const onSubmit = (e) => {
  e.preventDefault()
  if (!form.value.url) {
    ElMessage({
      message: '请输入播放地址',
      type: 'warning'
    })
    return
  }
  if (!form.value.selectValue) {
    ElMessage({
      message: '请选择解析接口',
      type: 'warning'
    })
    return
  }

  resUrl.value = form.value.selectValue + mathUrl.value
}
</script>

<template>
  <form :model="form" class="el-form">
    <input
      class="el-input"
      v-model="form.url"
      placeholder="输入播放地址"
      required
    />
    <br />
    <el-select
      class="el-select"
      v-model="form.selectValue"
      placeholder="please select your zone"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>

    <br />

    <el-button @click="onSubmit" class="el-button" type="primary"
      >解析播放</el-button
    >
  </form>

  <h2>
    视频解析需耐心等待数秒；如视频未自动播放，请手动点击播放；如视频播放异常，请刷新或切换线路、更换不同平台视频网址播放！
  </h2>

  <div class="iframe-box" v-if="resUrl">
    <iframe
      :src="resUrl"
      frameborder="0"
      scrolling="yes"
      allowfullscreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
    ></iframe>
  </div>
  <div v-else class="no-url">
    <h3>请输入播放地址选择接口并点击解析播放按钮</h3>
  </div>

  <p class="tip">
    本站视频源于互联网视频网站，系互联网抓取所得，仅供学习交流。
  </p>
</template>

<style scoped lang="scss">
$box-shadow:
  0 0 5px #409eff,
  0 0 10px #409eff,
  0 0 15px #409eff,
  0 0 20px #409eff,
  0 0 25px #409eff,
  0 0 30px #409eff,
  0 0 35px #409eff;

.el-form {
  text-align: center;
  justify-content: center;
  margin-bottom: 3rem;
  .el-input {
    color: #fff;
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    // box-shadow: $box-shadow;
    background-color: transparent;
    border-bottom: 1px solid #409eff;

    margin-bottom: 2.2rem;
  }
  .el-select {
    // width: 20vw;
    margin-bottom: 2.2rem;
  }
  .el-button {
    // width: 10vw;
  }
}
h2 {
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
  // text-shadow: $box-shadow;
}
h3 {
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  text-shadow: $box-shadow;
}
.iframe-box {
  width: 100%;
  height: 630px;
  background-color: #000;
  iframe {
    width: 100%;
    height: 100%;
  }
}
.no-url {
  width: 100%;
  height: 300px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 400;
  text-shadow: $box-shadow;
}
p {
  // color: #fff;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  // text-shadow: $box-shadow;
}
.tip {
  &:hover {
    color: #409eff;
  }
}
</style>
