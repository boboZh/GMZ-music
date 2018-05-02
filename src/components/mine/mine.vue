<template>
  <div class="mine">
    <ul>
      <li>本地音乐<span>（12）</span></li>
      <li>最近播放<span>（100）</span></li>
      <li>下载管理<span>（22）</span></li>
      <li>我的电台<span>（0）</span></li>
      <li>我的收藏<span>（专辑/歌手/视频/专栏）</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mine"
};
</script>

<style scoped lang="sass" type="text/sass">
@import "../../common/style/variable.sass"
@import "../../common/style/mixin.sass"
.mine
  margin-top: 90px
  li
   height: 40px
   line-height: 40px
   margin: 0 20px
   border-bottom: 1px solid #ddd
   span
    color: #7e8c8d
</style>
