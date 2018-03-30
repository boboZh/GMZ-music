<template>
  <div id="app">
    <mHeader></mHeader>
    <slider></slider>
    <div class="block border-1px">
      <div class="block-item">
        <a href="">
          <span class="icon-calendar"></span>
        </a>
      </div>
      <div class="block-item">
        <a href="">
          <span class="icon-music"></span>
        </a>
      </div>
      <div class="block-item">
        <a href="">
          <span class="icon-stats-bars"></span>
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

#app
  margin: 0
  .block
    display: flex
    width: 100%
    height: 80px
    line-height: 80px
    @include border-1px(rgba(7, 17, 27, .1))
    .block-item
      display: block
      flex: 1
      text-align: center
      & > a
        display: block
        width: 100%
        height: 80px
        span
          font-size: 32px
          color: rgb(178, 87, 82)

</style>
