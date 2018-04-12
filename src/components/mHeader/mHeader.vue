<template>
  <div class="mHeader">
    <div class="logo">GMZ</div>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="discovery">发现</router-link>
      </div>
      <div class="tab-item">
        <router-link to="mine">我的</router-link>
      </div>
      <div class="tab-item">
        <router-link to="radioStation">电台</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mHeader'
}
</script>

<style scoped lang="sass" type="text/sass">
@import "../../common/style/variable.sass"
@import "../../common/style/mixin.sass"
.mHeader
  position: fixed
  top: 0
  left: 0
  width: 100%
  z-index: 999
  background: $color-background-head
  .logo
    height: 50px
    line-height: 50px
    color: rgb(255, 251, 245)
    text-align: center
    font-size: 20px
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    background: #fff
    .tab-item
      display: block
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: $font-size-medium-x
        color: $color-text
        &.router-link-active
          position: relative
          color: $color-active-text
          &::after
            position: absolute
            bottom: 0
            left: 25%
            content: ''
            width: 50%
            height: 3px
            background: $color-border-bottom
</style>
