<script setup>
import MyBox from '@/components/MyBox.vue'
import { ref } from 'vue'
const boxData = ref([
  {
    title: '腾讯视频',
    icon: 'icon-tengxunshipin',
    url: 'https://v.qq.com'
  },
  {
    title: '乐视网',
    icon: 'icon-ic_location',
    url: 'https://www.le.com/'
  },
  {
    title: '爱奇艺',
    icon: 'icon-alishangchuan-',
    url: 'https://www.iqiyi.com'
  },
  {
    title: '优酷',
    icon: 'icon-youku',
    url: 'https://www.youku.com'
  },

  {
    title: '土豆',
    icon: 'icon-tudou',
    url: 'https://www.tudou.com/'
  },
  {
    title: '芒果TV',
    icon: 'icon-mangguoTV',
    url: 'https://www.mgtv.com'
  },
  {
    title: '哔哩哔哩',
    icon: 'icon-bilibili-line',
    url: 'https://www.bilibili.com'
  },
  {
    title: '搜狐',
    icon: 'icon-souhu',
    url: 'https://tv.sohu.com'
  }
])
</script>

<template>
  <div>
    <el-container class="w el-container">
      <el-header class="el-header">
        <div class="left">
          <i class="iconfont icon-shipin1"></i>
          <h1>VIP视频解析</h1>
        </div>
        <div class="right">
          <ul>
            <li><RouterLink to="/main">首页</RouterLink></li>
            <li><RouterLink to="/tutorial">使用教程</RouterLink></li>
            <!-- <li><a href="https://cangshuow.com">KK社区</a></li> -->
          </ul>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer class="el-footer">
        <div class="w box-container">
          <div v-for="item in boxData" :key="item">
            <MyBox class="box" :url="item.url">
              <template v-slot:icon
                ><i class="iconfont" :class="item.icon"></i>
              </template>
              <template v-slot:title> {{ item.title }} </template>
            </MyBox>
          </div>
          <p>
            © {{ new Date().getFullYear() }}
            <a href="https://cangshuow.com">KK社区</a> All Rights Reserved.
          </p>
        </div>
      </el-footer>
    </el-container>
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

.w {
  width: 95vw;
  margin: 0 auto;
}
.el-container {
  .el-header {
    margin-bottom: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        align-items: center;
        li {
          margin-left: 1rem;
          a {
            color: #fff;
            text-shadow: $text-shadow;
            font-size: 15px;
            text-decoration: none;
          }
          a:hover {
            color: #409eff;
          }
        }
      }
    }
    .left {
      display: flex;
      align-items: center;
      h1 {
        display: inline-block;
        font-size: 20px;
        margin-left: 1rem;
        // color: #fff;

        background: linear-gradient(
          120deg,
          #ffffff 0%,
          #3498db 25%,
          #2ecc71 50%,
          #9b59b6 75%,
          #ffffff 100%
        );
        background-size: 200% auto;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 30px rgba(52, 152, 219, 0.2);
        // text-shadow: $text-shadow;
      }
      .iconfont {
        font-size: 35px;
      }
      .icon-shipin1 {
        color: #fff;
        text-shadow: $text-shadow;
      }
    }
  }
  .el-footer {
    // .box {
    //   .iconfont {
    //     font-size: 1.5rem;
    //   }
    .iconfont {
      color: #fff;
      font-size: 1.6rem;
    }
    // }
    .box-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
