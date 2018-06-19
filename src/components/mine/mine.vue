<template>
  <div class="mine">
    <ul>
      <li><i class="icon-music"></i>本地音乐<span>（12）</span></li>
      <li><i class="icon-music"></i>最近播放<span>（100）</span></li>
      <li><i class="icon-music"></i>下载管理<span>（22）</span></li>
      <li><i class="icon-music"></i>我的电台<span>（0）</span></li>
      <li><i class="icon-heart"></i>我的收藏<span>（专辑/歌手/视频/专栏）</span></li>
    </ul>
    <p><i class="icon-music"></i>创建的歌单（1）</p>
    <ul class="created_list">
    <li>
     <div class="img_icon">
       <img src="../../common/images/love.png" alt="">
     </div>
     <div class="content_icon">
        <span>我喜欢的音乐</span>
        <span><i class="icon-music"></i>48首，已下载47首</span>
     </div>
    </li>
    </ul>
    <div class="mineBottom">
      <p>默（电影《何以笙箫默》主题插曲）</p>
      <audio src="" controls></audio>
    </div>
  </div>
</template>

<script>
import { fetch } from "../../components/axios/fetch";
export default {
  created() {
    this.$http({
      method: "get",
      url: "/v1/banner",
      params: {
        RECDATA: JSON.stringify({})
      }
    })
      .then(response => {})
      .catch(error => {});
  }
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
   i
    padding-right: 8px
    color: #ca4241
   span
    color: #7e8c8d
   .img_icon
    width: 36px
    height: 36px
    display: inline-block
    img
     width: 100%
   .content_icon
    display: inline-block
    span
     display: block
     height: 24px
     line-height: 24px
  p
   color: #555
   height: 26px
   line-height: 26px
   margin: 0 15px
   padding-left: 8px
   background: #eee
   font-size: 8px
   i
    padding-right: 6px
  .created_list
   li
    height: 48px
    span
     font-size: 13px
    span:first-child
     font-size: 16px
  .mineBottom
   position: fixed
   bottom: 0
   left: 0
   width: 90%
   margin: 0 5%
   audio
    width: 100%
   p
    margin: 0
    font-size: 13px
    height: 30px
    line-height: 30px
    color: #333
</style>
