<template>
  <div class="discovery">
    <slider></slider>
    <div class="block border-1px">
      <div class="block-item">
        <a href="">
          <span class="icon icon-calendar"></span>
          <span class="title">
            每日推荐
          </span>
        </a>
      </div>
      <div class="block-item">
        <a href="">
          <span class="icon icon-music"></span>
          <span class="title">
            歌单
          </span>
        </a>
      </div>
      <div class="block-item">
        <a href="">
          <span class="icon icon-stats-bars"></span>
          <span class="title">
            排行榜
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import slider from "components/slider/slider";
export default {
  components: {
    slider: slider
  }
};
</script>

<style scoped>

</style>
