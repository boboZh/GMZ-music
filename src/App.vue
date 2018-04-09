<template>
  <div id="app">
    <mHeader></mHeader>
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
    <router-view/>
  </div>
</template>

<script>
import mHeader from 'components/mHeader/mHeader';
import slider from 'components/slider/slider';
export default {
  name: 'App',
  components: {
    slider,
    mHeader: mHeader
  }
};
</script>

<style lang="sass">
@import "/common/style/icon.css"
@import "/common/style/mixin.sass"
@import "/common/style/variable.sass"

#app
  margin: 0
  .block
    display: flex
    margin-top: 20px
    width: 100%
    height: 110px
    @include border-1px(rgba(7, 17, 27, .1))
    .block-item
      display: block
      flex: 1
      text-align: center
      /*border: 1px solid red*/
      & > a
        display: block
        margin: 0 auto
        width: 100%
        height: 110px
        text-align: center
        .icon
          display: block
          margin: 0 auto
          width: 60px
          height: 60px
          line-height: 60px
          border: 1px solid rgb(178, 87, 82)
          border-radius: 50%
          text-align: center
          font-size: 32px
          color: rgb(178, 87, 82)
        .title
          display: block
          margin: 5px auto
          padding: 0
          width: 100%
          height: 30px
          line-height: 30px
          color: $color-text-d
          font-size: $font-size-medium
          /*border: 1px solid red*/
</style>
